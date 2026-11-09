/* Moteur des entraînements autonomes (reprise en JavaScript simple du composant ExerciseSession).
   Les données de la séance sont dans window.SEANCE (fichier exercises.json de la séance). */
(function () {
  "use strict";
  var data = window.SEANCE;
  var root = document.getElementById("exercices");
  if (!data || !root) return;

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k.indexOf("on") === 0) e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== false && attrs[k] != null) e.setAttribute(k, attrs[k] === true ? "" : attrs[k]);
    });
    (children || []).forEach(function (c) { if (c != null) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }
  function sameSet(a, b) { return a.length === b.length && a.every(function (v) { return b.indexOf(v) >= 0; }); }
  function feedback(ok, okText, retryText, score, total, extra) {
    var box = el("div", { "class": "feedback score", role: "status" });
    var p = el("p", null, [el("strong", { text: ok ? "Correct. " : "À reprendre. " }), (ok ? okText : retryText) + " Résultat : " + score + " / " + total + "."]);
    box.appendChild(p);
    (extra || []).forEach(function (x) { box.appendChild(x); });
    return box;
  }
  function frame(number, ex) {
    var s = el("section", { "class": "exercise", "aria-labelledby": "exercise-" + ex.id });
    s.appendChild(el("div", { "class": "exercise__head" }, [
      el("span", { text: String(number) }),
      el("div", null, [el("p", { "class": "eyebrow", text: "Entraînement autonome" }), el("h2", { id: "exercise-" + ex.id, text: ex.title })])
    ]));
    s.appendChild(el("p", { "class": "intro", text: ex.instruction }));
    return s;
  }

  /* --- choix unique / multiple --- */
  function choiceItem(container, ex, item, index, multiple, title, question) {
    var state = [], checked = false;
    var fs = el("fieldset", { "class": "choice" });
    fs.appendChild(el("legend", { text: (index + 1) + ". " + (title || item.prompt) }));
    if (question) fs.appendChild(el("p", { "class": "exercise-question", text: question }));
    var opts = el("div", { "class": "options" });
    var labels = {};
    var name = ex.id + "-" + (item.id || index);
    item.options.forEach(function (o) {
      var input = el("input", { type: multiple ? "checkbox" : "radio", name: name });
      input.addEventListener("change", function () {
        if (multiple) { state = input.checked ? state.concat([o.id]) : state.filter(function (x) { return x !== o.id; }); }
        else state = [o.id];
        checked = false; render();
      });
      var lab = el("label", null, [input, el("strong", { text: o.id + "." }), " " + o.text]);
      labels[o.id] = { lab: lab, input: input };
      opts.appendChild(lab);
    });
    fs.appendChild(opts);
    var btn = el("button", { type: "button", text: "Vérifier" });
    btn.addEventListener("click", function () { checked = true; render(); });
    fs.appendChild(btn);
    var out = el("div"); fs.appendChild(out);
    function render() {
      btn.disabled = state.length === 0;
      Object.keys(labels).forEach(function (id) {
        var L = labels[id]; L.input.checked = state.indexOf(id) >= 0;
        L.lab.className = checked && state.indexOf(id) >= 0 ? (item.answers.indexOf(id) >= 0 ? "correct" : "incorrect") : "";
      });
      out.innerHTML = "";
      if (!checked) return;
      var ok = sameSet(state, item.answers);
      var extra = ok ? [] : state.filter(function (a) { return item.answers.indexOf(a) < 0; }).map(function (a) {
        var o = item.options.filter(function (x) { return x.id === a; })[0]; return o && o.feedbackWrong ? el("p", { text: o.feedbackWrong }) : null;
      }).filter(Boolean);
      out.appendChild(feedback(ok, item.feedbackCorrect, item.feedbackRetry, ok ? 1 : 0, 1, extra));
      var again = el("button", { type: "button", "class": "secondary-action", text: "Recommencer" });
      again.addEventListener("click", function () { state = []; checked = false; render(); });
      out.appendChild(again);
    }
    render();
    container.appendChild(fs);
  }
  function choiceExercise(ex, number) {
    var s = frame(number, ex), box = el("div", { "class": "choices" });
    (ex.student.items || []).forEach(function (item, i) { choiceItem(box, ex, item, i, ex.type === "choix_multiple"); });
    s.appendChild(box); return s;
  }

  /* --- remettre dans l'ordre --- */
  function orderExercise(ex, number) {
    var s = frame(number, ex);
    var initial = (ex.student.items || []).slice().reverse(), order = initial.slice(), checked = false;
    var expected = (ex.grading && ex.grading.expected) || [];
    var list = el("ol", { "class": "ordered-items" }); s.appendChild(list);
    var btn = el("button", { type: "button", text: "Vérifier" }); s.appendChild(btn);
    var out = el("div"); s.appendChild(out);
    btn.addEventListener("click", function () { checked = true; render(); });
    function move(i, d) { var t = i + d; if (t < 0 || t >= order.length) return; var x = order[i]; order[i] = order[t]; order[t] = x; checked = false; render(); }
    function render() {
      list.innerHTML = "";
      order.forEach(function (item, i) {
        var up = el("button", { type: "button", "aria-label": "Monter " + item.id, text: "↑" }); up.disabled = i === 0; up.addEventListener("click", function () { move(i, -1); });
        var down = el("button", { type: "button", "aria-label": "Descendre " + item.id, text: "↓" }); down.disabled = i === order.length - 1; down.addEventListener("click", function () { move(i, 1); });
        list.appendChild(el("li", null, [el("span", null, [el("strong", { text: item.id + "." }), " " + item.text]), el("span", { "class": "move-buttons" }, [up, down])]));
      });
      out.innerHTML = "";
      if (!checked) return;
      var correct = order.filter(function (it, i) { return it.id === expected[i]; }).length, ok = correct === order.length;
      var extra = ok ? [] : order.filter(function (it, i) { return it.id !== expected[i] && it.feedbackWrong; }).map(function (it) { return el("p", null, [el("strong", { text: it.id + "." }), " " + it.feedbackWrong]); });
      out.appendChild(feedback(ok, ex.feedbackCorrect, ex.feedbackRetry, correct, order.length, extra));
      var again = el("button", { type: "button", "class": "secondary-action", text: "Recommencer" });
      again.addEventListener("click", function () { order = initial.slice(); checked = false; render(); });
      out.appendChild(again);
    }
    render(); return s;
  }

  /* --- associations --- */
  function associationExercise(ex, number) {
    var s = frame(number, ex);
    var left = ex.student.items || [], right = ex.student.planCards || [], expected = (ex.grading && ex.grading.expected) || [];
    var answers = {}, checked = false, selects = {};
    var list = el("div", { "class": "association-list" }); s.appendChild(list);
    left.forEach(function (item) {
      var pid = ex.id + "-" + item.id + "-prompt", sid = ex.id + "-" + item.id;
      var sel = el("select", { id: sid, "aria-labelledby": pid }, [el("option", { value: "", text: "Choisir…" })].concat(right.map(function (o) { return el("option", { value: o.id, text: o.id + ". " + o.text }); })));
      sel.addEventListener("change", function () { answers[item.id] = sel.value; checked = false; render(); });
      selects[item.id] = sel;
      list.appendChild(el("div", { "class": "association-item" }, [
        el("p", { "class": "association-prompt", id: pid }, [el("strong", { text: item.id + "." }), " " + item.prompt]),
        el("label", { "class": "association-answer", "for": sid }, [el("span", { text: "Ma réponse" }), sel])
      ]));
    });
    var btn = el("button", { type: "button", text: "Vérifier" }); s.appendChild(btn);
    var out = el("div"); s.appendChild(out);
    btn.addEventListener("click", function () { checked = true; render(); });
    function render() {
      btn.disabled = !left.every(function (it) { return answers[it.id]; });
      out.innerHTML = "";
      if (!checked) return;
      var correct = left.filter(function (it) {
        var pair = expected.filter(function (p) { return p.indexOf(it.id + "→") === 0; })[0];
        return pair && answers[it.id] === pair.split("→")[1];
      }).length, ok = correct === left.length;
      var p = el("p", { "class": "feedback score", role: "status" }, [el("strong", { text: ok ? "Correct. " : "À reprendre. " }), (ok ? ex.feedbackCorrect : ex.feedbackRetry) + " Résultat : " + correct + " / " + left.length + "."]);
      out.appendChild(p);
      var again = el("button", { type: "button", "class": "secondary-action", text: "Recommencer" });
      again.addEventListener("click", function () { answers = {}; Object.keys(selects).forEach(function (k) { selects[k].value = ""; }); checked = false; render(); });
      out.appendChild(again);
    }
    render(); return s;
  }

  /* --- réponse bac : repères puis plan --- */
  function bacPlanExercise(ex, number) {
    var s = frame(number, ex);
    var guides = ex.student.guides || [], cards = ex.student.planCards || [];
    var accepted = (ex.grading && ex.grading.acceptedPlans) || [], planLength = accepted[0] ? accepted[0].length : 0;
    var box = el("div", { "class": "choices" }); s.appendChild(box);
    guides.forEach(function (g, i) { choiceItem(box, ex, g, i, g.answers.length > 1, g.title, g.prompt || ex.question); });
    s.appendChild(el("h3", { text: "Construire le plan" }));
    if (ex.question) s.appendChild(el("p", { "class": "exercise-question", text: ex.question }));
    s.appendChild(el("p", { text: "Clique d'abord sur la carte correspondant à la première partie de ton plan, puis sur celle de la deuxième partie, et ainsi de suite jusqu'à compléter ton plan." }));
    var plan = [], checked = false;
    var bank = el("div", { "class": "plan-bank" }); s.appendChild(bank);
    var slots = el("ol", { "class": "plan-slots" }); s.appendChild(slots);
    var btn = el("button", { type: "button", text: "Vérifier" }); s.appendChild(btn);
    var out = el("div"); s.appendChild(out);
    btn.addEventListener("click", function () { checked = true; render(); });
    var cardBtns = {};
    cards.forEach(function (c) {
      var b = el("button", { type: "button", "class": "plan-card" }, [el("strong", { text: c.id + "." }), " " + c.text]);
      b.addEventListener("click", function () {
        if (plan.indexOf(c.id) >= 0) plan = plan.filter(function (x) { return x !== c.id; });
        else if (plan.length < planLength) plan = plan.concat([c.id]);
        checked = false; render();
      });
      cardBtns[c.id] = b; bank.appendChild(b);
    });
    function render() {
      Object.keys(cardBtns).forEach(function (id) { cardBtns[id].className = "plan-card " + (plan.indexOf(id) >= 0 ? "selected" : ""); });
      slots.innerHTML = "";
      for (var i = 0; i < planLength; i++) {
        var c = plan[i] && cards.filter(function (x) { return x.id === plan[i]; })[0];
        slots.appendChild(el("li", { text: c ? c.text : "Choisis une carte." }));
      }
      btn.disabled = plan.length !== planLength;
      out.innerHTML = "";
      if (!checked) return;
      var ok = accepted.some(function (cand) { return cand.join("|") === plan.join("|"); });
      out.appendChild(el("p", { "class": "feedback score", role: "status" }, [el("strong", { text: ok ? "Correct. " : "À reprendre. " }), (ok ? ex.feedbackCorrect : ex.feedbackRetry) + " Résultat : " + (ok ? 1 : 0) + " / 1."]));
      var again = el("button", { type: "button", "class": "secondary-action", text: "Recommencer" });
      again.addEventListener("click", function () { plan = []; checked = false; render(); });
      out.appendChild(again);
    }
    render(); return s;
  }

  data.exercises.forEach(function (ex, i) {
    var n = i + 1, node;
    if (ex.type === "choix_unique" || ex.type === "choix_multiple") node = choiceExercise(ex, n);
    else if (ex.type === "ordre") node = orderExercise(ex, n);
    else if (ex.type === "association") node = associationExercise(ex, n);
    else node = bacPlanExercise(ex, n);
    root.appendChild(node);
  });
})();
