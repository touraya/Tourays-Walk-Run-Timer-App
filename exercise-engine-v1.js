(()=>{
  const TOTAL=16;
  let anim=null,playing=true,speed=1,start=performance.now(),elapsed=0,raf=0;
  const $=s=>document.querySelector(s);
  function isPush(){return (($('#exerciseName')?.textContent||'').toLowerCase().includes('push'))}
  function markup(){return `
    <div class="premium-engine" id="premiumExerciseEngine">
      <div class="engine-stage">
        <img class="engine-poster" src="pushup-premium-master.png" alt="Professional push-up form demonstration">
        <div class="engine-lottie" id="pushupLottieGuide"></div>
        <span class="engine-alignment" aria-hidden="true"></span>
        <span class="engine-muscle-overlay" aria-hidden="true"></span>
        <span class="engine-chip">LOTTIE ENGINE · PUSH-UP MASTER</span>
        <span class="engine-time" id="engineTime">00:00 / 00:16</span>
      </div>
      <div class="engine-footer">
        <div class="engine-timeline" id="engineTimeline"><i id="engineProgress"></i></div>
        <div class="engine-phases" id="enginePhases"><span>Setup</span><span>Lower</span><span>Hold</span><span>Push up</span><span>Lockout</span></div>
        <div class="engine-controls-v1">
          <button class="primary-control" id="enginePlay" aria-label="Pause">Ⅱ</button>
          <button id="engineReplay">↻ Replay</button>
          <button id="engineMuscles">Muscles</button>
          <button id="engineForm" class="active">Form guide</button>
          <div class="speed-group" aria-label="Animation speed">
            <button data-engine-speed="0.5">0.5×</button><button class="active" data-engine-speed="1">1×</button><button data-engine-speed="1.5">1.5×</button>
          </div>
        </div>
        <div class="engine-form-note"><span>✓</span><div><strong>Controlled professional demonstration</strong><small>Follow the alignment line. Lower with control, hold briefly, then press evenly back to the start.</small></div></div>
      </div>
    </div>`}
  function mount(){
    const demo=$('#demo'); if(!demo||!isPush()) return;
    if($('#premiumExerciseEngine')) return;
    demo.innerHTML=markup(); demo.classList.add('engine-host');
    if(window.lottie){
      anim=window.lottie.loadAnimation({container:$('#pushupLottieGuide'),renderer:'svg',loop:true,autoplay:true,path:'pushup-guide.json'});
      anim.setSpeed(speed);
    }
    bind(); start=performance.now()-elapsed*1000/speed; tick();
  }
  function bind(){
    $('#enginePlay').onclick=()=>{playing=!playing;$('#enginePlay').textContent=playing?'Ⅱ':'▶';$('#enginePlay').setAttribute('aria-label',playing?'Pause':'Play'); if(anim) playing?anim.play():anim.pause(); if(playing) start=performance.now()-elapsed*1000/speed};
    $('#engineReplay').onclick=()=>{elapsed=0;start=performance.now();playing=true;$('#enginePlay').textContent='Ⅱ';if(anim){anim.goToAndPlay(0,true)}};
    $('#engineMuscles').onclick=e=>{e.currentTarget.classList.toggle('active');$('#premiumExerciseEngine').classList.toggle('muscles-on')};
    $('#engineForm').onclick=e=>{e.currentTarget.classList.toggle('active');$('.engine-alignment').style.opacity=e.currentTarget.classList.contains('active')?'1':'0'};
    document.querySelectorAll('[data-engine-speed]').forEach(b=>b.onclick=()=>{speed=Number(b.dataset.engineSpeed);document.querySelectorAll('[data-engine-speed]').forEach(x=>x.classList.toggle('active',x===b));start=performance.now()-elapsed*1000/speed;if(anim)anim.setSpeed(speed)});
    $('#engineTimeline').onclick=e=>{const r=e.currentTarget.getBoundingClientRect();elapsed=Math.max(0,Math.min(TOTAL,(e.clientX-r.left)/r.width*TOTAL));start=performance.now()-elapsed*1000/speed;if(anim)anim.goToAndStop((elapsed/TOTAL)*anim.totalFrames,true)};
  }
  function tick(now=performance.now()){
    cancelAnimationFrame(raf);
    if(playing){elapsed=((now-start)*speed/1000)%TOTAL}
    const pct=elapsed/TOTAL*100;const prog=$('#engineProgress'),time=$('#engineTime');
    if(prog)prog.style.width=pct+'%'; if(time)time.textContent=`00:${String(Math.floor(elapsed)).padStart(2,'0')} / 00:16`;
    const phase=Math.min(4,Math.floor(elapsed/(TOTAL/5)));document.querySelectorAll('#enginePhases span').forEach((x,i)=>x.classList.toggle('active',i===phase));
    raf=requestAnimationFrame(tick);
  }
  const observer=new MutationObserver(()=>{setTimeout(mount,0)});
  window.addEventListener('DOMContentLoaded',()=>{mount();const n=$('#exerciseName');if(n)observer.observe(n,{childList:true,characterData:true,subtree:true});const d=$('#demo');if(d)observer.observe(d,{childList:true})});
})();
