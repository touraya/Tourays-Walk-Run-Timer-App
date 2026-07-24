
/* Tourays Fitness V9 — Standalone Navigation Recovery 9200 */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var ROUTES = {
      home: ["home"],
      workouts: ["indoor"],
      walkrun: ["walkRunScreen", "run"],
      planner: ["plannerScreen", "planner"],
      progress: ["progressScreen", "performance"],
      coach: ["coachScreen", "coach"],
      nutrition: ["nutritionScreen"],
      profile: ["profileSettingsScreen", "profile"]
    };

    var TITLES = {
      home: ["TOURAYS FITNESS", "Home"],
      workouts: ["TRAINING", "Indoor Workouts"],
      walkrun: ["OUTDOOR ACTIVITY", "Walk & Run"],
      planner: ["YOUR WEEK", "Workout Planner"],
      progress: ["PERFORMANCE", "Progress & Analytics"],
      coach: ["PERSONAL COACH", "AI Coach"],
      nutrition: ["DAILY TARGETS", "Nutrition"],
      profile: ["YOUR ACCOUNT", "Profile & Settings"]
    };

    var menu = document.getElementById("touraysAppMenu");
    var backdrop = document.getElementById("touraysNavBackdrop");
    var openButton = document.getElementById("touraysMenuOpen");
    var closeButton = document.getElementById("touraysMenuClose");
    var homeButton = document.getElementById("touraysHeaderHome");
    var headerTitle = document.getElementById("touraysHeaderTitle");
    var headerEyebrow = document.getElementById("touraysHeaderEyebrow");

    function firstExisting(ids) {
      for (var i = 0; i < ids.length; i += 1) {
        var element = document.getElementById(ids[i]);
        if (element) return element;
      }
      return null;
    }

    function closeMenu() {
      if (menu) {
        menu.classList.remove("open");
        menu.setAttribute("aria-hidden", "true");
        menu.style.transform = "";
      }
      if (backdrop) {
        backdrop.hidden = true;
        backdrop.setAttribute("aria-hidden", "true");
      }
      document.body.classList.remove("tourays-menu-open");
    }

    function openMenu() {
      if (menu) {
        menu.classList.add("open");
        menu.setAttribute("aria-hidden", "false");
        menu.style.transform = "translateX(0)";
      }
      if (backdrop) {
        backdrop.hidden = false;
        backdrop.setAttribute("aria-hidden", "false");
      }
      document.body.classList.add("tourays-menu-open");
    }

    function navigate(route, updateHistory) {
      if (!ROUTES[route]) route = "home";

      var target = firstExisting(ROUTES[route]);
      if (!target) {
        target = document.getElementById("home");
        route = "home";
      }
      if (!target) return false;

      var screens = document.querySelectorAll(".screen");
      for (var i = 0; i < screens.length; i += 1) {
        var screen = screens[i];
        var active = screen === target;
        screen.hidden = !active;
        screen.classList.toggle("active", active);
        screen.setAttribute("aria-hidden", active ? "false" : "true");
        if (active) {
          screen.style.display = "block";
        } else {
          screen.style.display = "none";
        }
      }

      var controls = document.querySelectorAll("[data-tourays-route]");
      for (var j = 0; j < controls.length; j += 1) {
        var control = controls[j];
        var isActive = control.getAttribute("data-tourays-route") === route;
        control.classList.toggle("active", isActive);
        control.setAttribute("aria-current", isActive ? "page" : "false");
      }

      var title = TITLES[route] || TITLES.home;
      if (headerEyebrow) headerEyebrow.textContent = title[0];
      if (headerTitle) headerTitle.textContent = title[1];

      closeMenu();

      if (updateHistory !== false) {
        var hash = "#" + route;
        if (window.location.hash !== hash) {
          try {
            window.history.pushState({ route: route }, "", hash);
          } catch (error) {
            window.location.hash = route;
          }
        }
      }

      window.scrollTo(0, 0);

      try {
        window.dispatchEvent(new CustomEvent("touraysRouteChanged", {
          detail: { route: route, targetId: target.id }
        }));
      } catch (error) {}

      return true;
    }

    function routeFromElement(element) {
      while (element && element !== document.body) {
        if (element.getAttribute) {
          var route = element.getAttribute("data-tourays-route");
          if (route) return route;
        }
        element = element.parentElement;
      }
      return null;
    }

    function delegatedNavigation(event) {
      var route = routeFromElement(event.target);
      if (!route) return;

      event.preventDefault();
      event.stopPropagation();
      navigate(route, true);
    }

    function bindReliableTap(element, handler) {
      if (!element) return;

      element.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        handler(event);
        return false;
      };

      element.ontouchend = function (event) {
        event.preventDefault();
        event.stopPropagation();
        handler(event);
        return false;
      };

      element.onpointerup = function (event) {
        event.preventDefault();
        event.stopPropagation();
        handler(event);
        return false;
      };
    }

    bindReliableTap(openButton, openMenu);
    bindReliableTap(closeButton, closeMenu);
    bindReliableTap(homeButton, function () {
      navigate("home", true);
    });
    bindReliableTap(backdrop, closeMenu);

    var routeButtons = document.querySelectorAll("[data-tourays-route]");
    for (var k = 0; k < routeButtons.length; k += 1) {
      (function (button) {
        bindReliableTap(button, function () {
          navigate(button.getAttribute("data-tourays-route"), true);
        });
      })(routeButtons[k]);
    }

    // Backup delegation at document level.
    document.addEventListener("click", delegatedNavigation, false);
    document.addEventListener("touchend", delegatedNavigation, false);

    // Connect older app buttons that use data-screen.
    document.addEventListener("click", function (event) {
      var element = event.target;
      while (element && element !== document.body) {
        if (element.getAttribute) {
          var screenName = element.getAttribute("data-screen");
          if (screenName) {
            var legacyMap = {
              home: "home",
              indoor: "workouts",
              run: "walkrun",
              walkRunScreen: "walkrun",
              planner: "planner",
              plannerScreen: "planner",
              performance: "progress",
              progressScreen: "progress",
              coach: "coach",
              coachScreen: "coach",
              nutritionScreen: "nutrition",
              profile: "profile",
              profileSettingsScreen: "profile"
            };
            if (legacyMap[screenName]) {
              event.preventDefault();
              navigate(legacyMap[screenName], true);
              return;
            }
          }
        }
        element = element.parentElement;
      }
    }, false);

    window.addEventListener("popstate", function () {
      var route = window.location.hash.replace("#", "");
      navigate(ROUTES[route] ? route : "home", false);
    });

    window.touraysNavigate = function (route) {
      return navigate(route, true);
    };
    window.touraysOpenMenu = openMenu;
    window.touraysCloseMenu = closeMenu;

    var initialRoute = window.location.hash.replace("#", "");
    navigate(ROUTES[initialRoute] ? initialRoute : "home", false);

    document.documentElement.classList.add("tourays-navigation-ready");
  });
})();
