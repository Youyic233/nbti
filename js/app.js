/**
 * NBTI · 奶龙人格测试 —— 主逻辑
 * 视图流转：home → quiz → result
 * 计分：每个选项的分值累加到对应人格类型，得分最高的类型为测试结果；
 *       结果页按派系汇总总分画条形图。
 */
(function () {
  "use strict";

  var QUESTIONS = window.NBTI_QUESTIONS;
  var FACTIONS = window.NBTI_FACTIONS;
  var TYPES = window.NBTI_TYPES;

  /* ---------- 状态 ---------- */
  var state = {
    current: 0,                          // 当前题索引
    answers: new Array(QUESTIONS.length).fill(null),  // 每题选中的选项索引
    result: null                         // 测出的类型对象
  };

  /* ---------- DOM ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var views = {
    home: $("view-home"),
    quiz: $("view-quiz"),
    result: $("view-result")
  };

  /* ---------- 视图切换 ---------- */
  function showView(name) {
    Object.keys(views).forEach(function (key) {
      views[key].classList.toggle("is-active", key === name);
    });
    window.scrollTo(0, 0);
  }

  /* ---------- 首页 ---------- */
  $("home-dragon").innerHTML = window.NBTI_DRAGON_SVG;
  $("btn-start").addEventListener("click", function () {
    state.current = 0;
    state.answers = new Array(QUESTIONS.length).fill(null);
    renderQuestion();
    showView("quiz");
  });

  /* ---------- 答题页 ---------- */
  var OPTION_TAGS = ["A", "B", "C", "D"];

  function renderQuestion() {
    var q = QUESTIONS[state.current];

    // 进度
    $("quiz-counter").textContent = (state.current + 1) + " / " + QUESTIONS.length;
    $("progress-bar").style.width =
      ((state.current + 1) / QUESTIONS.length * 100) + "%";

    // 题干
    $("quiz-question").textContent = q.text;

    // 选项
    var box = $("quiz-options");
    box.innerHTML = "";
    q.options.forEach(function (opt, idx) {
      var btn = document.createElement("button");
      btn.className = "option" + (state.answers[state.current] === idx ? " is-selected" : "");
      btn.type = "button";

      var tag = document.createElement("span");
      tag.className = "option-tag";
      tag.textContent = OPTION_TAGS[idx];

      var label = document.createElement("span");
      label.textContent = opt.label;

      btn.appendChild(tag);
      btn.appendChild(label);
      btn.addEventListener("click", function () {
        state.answers[state.current] = idx;
        box.querySelectorAll(".option").forEach(function (el) {
          el.classList.remove("is-selected");
        });
        btn.classList.add("is-selected");
        updateNav();
      });
      box.appendChild(btn);
    });

    updateNav();
  }

  function updateNav() {
    var isFirst = state.current === 0;
    var isLast = state.current === QUESTIONS.length - 1;
    var answered = state.answers[state.current] !== null;

    $("btn-prev").disabled = isFirst;
    $("btn-next").textContent = isLast ? "查看结果" : "下一题";
    $("btn-next").disabled = !answered;
  }

  $("btn-prev").addEventListener("click", function () {
    if (state.current > 0) {
      state.current--;
      renderQuestion();
    }
  });

  $("btn-next").addEventListener("click", function () {
    if (state.answers[state.current] === null) return;
    if (state.current < QUESTIONS.length - 1) {
      state.current++;
      renderQuestion();
    } else {
      renderResult();
      showView("result");
    }
  });

  /* ---------- 计分 ---------- */
  // 返回 { typeScores: {code: n}, factionScores: {key: n} }
  function computeScores() {
    var typeScores = {};
    Object.keys(TYPES).forEach(function (code) { typeScores[code] = 0; });

    state.answers.forEach(function (optIdx, qIdx) {
      if (optIdx === null) return;
      var optScores = QUESTIONS[qIdx].options[optIdx].scores;
      Object.keys(optScores).forEach(function (code) {
        if (code in typeScores) typeScores[code] += optScores[code];
      });
    });

    var factionScores = {};
    FACTIONS.forEach(function (f) { factionScores[f.key] = 0; });
    Object.keys(typeScores).forEach(function (code) {
      var faction = TYPES[code].faction;
      if (faction in factionScores) factionScores[faction] += typeScores[code];
    });

    return { typeScores: typeScores, factionScores: factionScores };
  }

  // 取得分最高的类型；平分按 types.js 中的声明顺序取前者
  function resolveWinner(typeScores) {
    var best = null;
    Object.keys(TYPES).forEach(function (code) {
      if (best === null || typeScores[code] > typeScores[best]) best = code;
    });
    return best;
  }

  /* ---------- 结果页 ---------- */
  function factionName(key) {
    for (var i = 0; i < FACTIONS.length; i++) {
      if (FACTIONS[i].key === key) return FACTIONS[i].name;
    }
    return key;
  }

  function renderResult() {
    var scores = computeScores();
    var winCode = resolveWinner(scores.typeScores);
    var type = TYPES[winCode];
    state.result = type;

    $("result-name").textContent = type.name;
    $("result-code").textContent = type.code;
    $("result-faction").textContent = factionName(type.faction);
    $("result-desc").textContent = type.description;

    // 配图：优先素材图，否则占位 SVG
    var hero = $("result-dragon");
    if (type.image) {
      hero.innerHTML = "";
      var img = document.createElement("img");
      img.src = type.image;
      img.alt = type.name;
      hero.appendChild(img);
    } else {
      hero.innerHTML = window.NBTI_DRAGON_SVG;
    }

    // 派系得分条形图（按得分降序，宽度相对最高分归一化）
    var rows = FACTIONS.map(function (f) {
      return { name: f.name, score: scores.factionScores[f.key], isWin: f.key === type.faction };
    }).sort(function (a, b) { return b.score - a.score; });

    var max = rows.length ? Math.max(rows[0].score, 1) : 1;

    var bars = $("result-bars");
    bars.innerHTML = "";
    rows.forEach(function (row) {
      var el = document.createElement("div");
      el.className = "dim-row";

      var head = document.createElement("div");
      head.className = "dim-head";
      head.innerHTML =
        '<span class="dim-name' + (row.isWin ? " is-win" : "") + '">' + row.name + "</span>" +
        '<span class="dim-pct">' + row.score + " 分</span>";

      var track = document.createElement("div");
      track.className = "dim-track";
      var fill = document.createElement("div");
      fill.className = "dim-fill" + (row.isWin ? "" : " is-dim");
      track.appendChild(fill);

      el.appendChild(head);
      el.appendChild(track);
      bars.appendChild(el);

      // 入场动画
      var pct = Math.round(row.score / max * 100);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          fill.style.width = pct + "%";
        });
      });
    });

    $("share-tip").hidden = true;
  }

  /* ---------- 分享 / 复制 ---------- */
  function buildShareText() {
    var t = state.result;
    return "我的 NBTI 人格类型是【" + t.name + "】（" + t.code + " · " +
      factionName(t.faction) + "）\n快来测测你是哪种奶龙：" + location.href;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // file:// 或非安全上下文的降级方案
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (e) {
        reject(e);
      }
      document.body.removeChild(ta);
    });
  }

  $("btn-share").addEventListener("click", function () {
    var text = buildShareText();
    var tip = $("share-tip");

    if (navigator.share) {
      navigator.share({ title: "NBTI · 奶龙人格测试", text: text }).catch(function () {
        // 用户取消分享则静默
      });
      return;
    }
    copyText(text).then(function () {
      tip.hidden = false;
      setTimeout(function () { tip.hidden = true; }, 2500);
    }).catch(function () {
      tip.textContent = "复制失败，请手动截图分享";
      tip.hidden = false;
    });
  });

  /* ---------- 重新测试 ---------- */
  $("btn-restart").addEventListener("click", function () {
    state.current = 0;
    state.answers = new Array(QUESTIONS.length).fill(null);
    state.result = null;
    showView("home");
  });

})();
