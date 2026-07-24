
(()=>{
  const TOTAL = 16;
  let playing = true;
  let speed = 1;
  let start = performance.now();
  let elapsed = 0;
  let raf = 0;

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const isPush = () => (($('#exerciseName')?.textContent || '').toLowerCase().includes('push'));

  function svgMarkup(){
    return `
    <svg id="pushupVector" class="pushup-vector" viewBox="0 0 1000 520" role="img" aria-label="Articulated push-up demonstration">
      <defs>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f2b184"/>
          <stop offset=".55" stop-color="#c9774f"/>
          <stop offset="1" stop-color="#8d4b32"/>
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#242735"/>
          <stop offset=".6" stop-color="#11131b"/>
          <stop offset="1" stop-color="#07080d"/>
        </linearGradient>
        <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#9b82ff"/>
          <stop offset="1" stop-color="#6547ef"/>
        </linearGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
          <feOffset dy="16"/>
          <feColorMatrix values="0 0 0 0 0.03 0 0 0 0 0.02 0 0 0 0 0.09 0 0 0 .45 0"/>
          <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <rect width="1000" height="520" rx="28" fill="#0b0d14"/>
      <ellipse cx="520" cy="432" rx="390" ry="35" fill="#05060a" opacity=".7"/>
      <line x1="90" y1="416" x2="910" y2="416" stroke="#7257f5" stroke-width="3" opacity=".55"/>
      <line id="formLine" x1="292" y1="230" x2="812" y2="292" stroke="#fff" stroke-width="4" stroke-dasharray="12 10" opacity=".75"/>

      <g id="athlete" filter="url(#softShadow)">
        <g id="rearLeg">
          <line id="rearThigh" x1="676" y1="290" x2="790" y2="333" stroke="url(#skinGrad)" stroke-width="46" stroke-linecap="round"/>
          <line id="rearShin" x1="790" y1="333" x2="876" y2="378" stroke="url(#skinGrad)" stroke-width="38" stroke-linecap="round"/>
          <g id="rearShoe"><rect x="850" y="365" width="92" height="38" rx="18" fill="#f3f4f7"/><path d="M856 393h82" stroke="#a9adba" stroke-width="6"/></g>
        </g>

        <g id="frontLeg">
          <line id="frontThigh" x1="650" y1="278" x2="770" y2="315" stroke="url(#skinGrad)" stroke-width="50" stroke-linecap="round"/>
          <line id="frontShin" x1="770" y1="315" x2="868" y2="365" stroke="url(#skinGrad)" stroke-width="40" stroke-linecap="round"/>
          <g id="frontShoe"><rect x="842" y="351" width="98" height="42" rx="20" fill="#fff"/><path d="M850 383h84" stroke="#a9adba" stroke-width="6"/><path d="M858 356l18 10m8-8 18 10" stroke="#7257f5" stroke-width="5"/></g>
        </g>

        <path id="torso" d="M330 235 C410 218 522 232 658 278 L648 338 C515 316 410 305 324 286 Z" fill="url(#shirtGrad)" stroke="#3a3d4b" stroke-width="3"/>
        <path id="waistBand" d="M620 273 L660 282 L651 337 L612 329 Z" fill="url(#purpleGrad)"/>
        <path id="shirtAccent" d="M355 245 C450 236 530 252 607 278" fill="none" stroke="#7257f5" stroke-width="6" opacity=".75"/>

        <g id="neck"><line x1="316" y1="244" x2="291" y2="228" stroke="url(#skinGrad)" stroke-width="34" stroke-linecap="round"/></g>
        <g id="head">
          <ellipse id="face" cx="263" cy="210" rx="46" ry="52" fill="url(#skinGrad)" transform="rotate(13 263 210)"/>
          <path d="M222 197 C225 150 284 146 309 180 C286 168 261 171 238 190 Z" fill="#12131a"/>
          <path d="M234 171 C257 140 301 157 309 184 C288 172 263 172 239 191 Z" fill="#1d1f29"/>
          <circle cx="247" cy="205" r="4" fill="#1f1520"/>
          <path d="M246 229q18 10 31-2" fill="none" stroke="#6d3429" stroke-width="4" stroke-linecap="round"/>
        </g>

        <g id="rearArm">
          <line id="rearUpperArm" x1="355" y1="252" x2="325" y2="330" stroke="url(#skinGrad)" stroke-width="44" stroke-linecap="round"/>
          <line id="rearForearm" x1="325" y1="330" x2="315" y2="405" stroke="url(#skinGrad)" stroke-width="36" stroke-linecap="round"/>
          <ellipse id="rearHand" cx="309" cy="409" rx="40" ry="14" fill="url(#skinGrad)" transform="rotate(-4 309 409)"/>
        </g>

        <g id="frontArm">
          <line id="frontUpperArm" x1="389" y1="255" x2="365" y2="333" stroke="url(#skinGrad)" stroke-width="48" stroke-linecap="round"/>
          <line id="frontForearm" x1="365" y1="333" x2="360" y2="407" stroke="url(#skinGrad)" stroke-width="38" stroke-linecap="round"/>
          <ellipse id="frontHand" cx="355" cy="411" rx="43" ry="15" fill="url(#skinGrad)" transform="rotate(-3 355 411)"/>
          <ellipse id="shoulderGlow" cx="390" cy="256" rx="30" ry="36" fill="#ff7a45" opacity=".28" filter="url(#glow)"/>
        </g>
      </g>

      <g id="motionArrow" opacity=".9">
        <path d="M210 255 C180 305 180 350 205 385" fill="none" stroke="#35d0a0" stroke-width="8" stroke-linecap="round" stroke-dasharray="16 12"/>
        <path d="M189 369 L207 394 L226 370" fill="none" stroke="#35d0a0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>`;
  }

  function markup(){
    return `
    <div class="premium-engine" id="premiumExerciseEngine">
      <div class="engine-stage">
        <div class="engine-vector-player">${svgMarkup()}</div>
        <span class="engine-chip">ARTICULATED VECTOR DEMONSTRATION</span>
        <span class="engine-time" id="engineTime">00:00 / 00:16</span>
      </div>
      <div class="engine-footer">
        <div class="engine-timeline" id="engineTimeline"><i id="engineProgress"></i></div>
        <div class="engine-phases" id="enginePhases">
          <span>Setup</span><span>Lower</span><span>Bottom hold</span><span>Push up</span><span>Lockout</span>
        </div>
        <div class="engine-controls-v1">
          <button class="primary-control" id="enginePlay" aria-label="Pause">Ⅱ</button>
          <button id="engineReplay">↻ Replay</button>
          <button id="engineMuscles">Muscles</button>
          <button id="engineForm" class="active">Form guide</button>
          <div class="speed-group">
            <button data-engine-speed="0.5">0.5×</button>
            <button class="active" data-engine-speed="1">1×</button>
            <button data-engine-speed="1.5">1.5×</button>
          </div>
        </div>
        <div class="engine-form-note">
          <span>✓</span>
          <div><strong>Controlled push-up demonstration</strong><small>The elbows bend, the chest lowers, and the whole body returns to lockout.</small></div>
        </div>
      </div>
    </div>`;
  }

  function mount(){
    const demo = $('#demo');
    if(!demo || !isPush() || $('#premiumExerciseEngine')) return;
    demo.innerHTML = markup();
    demo.classList.add('engine-host');
    bind();
    start = performance.now();
    tick();
  }

  function bind(){
    $('#enginePlay').onclick = () => {
      playing = !playing;
      $('#enginePlay').textContent = playing ? 'Ⅱ' : '▶';
      if(playing) start = performance.now() - (elapsed * 1000 / speed);
    };
    $('#engineReplay').onclick = () => {
      elapsed = 0;
      start = performance.now();
      playing = true;
      $('#enginePlay').textContent = 'Ⅱ';
    };
    $('#engineMuscles').onclick = (e) => {
      e.currentTarget.classList.toggle('active');
      $('#premiumExerciseEngine').classList.toggle('muscles-on');
    };
    $('#engineForm').onclick = (e) => {
      e.currentTarget.classList.toggle('active');
      $('#formLine').style.opacity = e.currentTarget.classList.contains('active') ? '.75' : '0';
    };
    $$('[data-engine-speed]').forEach(btn => btn.onclick = () => {
      speed = Number(btn.dataset.engineSpeed);
      $$('[data-engine-speed]').forEach(x => x.classList.toggle('active', x === btn));
      start = performance.now() - (elapsed * 1000 / speed);
    });
    $('#engineTimeline').onclick = (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      elapsed = Math.max(0, Math.min(TOTAL, ((e.clientX-r.left)/r.width)*TOTAL));
      start = performance.now() - (elapsed * 1000 / speed);
      drawPose(elapsed);
    };
  }

  const lerp=(a,b,t)=>a+(b-a)*t;
  const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  const setLine=(id,a,b)=>{
    const el=$('#'+id); if(!el) return;
    el.setAttribute('x1',a.x);el.setAttribute('y1',a.y);el.setAttribute('x2',b.x);el.setAttribute('y2',b.y);
  };
  const setEllipse=(id,x,y,rx,ry,rot=0)=>{
    const el=$('#'+id); if(!el) return;
    el.setAttribute('cx',x);el.setAttribute('cy',y);
    if(rx)el.setAttribute('rx',rx);if(ry)el.setAttribute('ry',ry);
    el.setAttribute('transform',`rotate(${rot} ${x} ${y})`);
  };

  function poseAt(t){
    let p;
    if(t<2) p=0;
    else if(t<6) p=ease((t-2)/4);
    else if(t<8) p=1;
    else if(t<14) p=1-ease((t-8)/6);
    else p=0;

    const shoulder={x:lerp(389,386,p),y:lerp(255,333,p)};
    const rearShoulder={x:lerp(355,351,p),y:lerp(252,327,p)};
    const hip={x:lerp(650,646,p),y:lerp(278,343,p)};
    const knee={x:lerp(770,768,p),y:lerp(315,372,p)};
    const ankle={x:lerp(868,866,p),y:lerp(365,409,p)};
    const hand={x:355,y:411};
    const rearHand={x:309,y:409};

    const elbow={x:lerp(365,465,p),y:lerp(333,372,p)};
    const rearElbow={x:lerp(325,419,p),y:lerp(330,370,p)};

    return {p,shoulder,rearShoulder,hip,knee,ankle,hand,rearHand,elbow,rearElbow};
  }

  function drawPose(t){
    const q=poseAt(t);
    setLine('frontUpperArm',q.shoulder,q.elbow);
    setLine('frontForearm',q.elbow,q.hand);
    setLine('rearUpperArm',q.rearShoulder,q.rearElbow);
    setLine('rearForearm',q.rearElbow,q.rearHand);

    setLine('frontThigh',q.hip,q.knee);
    setLine('frontShin',q.knee,q.ankle);
    setLine('rearThigh',{x:q.hip.x+26,y:q.hip.y+12},{x:q.knee.x+20,y:q.knee.y+18});
    setLine('rearShin',{x:q.knee.x+20,y:q.knee.y+18},{x:q.ankle.x+8,y:q.ankle.y+12});

    const torso=$('#torso');
    torso?.setAttribute('d',
      `M ${q.shoulder.x-59} ${q.shoulder.y-20}
       C ${lerp(410,425,q.p)} ${lerp(218,295,q.p)}
         ${lerp(522,535,q.p)} ${lerp(232,315,q.p)}
         ${q.hip.x+8} ${q.hip.y}
       L ${q.hip.x-2} ${q.hip.y+60}
       C ${lerp(515,522,q.p)} ${lerp(316,373,q.p)}
         ${lerp(410,420,q.p)} ${lerp(305,365,q.p)}
         ${q.shoulder.x-65} ${q.shoulder.y+31} Z`
    );

    $('#waistBand')?.setAttribute('transform',`translate(${lerp(0,-4,q.p)} ${lerp(0,65,q.p)})`);
    $('#shirtAccent')?.setAttribute('transform',`translate(${lerp(0,4,q.p)} ${lerp(0,69,q.p)})`);

    const headX=lerp(263,279,q.p), headY=lerp(210,294,q.p);
    setEllipse('face',headX,headY,46,52,lerp(13,6,q.p));
    $('#head')?.setAttribute('transform',`translate(${lerp(0,16,q.p)} ${lerp(0,84,q.p)}) rotate(${lerp(0,-5,q.p)} 263 210)`);
    $('#neck')?.setAttribute('transform',`translate(${lerp(0,13,q.p)} ${lerp(0,80,q.p)})`);
    setEllipse('frontHand',355,411,43,15,-3);
    setEllipse('rearHand',309,409,40,14,-4);
    setEllipse('shoulderGlow',q.shoulder.x,q.shoulder.y,30,36,0);

    $('#frontShoe')?.setAttribute('transform',`translate(${lerp(0,-2,q.p)} ${lerp(0,44,q.p)}) rotate(${lerp(0,-2,q.p)} 890 370)`);
    $('#rearShoe')?.setAttribute('transform',`translate(${lerp(0,-2,q.p)} ${lerp(0,44,q.p)}) rotate(${lerp(0,-2,q.p)} 890 370)`);

    $('#formLine')?.setAttribute('x1',lerp(292,304,q.p));
    $('#formLine')?.setAttribute('y1',lerp(230,311,q.p));
    $('#formLine')?.setAttribute('x2',lerp(812,814,q.p));
    $('#formLine')?.setAttribute('y2',lerp(292,382,q.p));

    $('#motionArrow')?.setAttribute('transform',`translate(0 ${lerp(0,35,q.p)})`);
  }

  function tick(now=performance.now()){
    cancelAnimationFrame(raf);
    if(playing) elapsed=((now-start)*speed/1000)%TOTAL;
    drawPose(elapsed);

    const pct=elapsed/TOTAL*100;
    if($('#engineProgress')) $('#engineProgress').style.width=pct+'%';
    if($('#engineTime')) $('#engineTime').textContent=`00:${String(Math.floor(elapsed)).padStart(2,'0')} / 00:16`;
    const phase = elapsed<2?0:elapsed<6?1:elapsed<8?2:elapsed<14?3:4;
    $$('#enginePhases span').forEach((x,i)=>x.classList.toggle('active',i===phase));
    raf=requestAnimationFrame(tick);
  }

  const observer=new MutationObserver(()=>setTimeout(mount,0));
  window.addEventListener('DOMContentLoaded',()=>{
    mount();
    const n=$('#exerciseName'); if(n) observer.observe(n,{childList:true,characterData:true,subtree:true});
    const d=$('#demo'); if(d) observer.observe(d,{childList:true});
  });
})();
