
/* Tourays Fitness V10 — Stage 16 no-flicker router */
(function () {
  "use strict";

  const KEY = "touraysCurrentScreenV15";
  const DEFAULT_ROUTE = "home";

  function routes() {
    return new Set(
      Array.from(document.querySelectorAll(".screen[id]")).map((screen) => screen.id)
    );
  }

  function normalize(route) {
    if (route === "profile") return "profileSettingsScreen";
    return routes().has(route) ? route : DEFAULT_ROUTE;
  }

  function storedRoute() {
    return normalize(
      window.__touraysPrepaintRoute ||
      sessionStorage.getItem(KEY) ||
      localStorage.getItem(KEY) ||
      DEFAULT_ROUTE
    );
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

  function renderRoute(route, reveal) {
    route = save(route);
    const target =
      document.getElementById(route) || document.getElementById(DEFAULT_ROUTE);
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

    if (reveal !== false) {
      requestAnimationFrame(function () {
        document.documentElement.classList.remove("tourays-prepaint");
        document.body.style.visibility = "";
      });
    }
  }

  function routeFromControl(control) {
    if (!control) return "";
    return normalize(control.dataset.screen || control.dataset.go || "");
  }

  // Apply the saved screen immediately as soon as the DOM is available.
  function initialRender() {
    renderRoute(storedRoute(), true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialRender, { once: true });
  } else {
    initialRender();
  }

  // Capture navigation before older handlers.
  document.addEventListener(
    "click",
    function (event) {
      const control = event.target.closest(".tab[data-screen], [data-go]");
      if (!control) return;
      const route = routeFromControl(control);
      if (!routes().has(route)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      renderRoute(route, true);
    },
    true
  );

  // After legacy startup finishes, re-assert the same route without hiding/revealing.
  window.addEventListener(
    "load",
    function () {
      const route = storedRoute();
      renderRoute(route, true);
      setTimeout(function(){ renderRoute(route, true); }, 120);
    },
    { once: true }
  );

  window.addEventListener("pageshow", function () {
    renderRoute(storedRoute(), true);
  });

  window.addEventListener("popstate", function () {
    const hash = normalize(location.hash.replace(/^#/, ""));
    renderRoute(hash, true);
  });

  window.touraysNavigate = function(route) {
    renderRoute(route, true);
  };
})();
