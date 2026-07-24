
/* Tourays Fitness V10 — Stage 15 stable router */
(function () {
  "use strict";

  const KEY = "touraysCurrentScreenV15";
  const DEFAULT_ROUTE = "home";

  function routes() {
    return new Set(
      Array.from(document.querySelectorAll(".screen[id]")).map((screen) => screen.id)
    );
  }

  function valid(route) {
    return routes().has(route);
  }

  function normalize(route) {
    if (route === "profile") return "profileSettingsScreen";
    return valid(route) ? route : DEFAULT_ROUTE;
  }

  function storedRoute() {
    const saved = sessionStorage.getItem(KEY) || localStorage.getItem(KEY) || "";
    return normalize(saved);
  }

  function save(route) {
    route = normalize(route);
    sessionStorage.setItem(KEY, route);
    localStorage.setItem(KEY, route);
    try {
      history.replaceState({ screen: route }, "", "#" + route);
    } catch (_) {}
    return route;
  }

  function renderRoute(route) {
    route = save(route);
    const target = document.getElementById(route) || document.getElementById(DEFAULT_ROUTE);
    if (!target) return;

    document.querySelectorAll(".screen[id]").forEach((screen) => {
      const active = screen === target;
      screen.hidden = !active;
      screen.classList.toggle("active", active);
      screen.setAttribute("aria-hidden", active ? "false" : "true");
      screen.style.display = active ? "block" : "none";
      if (active) screen.scrollTop = 0;
    });

    document.querySelectorAll(".tab[data-screen]").forEach((tab) => {
      const tabRoute = normalize(tab.dataset.screen);
      const active = tabRoute === route;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-current", active ? "page" : "false");
    });

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    try {
      if (route === "home" && typeof renderHome === "function") renderHome();
      if (route === "health" && typeof renderHealth === "function") renderHealth();
      if (route === "performance" && typeof renderPerformance === "function") renderPerformance();
    } catch (_) {}
  }

  function routeFromControl(control) {
    if (!control) return "";
    return normalize(control.dataset.screen || control.dataset.go || "");
  }

  // Stop older click handlers from opening Profile or another legacy screen.
  document.addEventListener(
    "click",
    function (event) {
      const control = event.target.closest(".tab[data-screen], [data-go]");
      if (!control) return;
      const route = routeFromControl(control);
      if (!valid(route)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      renderRoute(route);
    },
    true
  );

  function firstStart() {
    // A new V15 installation always starts on Home.
    // After the first genuine menu tap, refresh restores that exact menu.
    const hasV15State =
      sessionStorage.getItem(KEY) !== null || localStorage.getItem(KEY) !== null;

    if (!hasV15State) {
      save(DEFAULT_ROUTE);
      return DEFAULT_ROUTE;
    }
    return storedRoute();
  }

  function restore() {
    renderRoute(firstStart());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restore, { once: true });
  } else {
    restore();
  }

  window.addEventListener(
    "load",
    function () {
      // Re-apply after all legacy modules finish their own initialization.
      restore();
      setTimeout(restore, 80);
      setTimeout(restore, 350);
    },
    { once: true }
  );

  window.addEventListener("pageshow", restore);

  window.addEventListener("popstate", function () {
    const hash = normalize(location.hash.replace(/^#/, ""));
    renderRoute(hash);
  });

  window.touraysNavigate = renderRoute;
})();
