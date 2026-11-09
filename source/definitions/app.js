(function () {
  "use strict";
  var DATA = window.NOTIONS_STSS || { ouverts: {}, chapitres: {}, notions: [] };
  var NIV = window.NIVEAU_STSS === "P" ? "P" : "T";      // page Première ou Terminale
  var params = new URLSearchParams(location.search);
  var SHOW_ALL = params.has("tout");               // aperçu professeur : toutes les notions
  var OUV = { P: (DATA.ouverts || {}).premiere || [], T: (DATA.ouverts || {}).terminale || [] };
  function isOpen(n) {
    if (SHOW_ALL) return true;
    if (NIV === "T" && n.niveau === "P") return true;   // en Terminale : tous les acquis de Première
    return OUV[n.niveau].indexOf(n.chapitre) >= 0;
  }
  function num(c) { return c.replace("C", ""); }
  var GROUPS = [];                                      // ordre d'affichage des chapitres sur cette page
  function addGroups(niv, prefix) {
    var ch = (DATA.chapitres || {})[niv === "T" ? "terminale" : "premiere"] || {};
    Object.keys(ch).forEach(function (c) { GROUPS.push({ k: niv + "-" + c, label: prefix + "Chapitre " + num(c) + " — " + ch[c], short: "C" + num(c) + " — " + ch[c] }); });
  }
  if (NIV === "T") { addGroups("T", ""); addGroups("P", "Acquis de Première · "); } else addGroups("P", "");
  var GLABEL = {}; GROUPS.forEach(function (g) { GLABEL[g.k] = g; });
  DATA.notions.forEach(function (n) { n.g = n.niveau + "-" + n.chapitre; });

  var ALL = DATA.notions.filter(function (n) { return NIV === "T" || n.niveau === "P"; });
  var OPEN = ALL.filter(isOpen);
  var byId = {}; ALL.forEach(function (n) { byId[n.id] = n; });

  /* ---------- stockage local (facultatif) ---------- */
  var KEY = "stss-definitions-" + NIV;
  var store = { boxes: {}, seen: 0, ok: 0, streak: 0, best: 0 };
  try { var raw = localStorage.getItem(KEY); if (raw) store = Object.assign(store, JSON.parse(raw)); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
  function box(id) { var b = store.boxes[id]; return b === undefined ? -1 : b; }

  /* ---------- normalisation et repérage des mots-clés ---------- */
  function normChar(c) {
    var low = c.toLowerCase();
    if (low === "œ") return "oe"; if (low === "æ") return "ae";
    var s = low.normalize("NFD").replace(/[̀-ͯ]/g, "");
    return /[a-z0-9]/.test(s) ? s : " ";
  }
  function normMap(text) {               // texte normalisé + correspondance vers l'original
    var out = "", map = [];
    for (var i = 0; i < text.length; i++) { var s = normChar(text[i]); for (var k = 0; k < s.length; k++) { out += s[k]; map.push(i); } }
    return { s: out, map: map };
  }
  function norm(t) { return normMap(t).s.replace(/\s+/g, " ").trim(); }
  function findAlt(textNorm, alt) {      // début de mot obligatoire, préfixe accepté
    var a = norm(alt); if (!a) return -1;
    var re = new RegExp("(^|\\s)" + a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    var m = re.exec(textNorm); return m ? m.index + m[1].length : -1;
  }
  function keyFound(answerNorm, key) { return key.split("|").some(function (alt) { return findAlt(answerNorm, alt) >= 0; }); }
  function keyLabel(key, def) {         // le mot tel qu'il est écrit dans la définition (avec accents)
    var nm = normMap(def), alts = key.split("|");
    for (var i = 0; i < alts.length; i++) {
      var st = findAlt(nm.s, alts[i]); if (st < 0) continue;
      var a = norm(alts[i]), en = st + a.length; while (en < nm.s.length && nm.s[en] !== " ") en++;
      return def.slice(nm.map[st], nm.map[en - 1] + 1);
    }
    return alts[0].replace(/'/g, "’");
  }
  function highlight(def, keys) {
    var nm = normMap(def), s = nm.s, ranges = [];
    keys.forEach(function (key) {
      key.split("|").forEach(function (alt) {
        var a = norm(alt); if (!a) return;
        var re = new RegExp("(^|\\s)" + a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), m;
        while ((m = re.exec(s))) {
          var st = m.index + m[1].length, en = st + a.length;
          while (en < s.length && s[en] !== " ") en++;          // jusqu'à la fin du mot
          ranges.push([nm.map[st], nm.map[en - 1] + 1]);
        }
      });
    });
    ranges.sort(function (x, y) { return x[0] - y[0]; });
    var merged = [];
    ranges.forEach(function (r) { var l = merged[merged.length - 1]; if (l && r[0] <= l[1]) l[1] = Math.max(l[1], r[1]); else merged.push(r.slice()); });
    var html = "", pos = 0;
    merged.forEach(function (r) { html += esc(def.slice(pos, r[0])) + "<mark>" + esc(def.slice(r[0], r[1])) + "</mark>"; pos = r[1]; });
    return html + esc(def.slice(pos));
  }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function lev(a, b) {
    var m = a.length, n = b.length, d = []; for (var i = 0; i <= m; i++) { d[i] = [i]; }
    for (var j = 1; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  var STOP = { le: 1, la: 1, les: 1, l: 1, un: 1, une: 1, des: 1, de: 1, du: 1, d: 1, et: 1, a: 1, en: 1, au: 1, aux: 1, ou: 1 };
  function core(t) { return norm(t.replace(/\(.*?\)/g, "")).split(" ").filter(function (w) { return w && !STOP[w]; }).join(" "); }
  function termOk(answer, terme) {
    var a = core(answer); if (!a) return false;
    var paren = (terme.match(/\((.*?)\)/) || [])[1]; var variants = [terme].concat(terme.split(/ et | : |, /), paren ? [paren] : []);
    return variants.some(function (v) { var c = core(v); if (!c) return false; var tol = c.length > 8 ? 2 : (c.length > 4 ? 1 : 0); return lev(a, c) <= tol || (a.length >= 5 && c.indexOf(a) === 0 && a.length >= c.length - 3); });
  }
  /* masque le terme dans la définition (mode « je trouve le mot ») */
  function maskTerm(def, terme) {
    var nm = normMap(def), s = nm.s, ranges = [];
    function grab(words) {                // cherche la suite de mots (avec variations de fin de mot)
      var pat = words.map(function (w) { return w.slice(0, Math.max(3, w.length - 2)) + "[a-z]*"; }).join("(?:\\s+[a-z]{1,3})?\\s+");
      var re = new RegExp("(^|\\s)" + pat, "g"), m, found = false;
      while ((m = re.exec(s))) { var st = m.index + m[1].length, en = m.index + m[0].length; ranges.push([nm.map[st], nm.map[en - 1] + 1]); found = true; }
      return found;
    }
    var parts = terme.replace(/\(.*?\)/g, "").split(/ et | : |, /);
    parts.forEach(function (part) {
      var words = core(part).split(" ").filter(Boolean);
      if (!words.length) return;
      if (!grab(words)) { var longest = words.slice().sort(function (a, b) { return b.length - a.length; })[0]; if (longest.length > 3) grab([longest]); }
    });
    ranges.sort(function (x, y) { return x[0] - y[0]; });
    var html = "", pos = 0;
    ranges.forEach(function (r) { if (r[0] < pos) return; html += esc(def.slice(pos, r[0])) + '<span class="blank" aria-label="mot caché">…</span>'; pos = r[1]; });
    return html + esc(def.slice(pos));
  }
  /* ---------- tirage ---------- */
  var mode = "definir", poolKey = "", current = null, recent = [];
  function poolFor(k) {
    var list = OPEN;
    if (k === "allT") return list.filter(function (n) { return n.niveau === "T"; });
    if (k === "allP") return list.filter(function (n) { return n.niveau === "P"; });
    if (k === "allTP") return list;
    if (k === "bac") return list.filter(function (n) { return n.prio; });
    if (k && k.indexOf("et:") === 0) { var e = +k.slice(3); return list.filter(function (n) { return (n.etapes || []).indexOf(e) >= 0; }); }
    if (k === "revoir") return list.filter(function (n) { var b = box(n.id); return b >= 0 && b <= 1; });
    if (k && k.indexOf("th:") === 0) { var th = k.slice(3); return list.filter(function (n) { return n.g === th; }); }
    return [];
  }
  function pool() { return poolFor(poolKey); }
  var WEIGHT = { "-1": 6, "0": 9, "1": 6, "2": 3, "3": 2, "4": 1 };
  function draw() {
    var list = pool(); if (!list.length) return null;
    var cand = list.filter(function (n) { return recent.indexOf(n.id) < 0; }); if (!cand.length) cand = list;
    var total = 0, w = cand.map(function (n) { var x = WEIGHT[box(n.id)]; total += x; return x; });
    var r = Math.random() * total;
    for (var i = 0; i < cand.length; i++) { r -= w[i]; if (r <= 0) return cand[i]; }
    return cand[cand.length - 1];
  }

  /* ---------- rendu de la question ---------- */
  var qcard = document.getElementById("qcard");
  function themeShort(g) { return (GLABEL[g] || {}).short || ""; }
  function nextQuestion() {
    current = draw();
    if (!current) {
      qcard.innerHTML = '<p class="empty">' + (poolKey === "revoir" ? "Plus rien à revoir : bravo ! Choisis un autre chapitre." : "Aucune notion dans cette sélection pour le moment.") + "</p>";
      return;
    }
    recent.push(current.id); if (recent.length > Math.min(6, Math.floor(pool().length / 2))) recent.shift();
    var n = current, head = '<div class="q-meta"><span>' + (NIV === "T" ? (n.niveau === "T" ? "Terminale" : "Acquis de Première") + " · " : "") + esc(themeShort(n.g)) + "</span><span>" + levelLabel(box(n.id)) + "</span></div>";
    if (mode === "definir") {
      qcard.innerHTML = head + '<h2 class="q-term">' + esc(n.terme) + '</h2><p class="q-prompt">Écris la définition vue en cours, le plus fidèlement possible.</p>' +
        '<label for="answer" class="hint" style="display:block;margin:0 0 4px">Ta définition</label><textarea id="answer" placeholder="Une ' + "phrase complète…" + '"></textarea>' +
        '<div class="actions"><button class="btn" type="button" id="btn-check">Voir le corrigé</button><button class="btn ghost" type="button" id="btn-skip">Je ne sais pas</button></div>' +
        '<div id="corr"></div>';
    } else {
      qcard.innerHTML = head + '<p class="q-prompt" style="margin-top:10px">Quelle notion correspond à cette définition ?</p><div class="q-def">' + maskTerm(n.definition, n.terme) + "</div>" +
        '<label for="answer" class="hint" style="display:block;margin:0 0 4px">La notion</label><input type="text" id="answer" autocomplete="off" placeholder="ta réponse">' +
        '<div class="actions"><button class="btn" type="button" id="btn-check">Valider</button><button class="btn ghost" type="button" id="btn-skip">Je ne sais pas</button></div>' +
        '<div id="corr"></div>';
    }
    var input = document.getElementById("answer");
    document.getElementById("btn-check").onclick = function () { correct(input.value, false); };
    document.getElementById("btn-skip").onclick = function () { correct("", true); };
    if (mode === "trouver") input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); correct(input.value, false); } });
    if (window.matchMedia("(min-width: 700px)").matches) input.focus();
  }
  var ETAPES = DATA.etapes || {};
  function tags(n) {                    // étiquettes : boussole et bac en Terminale, hors programme partout
    var t = "";
    if (NIV === "T") {
      (n.etapes || []).forEach(function (e) { t += '<span class="tag etape">' + e + " · " + esc(ETAPES[e] || "") + "</span>"; });
      if (n.prio) t += '<span class="tag bac">★ À mobiliser au bac</span>';
    }
    if (n.horsProgramme) t += '<span class="tag hp">Hors programme, utile</span>';
    return t ? '<div class="tags">' + t + "</div>" : "";
  }
  function levelLabel(b) { return ["À revoir", "En cours", "Presque", "Bien", "Sue"][b] || "Nouvelle"; }

  function correct(answer, skipped) {
    var n = current, corr = document.getElementById("corr");
    document.getElementById("btn-check").disabled = true; document.getElementById("btn-skip").disabled = true;
    document.getElementById("answer").readOnly = true;
    var html = '<div class="corrige">';
    if (mode === "definir") {
      var an = norm(answer), found = n.cles.map(function (k) { return keyFound(an, k); }), nb = found.filter(Boolean).length;
      if (!skipped) html += '<p class="verdict ' + (nb >= Math.ceil(n.cles.length * 0.6) ? "ok" : "ko") + '">Idées clés repérées dans ta réponse : ' + nb + " sur " + n.cles.length + "</p>";
      html += '<h3>Le corrigé</h3><p class="ref">' + highlight(n.definition, n.cles) + "</p>";
      if (!skipped) html += '<ul class="keys">' + n.cles.map(function (k, i) { return '<li class="' + (found[i] ? "ok" : "ko") + '"><b>' + (found[i] ? "✓" : "✗") + "</b><span>" + esc(keyLabel(k, n.definition)) + (found[i] ? "" : " — à ajouter") + "</span></li>"; }).join("") + "</ul>" +
        '<p class="hint">L\'ordinateur repère des mots, pas le sens : c\'est toi qui juges si ta définition dit la même chose.</p>';
    } else {
      var good = !skipped && termOk(answer, n.terme);
      html += '<p class="verdict ' + (good ? "ok" : "ko") + '">' + (good ? "Exact : " : (skipped ? "La réponse : " : "Pas tout à fait. La réponse : ")) + esc(n.terme) + "</p>" +
        '<p class="ref">' + highlight(n.definition, n.cles) + "</p>";
    }
    if (n.exemple) html += '<p class="ex"><strong>Exemple :</strong> ' + esc(n.exemple) + "</p>";
    html += tags(n) + '<p class="src">' + esc(n.source) + (n.externe ? '<span class="ext">source externe</span>' : "") + "</p>";
    if (mode === "definir" && !skipped) {
      html += '<div class="self"><p>Alors, tu la savais ?</p><div class="actions">' +
        '<button type="button" data-r="2">Je la savais</button><button type="button" data-r="1">À moitié</button><button type="button" data-r="0">À revoir</button></div></div>';
    } else {
      html += '<div class="actions"><button class="btn teal" type="button" id="btn-next">Notion suivante</button></div>';
    }
    corr.innerHTML = html + "</div>";
    if (mode === "definir" && !skipped) {
      corr.querySelectorAll(".self button").forEach(function (b) { b.onclick = function () { record(+b.dataset.r); nextQuestion(); }; });
    } else {
      record(skipped ? 0 : (termOk(answer, n.terme) ? 2 : 0));
      var nx = document.getElementById("btn-next"); nx.onclick = nextQuestion; nx.focus();
    }
  }
  function record(r) {
    var id = current.id, b = box(id);
    if (r === 2) b = Math.min(4, b < 0 ? 2 : b + 1); else if (r === 1) b = Math.max(1, Math.min(b, 2)); else b = 0;
    store.boxes[id] = b; store.seen++;
    if (r === 2) { store.ok++; store.streak++; store.best = Math.max(store.best, store.streak); } else store.streak = 0;
    save(); renderStats();
  }

  /* ---------- statistiques, sélection ---------- */
  function renderStats() {
    var sues = OPEN.filter(function (n) { return box(n.id) >= 3; }).length, revoir = OPEN.filter(function (n) { var b = box(n.id); return b >= 0 && b <= 1; }).length;
    document.getElementById("stats").innerHTML =
      '<span class="chip">' + sues + " / " + OPEN.length + " notions sues</span>" +
      '<span class="chip">Série : ' + store.streak + (store.best ? " (record " + store.best + ")" : "") + "</span>" +
      (revoir ? '<span class="chip coral">' + revoir + " à revoir</span>" : "");
  }
  function poolLabel(k) {
    if (k === "allT") return "Toutes les notions de Terminale";
    if (k === "allTP") return "Terminale + Première";
    if (k === "allP") return NIV === "T" ? "Toutes les notions de Première" : "Toutes les notions de l'année";
    if (k === "revoir") return "Mes notions à revoir";
    if (k === "bac") return "Les notions à mobiliser au bac";
    if (k.indexOf("et:") === 0) return "Étape " + k.slice(3) + " de la boussole · " + (ETAPES[k.slice(3)] || "");
    if (k.indexOf("th:") === 0) return (GLABEL[k.slice(3)] || {}).label || "";
    return "";
  }
  function fillPool() {
    var prevKey = poolKey, box_ = document.getElementById("pool-list"), html = '<legend class="sr">Notions à travailler</legend>', first = true;
    function opt(k, extra) {
      var c = poolFor(k).length; if (!c) return "";
      var h = '<label class="choice-opt"><input type="radio" name="pool" value="' + k + '"' + (first ? " checked" : "") + '><span>' + esc(extra || poolLabel(k)) + "</span><em>" + c + " notion" + (c > 1 ? "s" : "") + "</em></label>";
      first = false; return h;
    }
    function chapters(niv, title, prefix) {
      var h = ""; GROUPS.forEach(function (g) { if (g.k.charAt(0) === niv) h += opt("th:" + g.k, prefix + g.short.replace(/^C(\d+) — /, "Chapitre $1 — ")); });
      return h ? '<p class="group-title">' + title + "</p>" + h : "";
    }
    if (NIV === "T") {
      html += chapters("T", "Un chapitre de Terminale", "");
      html += '<p class="group-title">Toute l\'année</p>' + opt("allT") + opt("allTP");
      html += chapters("P", "Un chapitre de Première", "");
    } else {
      html += chapters("P", "Un chapitre", "");
      html += '<p class="group-title">Toute l\'année</p>' + opt("allP");
    }
    if (NIV === "T") {
      var eh = opt("bac"); Object.keys(ETAPES).forEach(function (e) { eh += opt("et:" + e); });
      if (eh) html += '<p class="group-title">Par étape de la boussole</p>' + eh;
    }
    var rv = opt("revoir"); if (rv) html += '<p class="group-title">Mes erreurs</p>' + rv;
    box_.innerHTML = html;
    var prev = poolKey && box_.querySelector('input[value="' + poolKey + '"]');
    if (prev) prev.checked = true;
    var checked = box_.querySelector("input:checked"); poolKey = checked ? checked.value : "";
    box_.querySelectorAll("input").forEach(function (i) { i.onchange = function () { poolKey = i.value; }; });
  }
  function startGame() {
    if (!poolKey || !poolFor(poolKey).length) return;
    recent = [];
    document.getElementById("setup").hidden = true;
    document.getElementById("playbar").hidden = false; qcard.hidden = false;
    document.getElementById("play-label").textContent = poolLabel(poolKey) + " · " + (mode === "definir" ? "Je définis" : "Je trouve le mot");
    nextQuestion();
  }
  function showSetup() {
    fillPool(); renderStats();
    document.getElementById("setup").hidden = false;
    document.getElementById("playbar").hidden = true; qcard.hidden = true;
  }
  document.getElementById("btn-start").onclick = startGame;
  document.getElementById("btn-change").onclick = showSetup;
  document.querySelectorAll(".seg button").forEach(function (b) {
    b.onclick = function () { mode = b.dataset.mode; document.querySelectorAll(".seg button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); };
  });

  /* ---------- code de sauvegarde ---------- */
  function h4(id) { var h = 5381; for (var i = 0; i < id.length; i++) h = ((h * 33) ^ id.charCodeAt(i)) >>> 0; return ("000" + (h % 1679616).toString(36)).slice(-4); }
  var HASH = {}; ALL.forEach(function (n) { HASH[h4(n.id)] = n.id; });
  function makeCode() {
    var parts = []; Object.keys(store.boxes).forEach(function (id) { if (byId[id]) parts.push(h4(id) + store.boxes[id]); });
    return "STSS" + NIV + "-" + store.best + "-" + parts.join("");
  }
  function readCode(code) {
    var m = /^STSS([TP])-(\d+)-([0-9a-z]*)$/.exec(code.replace(/\s+/g, ""));
    if (!m) return "Ce code n'est pas reconnu. Vérifie que tu l'as copié en entier.";
    if (m[1] !== NIV) return "Ce code vient de la page " + (m[1] === "T" ? "Terminale" : "Première") + " : colle-le sur cette page-là.";
    var boxes = {}, body = m[3];
    for (var i = 0; i + 5 <= body.length; i += 5) { var id = HASH[body.slice(i, i + 4)], b = +body.charAt(i + 4); if (id && b >= 0 && b <= 4) boxes[id] = b; }
    store = { boxes: boxes, seen: 0, ok: 0, streak: 0, best: +m[2] || 0 }; save();
    renderStats(); renderProgres(); renderCarnet(); fillPool();
    return "C'est fait : " + Object.keys(boxes).length + " notions récupérées.";
  }
  document.getElementById("btn-code").onclick = function () {
    document.getElementById("code-text").value = makeCode(); document.getElementById("code-out").hidden = false;
  };
  document.getElementById("btn-copy").onclick = function () {
    var t = document.getElementById("code-text"); t.select();
    var done = function () { document.getElementById("code-msg").textContent = "Code copié."; };
    if (navigator.clipboard) navigator.clipboard.writeText(t.value).then(done, function () { document.execCommand("copy"); done(); });
    else { document.execCommand("copy"); done(); }
  };
  document.getElementById("btn-import").onclick = function () {
    var v = document.getElementById("code-in").value.trim(); if (!v) return;
    if (Object.keys(store.boxes).length && !confirm("Remplacer les résultats de cet appareil par ceux du code ?")) return;
    document.getElementById("code-msg").textContent = readCode(v);
  };

  /* ---------- carnet ---------- */
  function renderCarnet() {
    var q = norm(document.getElementById("search").value), lvSel = document.getElementById("sel-niveau"), lv = lvSel ? lvSel.value : "", html = "";
    GROUPS.forEach(function (g) {
      var list = ALL.filter(function (n) { return n.g === g.k && (!lv || n.niveau === lv) && (!q || norm(n.terme + " " + n.definition).indexOf(q) >= 0); });
      if (!list.length) return;
      html += '<div class="theme-block"><h2>' + esc(g.label) + "</h2>";
      list.forEach(function (n) {
        if (isOpen(n)) {
          var b = box(n.id);
          html += '<article class="notion"><h3><span>' + esc(n.terme) + "</span>" + (b >= 0 ? '<span class="lvl b' + b + '">' + levelLabel(b) + "</span>" : "") + "</h3>" + tags(n) + "<p>" + esc(n.definition) + "</p>" +
            (n.exemple ? '<p class="ex"><strong>Exemple :</strong> ' + esc(n.exemple) + "</p>" : "") + "</article>";
        } else {
          html += '<article class="notion locked"><h3><span>' + esc(n.terme) + '</span><span class="lvl">à venir</span></h3><p>Cette notion s\'ouvrira quand nous commencerons ce chapitre.</p><div class="write-line"></div></article>';
        }
      });
      html += "</div>";
    });
    document.getElementById("carnet").innerHTML = html || '<p class="empty">Aucune notion ne correspond à ta recherche.</p>';
  }
  document.getElementById("search").addEventListener("input", renderCarnet);
  if (document.getElementById("sel-niveau")) document.getElementById("sel-niveau").addEventListener("change", renderCarnet);
  document.getElementById("btn-print").onclick = function () { window.print(); };

  /* ---------- progrès ---------- */
  function renderProgres() {
    var html = "";
    GROUPS.forEach(function (g) {
      var list = OPEN.filter(function (n) { return n.g === g.k; }); if (!list.length) return;
      var s = list.filter(function (n) { return box(n.id) >= 3; }).length, pct = Math.round(100 * s / list.length);
      html += '<div class="bar-row"><span>' + esc(g.label) + '</span><div class="bar" role="img" aria-label="' + pct + ' %"><span style="width:' + pct + '%"></span></div><span>' + s + "/" + list.length + "</span></div>";
    });
    var later = ALL.length - OPEN.length;
    document.getElementById("progres").innerHTML = html + (later ? '<p class="legend">' + later + " notions s'ouvriront au fil des chapitres.</p>" : "");
  }
  document.getElementById("btn-reset").onclick = function () {
    if (!confirm("Effacer tous tes résultats sur cet appareil ?")) return;
    store = { boxes: {}, seen: 0, ok: 0, streak: 0, best: 0 }; save(); renderStats(); renderProgres(); renderCarnet(); fillPool();
  };

  /* ---------- onglets ---------- */
  var tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach(function (t) {
    t.onclick = function () {
      tabs.forEach(function (x) { var on = x === t; x.setAttribute("aria-selected", on ? "true" : "false"); document.getElementById(x.getAttribute("aria-controls")).classList.toggle("active", on); });
      if (t.id === "tab-carnet") renderCarnet(); if (t.id === "tab-progres") renderProgres();
    };
  });
  if (location.hash === "#carnet") document.getElementById("tab-carnet").click();

  var d = (DATA.maj || "").split("-");
  document.getElementById("maj").textContent = "Notions mises à jour le " + (d.length === 3 ? d[2] + "/" + d[1] + "/" + d[0] : "—") + ". Ce site ne collecte ni nom, ni compte, ni réponse : tes progrès restent sur ton appareil.";
  showSetup();
})();
