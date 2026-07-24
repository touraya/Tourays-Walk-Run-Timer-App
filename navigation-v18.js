
/* Tourays Fitness V10 — Stage 18 clean single router */
(function(){
  "use strict";

  const KEY="touraysRouteV18";
  const DEFAULT_ROUTE="home";

  function allRoutes(){
    return new Set(
      Array.from(document.querySelectorAll(".screen[id]")).map(screen=>screen.id)
    );
  }

  function normalize(route){
    if(route==="profile")return "profileSettingsScreen";
    return allRoutes().has(route)?route:DEFAULT_ROUTE;
  }

  function savedRoute(){
    return normalize(
      window.__touraysRouteV18 ||
      sessionStorage.getItem(KEY) ||
      localStorage.getItem(KEY) ||
      DEFAULT_ROUTE
    );
  }

  function reveal(){
    requestAnimationFrame(function(){
      document.documentElement.classList.remove("tourays-v18-loading");
      document.body.style.visibility="";
    });
  }

  function activate(route){
    route=normalize(route);
    show(route);
    reveal();
  }

  document.addEventListener("click",function(event){
    const control=event.target.closest(".tab[data-screen],[data-go]");
    if(!control)return;

    let route=control.dataset.screen||control.dataset.go||"";
    route=normalize(route);
    if(!allRoutes().has(route))return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    activate(route);
  },true);

  function initialize(){
    activate(savedRoute());
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",initialize,{once:true});
  }else{
    initialize();
  }

  window.addEventListener("popstate",function(){
    activate(normalize(location.hash.replace(/^#/,"")));
  });

  window.touraysNavigate=activate;
})();
