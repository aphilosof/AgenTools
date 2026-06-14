/* map.js — knowledge map: worlds and lessons as a navigable map, completion
   states, stars from the arena, review mode for completed lessons (re-read
   and re-run without touching progress), concept-tag search.

   CL.map.render(container, data) where data = {
     lessons: [schema lessons], currentIdx, isSolved(id), open(idx)
   }. Stars (from the arena) land here in a later slice. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  CL.map = {
    render: function (container, data) {
      var lessons = data.lessons || [];
      var panel = el("div", "panel");
      panel.appendChild(el("div", "panel-header", "knowledge map"));
      var body = el("div", "map-body");

      var search = document.createElement("input");
      search.className = "map-search";
      search.setAttribute("placeholder", "search by concept (e.g. play, print)…");
      body.appendChild(search);

      var list = el("div", "map-list");
      body.appendChild(list);

      function matches(lesson, q) {
        if (!q) return true;
        if (lesson.title.toLowerCase().indexOf(q) >= 0) return true;
        return (lesson.concepts || []).some(function (c) { return c.toLowerCase().indexOf(q) >= 0; });
      }

      function draw(q) {
        list.innerHTML = "";
        var worlds = {};
        lessons.forEach(function (l, i) {
          (worlds[l.world] = worlds[l.world] || []).push({ lesson: l, idx: i });
        });
        var any = false;
        Object.keys(worlds)
          .sort(function (a, b) { return a - b; })
          .forEach(function (w) {
            var items = worlds[w].filter(function (o) { return matches(o.lesson, q); });
            if (!items.length) return;
            any = true;
            list.appendChild(el("div", "map-world", "World " + w));
            items.forEach(function (o) {
              var solved = data.isSolved(o.lesson.id);
              var row = el("div", "map-lesson" + (o.idx === data.currentIdx ? " current" : ""));
              row.appendChild(el("span", "map-mark", solved ? "✓" : "○"));
              row.appendChild(el("span", "map-title", o.lesson.title));
              if (o.lesson.concepts && o.lesson.concepts.length) {
                row.appendChild(el("span", "map-tags", o.lesson.concepts.join(" · ")));
              }
              row.addEventListener("click", function () { data.open(o.idx); });
              list.appendChild(row);
            });
          });
        if (!any) list.appendChild(el("div", "map-empty", 'No lessons match “' + q + '”.'));
      }

      search.addEventListener("input", function () { draw(search.value.trim().toLowerCase()); });
      draw("");
      panel.appendChild(body);
      container.appendChild(panel);
    },
  };
})();
