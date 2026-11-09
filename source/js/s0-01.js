/* Entraînement C0-S01 (reprise en JavaScript simple des composants React d'origine).
   Données : window.S001 = { links, diagnostic, definitions, groups, planCards }. */
(function () {
  "use strict";
  var D = window.S001, root = document.getElementById("exercices");
  if (!D || !root) return;
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === "text") e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); });
    (children || []).forEach(function (c) { if (c != null) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }
  function head(number, eyebrow, title, id) {
    return el("div", { "class": "exercise__head" }, [el("span", { text: number }), el("div", null, [el("p", { "class": "eyebrow", text: eyebrow }), el("h2", { id: id, text: title })])]);
  }

  /* Exercices 01 à 03 : une question par ligne, vérification globale */
  function exercise(number, title, intro, choices) {
    var answers = choices.map(function () { return ""; }), checked = false;
    var s = el("section", { "class": "exercise", "aria-labelledby": "exercise-" + number });
    s.appendChild(head(number, "Entraînement autonome", title, "exercise-" + number));
    s.appendChild(el("p", { "class": "intro", text: intro }));
    var box = el("div", { "class": "choices" }); s.appendChild(box);
    var rows = choices.map(function (c, i) {
      var fs = el("fieldset", { "class": "choice" }, [el("legend", { text: (i + 1) + ". " + c.label })]);
      var opts = el("div", { "class": "options" }), labs = [];
      c.options.forEach(function (o) {
        var input = el("input", { type: "radio", name: number + "-" + i, value: o });
        input.addEventListener("change", function () { answers[i] = o; checked = false; render(); });
        var lab = el("label", null, [input, o]); labs.push({ o: o, lab: lab, input: input }); opts.appendChild(lab);
      });
      fs.appendChild(opts); var fb = el("div"); fs.appendChild(fb); box.appendChild(fs);
      return { c: c, labs: labs, fb: fb };
    });
    var btn = el("button", { type: "button", text: "Vérifier mes réponses" }); s.appendChild(btn);
    var out = el("div"); s.appendChild(out);
    btn.addEventListener("click", function () { checked = true; render(); });
    function render() {
      rows.forEach(function (r, i) {
        r.labs.forEach(function (L) {
          L.input.checked = answers[i] === L.o;
          L.lab.className = checked ? (answers[i] === L.o && L.o === r.c.answer ? "correct" : answers[i] === L.o ? "incorrect" : "") : "";
        });
        r.fb.innerHTML = "";
        if (checked) r.fb.appendChild(el("p", { "class": "feedback", text: (answers[i] === r.c.answer ? "Bien vu. " : "À reprendre. ") + r.c.explanation }));
      });
      btn.disabled = !answers.every(Boolean);
      out.innerHTML = "";
      if (checked) {
        var score = answers.filter(function (a, i) { return a === choices[i].answer; }).length;
        out.appendChild(el("p", { "class": "score", role: "status", text: "Résultat : " + score + " / " + choices.length + ". " + (score === choices.length ? "Objectif atteint !" : "Relis les explications puis réessaie.") }));
      }
    }
    render(); return s;
  }

  /* Exercice 04 : construire une réponse bac en trois étapes */
  function bac() {
    var groups = D.groups, cards = D.planCards;
    var answers = {}, checked = false, step = 1, plan = [], planChecked = false;
    var s = el("section", { "class": "exercise bac-exercise", "aria-labelledby": "exercise-bac" });
    s.appendChild(head("04", "Entraînement bac", "Construire une réponse bac", "exercise-bac"));
    s.appendChild(el("p", { "class": "intro", text: "« Montrez que le diagnostic permet de construire une action de prévention adaptée aux besoins des jeunes. »" }));
    var prog = el("div", { "class": "bac-progress", "aria-label": "Progression" }); s.appendChild(prog);
    var body = el("div"); s.appendChild(body);
    function button(text, cls, fn, disabled) { var b = el("button", { type: "button", text: text }); if (cls) b.className = cls; b.disabled = !!disabled; b.addEventListener("click", fn); return b; }
    function render() {
      prog.innerHTML = "";
      ["1. Décoder", "2. Construire le plan", "3. Vérifier"].forEach(function (t, i) { prog.appendChild(el("span", { "class": step === i + 1 ? "active" : "", text: t })); });
      body.innerHTML = "";
      if (step === 1) {
        body.appendChild(el("p", { text: "Pour chaque repère, choisis la proposition la plus utile pour répondre à la question." }));
        var box = el("div", { "class": "choices" });
        groups.forEach(function (g) {
          var fs = el("fieldset", { "class": "choice" }, [el("legend", { text: g.title })]), opts = el("div", { "class": "options" });
          g.options.forEach(function (o) {
            var input = el("input", { type: "radio", name: g.id }); input.checked = answers[g.id] === o;
            input.addEventListener("change", function () { answers[g.id] = o; checked = false; render(); });
            var lab = el("label", null, [input, o]);
            if (checked) lab.className = answers[g.id] === o && o === g.answer ? "correct" : answers[g.id] === o ? "incorrect" : "";
            opts.appendChild(lab);
          });
          fs.appendChild(opts);
          if (checked) fs.appendChild(el("p", { "class": "feedback", text: (answers[g.id] === g.answer ? "Bien vu. " : "À reprendre. ") + g.explanation }));
          box.appendChild(fs);
        });
        body.appendChild(box);
        var complete = groups.every(function (g) { return answers[g.id]; });
        body.appendChild(button("Vérifier mes repères", "", function () { checked = true; render(); }, !complete));
        if (checked) {
          var n = groups.filter(function (g) { return answers[g.id] === g.answer; }).length;
          body.appendChild(el("p", { "class": "score", role: "status", text: "Résultat : " + n + " / " + groups.length + ". " + (n === groups.length ? "Tu peux construire ton plan." : "Relis les explications puis réessaie.") }));
          if (n === groups.length) body.appendChild(button("Construire mon plan", "secondary-action", function () { step = 2; render(); }));
        }
      } else if (step === 2) {
        body.appendChild(el("p", { text: "Choisis trois idées, dans l’ordre où tu voudrais les utiliser. Une proposition paraît défendable, mais ne répond pas directement à la question." }));
        var bank = el("div", { "class": "plan-bank" });
        cards.forEach(function (c) {
          bank.appendChild(button(c.text, "plan-card " + (plan.indexOf(c.id) >= 0 ? "selected" : ""), function () {
            planChecked = false;
            if (plan.indexOf(c.id) >= 0) plan = plan.filter(function (x) { return x !== c.id; }); else if (plan.length < 3) plan = plan.concat([c.id]);
            render();
          }));
        });
        body.appendChild(bank);
        var slots = el("ol", { "class": "plan-slots" });
        [0, 1, 2].forEach(function (i) { var c = plan[i] && cards.filter(function (x) { return x.id === plan[i]; })[0]; slots.appendChild(el("li", { text: c ? c.text : "Choisis une idée." })); });
        body.appendChild(slots);
        body.appendChild(button("Retour aux repères", "secondary-action", function () { step = 1; render(); }));
        body.appendChild(button("Vérifier mon plan", "", function () { planChecked = true; render(); }, plan.length !== 3));
        if (planChecked) {
          var ok = plan.join("") === "ABC";
          body.appendChild(el("p", { "class": "score", role: "status", text: ok ? "Plan cohérent : constats → besoins → action adaptée." : "À reprendre : commence par les constats, passe aux besoins, puis montre comment l’action y répond." }));
          if (ok) body.appendChild(button("Voir ma fiche de réponse", "secondary-action", function () { step = 3; render(); }));
        }
      } else {
        body.appendChild(el("p", { text: "Tu as maintenant les éléments pour rédiger une réponse organisée." }));
        body.appendChild(el("div", { "class": "bac-summary" }, [
          el("p", null, [el("strong", { text: "Ce que « montrez » demande" }), " Justifier un raisonnement avec des notions de cours et des informations précises du corpus."]),
          el("p", null, [el("strong", { text: "Fil directeur" }), " Constats sur les jeunes → besoins identifiés → action de prévention adaptée."]),
          el("p", null, [el("strong", { text: "Plan-modèle" }), " 1. Caractériser la situation. 2. Identifier les besoins. 3. Montrer comment ces besoins guident l’action."])
        ]));
        body.appendChild(button("Recommencer", "secondary-action", function () { answers = {}; checked = false; plan = []; planChecked = false; step = 1; render(); }));
      }
    }
    render(); return s;
  }

  root.appendChild(exercise("01", "Du constat à l’action adaptée", "Associe chaque constat ou besoin à l’action qui répond le mieux à la situation.", D.links));
  root.appendChild(exercise("02", "Diagnostic ou Action ?", "Pour chaque proposition, choisis la phase dominante.", D.diagnostic));
  root.appendChild(exercise("03", "Deux notions pour commencer", "Choisis la définition qui convient à chaque notion.", D.definitions));
  root.appendChild(bac());
})();
