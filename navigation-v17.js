
/* Tourays Fitness V10 — Stage 17 single-pass route controller */
(function(){
  "use strict";

  const KEY="touraysCurrentScreenV17";
  const DEFAULT_ROUTE="home";

  function validRoutes(){
    return new Set(
      Array.from(document.querySelectorAll(".screen[id]")).map(screen=>screen.id)
    );
  }

  function normalize(route){
    if(route==="profile") return "profileSettingsScreen";
    return validRoutes().has(route) ? route : DEFAULT_ROUTE;
  }

  function savedRoute(){
    return normalize(
      window.__touraysV17Route ||
      sessionStorage.getItem(KEY) ||
      localStorage.getItem(KEY) ||
      DEFAULT_ROUTE
    );
  }

  function reveal(){
    requestAnimationFrame(()=>{
      document.documentElement.classList.remove("tourays-v17-loading");
      document.body.style.visibility="";
    });
  }

  function activate(route){
    route=normalize(route);
    show(route);
    reveal();
  }

  function routeFrom(control){
    if(!control) return "";
    return normalize(control.dataset.screen || control.dataset.go || "");
  }

  document.addEventListener("click",event=>{
    const control=event.target.closest(".tab[data-screen],[data-go]");
    if(!control) return;

    const route=routeFrom(control);
    if(!validRoutes().has(route)) return;

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

  window.addEventListener("popstate",()=>{
    activate(normalize(location.hash.replace(/^#/,"")));
  });

  window.touraysNavigate=activate;
})();
