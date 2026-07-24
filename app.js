
const $=id=>document.getElementById(id),C=2*Math.PI*112;
const E={wm:$('wm'),ws:$('ws'),rm:$('rm'),rs:$('rs'),runSetup:$('runSetup'),runActive:$('runActive'),startRun:$('startRun'),timerCard:$('timerCard'),round:$('round'),gpsStatus:$('gpsStatus'),ringProgress:$('ringProgress'),phaseEmoji:$('phaseEmoji'),phaseName:$('phaseName'),countdown:$('countdown'),nextLabel:$('nextLabel'),totalDistance:$('totalDistance'),walkDistance:$('walkDistance'),runDistance:$('runDistance'),elapsed:$('elapsed'),cycles:$('cycles'),pace:$('pace'),changeIntervals:$('changeIntervals'),stopRun:$('stopRun'),pauseRun:$('pauseRun'),soundBtn:$('soundBtn'),settingsBtn:$('settingsBtn'),exerciseGrid:$('exerciseGrid'),demo:$('demo'),exerciseName:$('exerciseName'),exerciseTarget:$('exerciseTarget'),exerciseTip:$('exerciseTip'),exerciseAmount:$('exerciseAmount'),exerciseUnit:$('exerciseUnit'),lessExercise:$('lessExercise'),moreExercise:$('moreExercise'),startExercise:$('startExercise'),mapDistance:$('mapDistance'),mapAccuracy:$('mapAccuracy'),recenterMap:$('recenterMap'),routeHome:$('routeHome'),directions:$('directions'),routeDistance:$('routeDistance'),routeDuration:$('routeDuration'),directionSteps:$('directionSteps'),weeklyMinutes:$('weeklyMinutes'),weeklyMessage:$('weeklyMessage'),goalProgress:$('goalProgress'),goalPercent:$('goalPercent'),healthCalories:$('healthCalories'),healthDistance:$('healthDistance'),healthBmi:$('healthBmi'),bmiLabel:$('bmiLabel'),healthPace:$('healthPace'),historyList:$('historyList'),intervalModal:$('intervalModal'),closeIntervals:$('closeIntervals'),lwm:$('lwm'),lws:$('lws'),lrm:$('lrm'),lrs:$('lrs'),applyNow:$('applyNow'),applyIntervals:$('applyIntervals'),settingsModal:$('settingsModal'),closeSettings:$('closeSettings'),gpsToggle:$('gpsToggle'),weight:$('weight'),height:$('height'),weeklyGoal:$('weeklyGoal'),toast:$('toast'),
achievementGrid:$('achievementGrid'),achievementCount:$('achievementCount'),
summaryModal:$('summaryModal'),closeSummary:$('closeSummary'),summaryDone:$('summaryDone'),
summaryViewHealth:$('summaryViewHealth'),summaryIcon:$('summaryIcon'),summaryTitle:$('summaryTitle'),
summarySubtitle:$('summarySubtitle'),summaryTime:$('summaryTime'),summaryDistance:$('summaryDistance'),
summaryCalories:$('summaryCalories'),summaryFourthLabel:$('summaryFourthLabel'),summaryFourth:$('summaryFourth'),
summaryAchievement:$('summaryAchievement'),summaryAchievementIcon:$('summaryAchievementIcon'),
summaryAchievementName:$('summaryAchievementName'),planGrid:$('planGrid'),startPlan:$('startPlan'),indoorBrowse:$('indoorBrowse'),indoorActive:$('indoorActive'),exerciseMuscle:$('exerciseMuscle'),exerciseSets:$('exerciseSets'),exerciseRest:$('exerciseRest'),exitIndoor:$('exitIndoor'),indoorModeLabel:$('indoorModeLabel'),indoorProgressLabel:$('indoorProgressLabel'),indoorTotalTime:$('indoorTotalTime'),indoorProgressBar:$('indoorProgressBar'),activeDemo:$('activeDemo'),indoorPhaseLabel:$('indoorPhaseLabel'),activeExerciseName:$('activeExerciseName'),activeExerciseTip:$('activeExerciseTip'),indoorCountdown:$('indoorCountdown'),indoorCountdownUnit:$('indoorCountdownUnit'),indoorRingProgress:$('indoorRingProgress'),indoorSetCurrent:$('indoorSetCurrent'),indoorSetTotal:$('indoorSetTotal'),indoorNextLabel:$('indoorNextLabel'),previousIndoor:$('previousIndoor'),indoorPause:$('indoorPause'),nextIndoor:$('nextIndoor'),indoorLevel:$('indoorLevel'),runTarget:$('runTarget'),warmupToggle:$('warmupToggle'),vibrationToggle:$('vibrationToggle'),runReadyChip:$('runReadyChip'),liveWorkoutStatus:$('liveWorkoutStatus'),targetProgressText:$('targetProgressText'),targetRing:$('targetRing'),phaseProgressText:$('phaseProgressText'),skipPhase:$('skipPhase'),targetRemaining:$('targetRemaining'),averagePace:$('averagePace'),liveCalories:$('liveCalories'),liveSpeed:$('liveSpeed'),runTip:$('runTip'),startCountdown:$('startCountdown'),startCountdownNumber:$('startCountdownNumber')};
const H={greeting:$('homeGreeting'),date:$('homeDate'),streak:$('homeStreak'),goalRing:$('homeGoalRing'),goalPercent:$('homeGoalPercent'),activeMinutes:$('homeActiveMinutes'),goalMessage:$('homeGoalMessage'),workouts:$('homeWorkouts'),calories:$('homeCalories'),distance:$('homeDistance'),gpsLabel:$('homeGpsLabel'),lastWorkout:$('homeLastWorkout'),challengeTitle:$('challengeTitle'),challengeText:$('challengeText'),challengeCheck:$('challengeCheck')};
let S={walk:120,run:180,phase:'walk',duration:120,left:120,elapsed:0,walkTime:0,runTime:0,cycles:0,active:false,paused:false,sound:true,timer:null,end:0,last:0,audio:null,gps:true,watch:null,pos:null,start:null,total:0,walkM:0,runM:0,speed:null,map:null,userMarker:null,startMarker:null,trace:[],routeGeo:null,indoorTimer:null,target:1800,vibrate:true,wakeLock:null,goalAnnounced:false,indoorActive:false,indoorPaused:false,indoorPlan:null,indoorQueue:[],indoorIndex:0,indoorSet:1,indoorSets:2,indoorRest:30,indoorPhase:'work',indoorLeft:0,indoorDuration:0,indoorElapsed:0,indoorStarted:0,indoorMode:'single'};
const exercises=[
{name:'Push-ups',icon:'💪',muscle:'Chest & arms',amount:10,unit:'repetitions',tip:'Keep a straight line from shoulders to heels. Lower your chest between your hands.',type:'push'},
{name:'Squats',icon:'🦵',muscle:'Legs & glutes',amount:15,unit:'repetitions',tip:'Sit your hips back, keep your chest lifted and track knees over toes.',type:'squat'},
{name:'Sit-ups',icon:'🧘',muscle:'Core',amount:12,unit:'repetitions',tip:'Brace your core and rise smoothly. Do not pull your head with your hands.',type:'sit'},
{name:'Lunges',icon:'🚶',muscle:'Legs & balance',amount:10,unit:'each leg',tip:'Take a stable step, keep your front knee aligned and lower the back knee.',type:'lunge'},
{name:'Plank',icon:'⏱️',muscle:'Core stability',amount:30,unit:'seconds',tip:'Brace your core and keep shoulders, hips and heels in one straight line.',type:'plank'},
{name:'Mountain climbers',icon:'🏔️',muscle:'Core & cardio',amount:30,unit:'seconds',tip:'Keep shoulders above hands and alternate knees without bouncing your hips.',type:'climber'},
{name:'Burpees',icon:'🔥',muscle:'Full body',amount:8,unit:'repetitions',tip:'Move through squat, plank and stand with control. Land softly.',type:'burpee'},
{name:'Jumping jacks',icon:'⭐',muscle:'Cardio',amount:30,unit:'seconds',tip:'Land softly and keep a steady rhythm while arms and legs move together.',type:'jack'}
];
const indoorPlans={
 quick:{name:'Quick Start',level:'Beginner',sets:1,rest:20,queue:[0,1,4,7]},
 core:{name:'Core Builder',level:'Intermediate',sets:2,rest:25,queue:[2,4,5,2]},
 full:{name:'Full Body',level:'Intermediate',sets:2,rest:30,queue:[0,1,3,5,6,7]}
};
let selectedPlan='quick';
let currentExercise=0,exerciseAmount=10;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,Number(v)||0));function fmt(n){n=Math.max(0,Math.ceil(n));return`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`}const km=m=>`${(m/1000).toFixed(2)} km`;function pace(v){if(!v||v<.45)return'--';const x=1000/v;if(!isFinite(x)||x>3600)return'--';return`${Math.floor(x/60)}:${String(Math.round(x%60)).padStart(2,'0')}/km`}
function show(name){document.querySelectorAll('.screen').forEach(x=>x.classList.toggle('active',x.id===name));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.screen===name));if(name==='mapScreen')setTimeout(()=>{initMap();S.map?.resize()},80);if(name==='health')renderHealth();if(name==='home')renderHome()}
function toast(t){E.toast.textContent=t;E.toast.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>E.toast.classList.remove('show'),2300)}
function beep(){try{S.audio??=new(AudioContext||webkitAudioContext);S.audio.resume();const n=S.audio.currentTime;[[0,760],[.18,960]].forEach(([t,f])=>{const o=S.audio.createOscillator(),g=S.audio.createGain();o.frequency.value=f;g.gain.setValueAtTime(.0001,n+t);g.gain.exponentialRampToValueAtTime(.2,n+t+.02);g.gain.exponentialRampToValueAtTime(.0001,n+t+.17);o.connect(g);g.connect(S.audio.destination);o.start(n+t);o.stop(n+t+.2)})}catch{}}
function say(t){toast(t);if(!S.sound)return;beep();if('speechSynthesis'in window){speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(t))}navigator.vibrate?.([180,80,180])}
function read(m,s){m.value=clamp(m.value,0,99);s.value=clamp(s.value,0,59);return Number(m.value)*60+Number(s.value)}function setTime(n,m,s){m.value=Math.floor(n/60);s.value=n%60}
function hav(a,b){const r=x=>x*Math.PI/180,R=6371000,d1=r(b.latitude-a.latitude),d2=r(b.longitude-a.longitude),q=Math.sin(d1/2)**2+Math.cos(r(a.latitude))*Math.cos(r(b.latitude))*Math.sin(d2/2)**2;return 2*R*Math.asin(Math.sqrt(q))}
function initMap(){if(S.map||typeof maplibregl==='undefined')return;S.map=new maplibregl.Map({container:'map',style:'https://tiles.openfreemap.org/styles/liberty',center:[9.1829,48.7758],zoom:13,pitch:35,attributionControl:true});S.map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'bottom-right');S.map.on('load',()=>{S.map.addSource('trace',{type:'geojson',data:{type:'Feature',geometry:{type:'LineString',coordinates:[]}}});S.map.addLayer({id:'trace-line',type:'line',source:'trace',paint:{'line-color':'#8d7cff','line-width':6,'line-opacity':.9}});S.map.addSource('route-home',{type:'geojson',data:{type:'Feature',geometry:{type:'LineString',coordinates:[]}}});S.map.addLayer({id:'route-home-line',type:'line',source:'route-home',paint:{'line-color':'#42d5a1','line-width':7,'line-opacity':.92,'line-dasharray':[1.2,1.2]}})})}
function updateMap(p,accuracy){initMap();if(!S.map)return;const lngLat=[p.longitude,p.latitude];if(!S.userMarker){const node=document.createElement('div');node.style.cssText='width:19px;height:19px;border-radius:50%;background:#8d7cff;border:4px solid white;box-shadow:0 3px 12px #0008';S.userMarker=new maplibregl.Marker({element:node}).setLngLat(lngLat).addTo(S.map)}else S.userMarker.setLngLat(lngLat);if(!S.start){S.start=p;const node=document.createElement('div');node.textContent='🏁';node.style.fontSize='24px';S.startMarker=new maplibregl.Marker({element:node}).setLngLat(lngLat).addTo(S.map);S.map.flyTo({center:lngLat,zoom:16,pitch:45})}S.trace.push(lngLat);const src=S.map.getSource('trace');if(src)src.setData({type:'Feature',geometry:{type:'LineString',coordinates:S.trace}});E.mapDistance.textContent=`From start: ${S.start?km(hav(S.start,p)):'--'}`;E.mapAccuracy.textContent=`GPS: ±${Math.round(accuracy)} m`}
function stopGps(){if(S.watch!==null)navigator.geolocation?.clearWatch(S.watch);S.watch=null;S.pos=null}
function startGps(){stopGps();if(!S.gps||!navigator.geolocation){E.gpsStatus.textContent='GPS off';return}E.gpsStatus.textContent='Finding GPS…';S.watch=navigator.geolocation.watchPosition(x=>{const c=x.coords,p={latitude:c.latitude,longitude:c.longitude,accuracy:c.accuracy,timestamp:x.timestamp};E.gpsStatus.textContent=c.accuracy<=20?`GPS ±${Math.round(c.accuracy)}m`:'GPS weak';if(S.active&&!S.paused&&S.pos&&c.accuracy<=50&&S.pos.accuracy<=50){const d=hav(S.pos,p),dt=Math.max(1,(p.timestamp-S.pos.timestamp)/1000);if(d>=1.2&&d<=Math.max(70,dt*12)){S.total+=d;S.phase==='walk'?S.walkM+=d:S.runM+=d}}S.speed=Number.isFinite(c.speed)&&c.speed>=0?c.speed:S.pos?hav(S.pos,p)/Math.max(1,(p.timestamp-S.pos.timestamp)/1000):null;S.pos=p;updateMap(p,c.accuracy);renderRun()},()=>E.gpsStatus.textContent='GPS unavailable',{enableHighAccuracy:true,maximumAge:1000,timeout:15000})}
function phaseUI(){const w=S.phase==='walk';E.timerCard.className=`timer-card ${w?'walking':'running'}`;E.phaseEmoji.textContent=w?'🚶':'🏃';E.phaseName.textContent=w?'WALK':'RUN';E.round.textContent=`ROUND ${S.cycles+1}`;E.nextLabel.textContent=w?`Next: Run ${fmt(S.run)}`:`Next: Walk ${fmt(S.walk)}`;updateRunTip()}
function renderRun(){E.countdown.textContent=fmt(S.left);E.elapsed.textContent=fmt(S.elapsed);E.cycles.textContent=S.cycles;E.totalDistance.textContent=km(S.total);E.walkDistance.textContent=km(S.walkM);E.runDistance.textContent=km(S.runM);E.pace.textContent=pace(S.speed);E.averagePace.textContent=averagePaceText();E.liveCalories.textContent=estimateCalories();E.liveSpeed.textContent=speedText();const p=S.duration?Math.max(0,Math.min(1,S.left/S.duration)):0;E.phaseProgressText.textContent=`${Math.round((1-p)*100)}% phase complete`;E.ringProgress.style.strokeDasharray=C;E.ringProgress.style.strokeDashoffset=C*(1-p);const t=S.target?Math.min(1,S.elapsed/S.target):0,c=2*Math.PI*124;E.targetRing.style.strokeDasharray=c;E.targetRing.style.strokeDashoffset=c*(1-t);E.targetProgressText.textContent=S.target?`${Math.round(t*100)}% of ${Math.round(S.target/60)} min goal`:'Open goal';E.targetRemaining.textContent=S.target?`${fmt(Math.max(0,S.target-S.elapsed))} remaining`:'No target';if(S.target&&S.elapsed>=S.target&&!S.goalAnnounced){S.goalAnnounced=true;E.targetProgressText.textContent='Goal reached';say('Workout goal complete');vibratePhase([100,60,100,60,180])}}
function switchPhase(){vibratePhase();if(S.phase==='walk'){S.phase='run';S.duration=S.run;S.left=S.run;say('Start running')}else{S.phase='walk';S.duration=S.walk;S.left=S.walk;S.cycles++;say('Start walking')}S.end=Date.now()+S.left*1000;S.last=Date.now();phaseUI();renderRun()}
function tick(){if(!S.active||S.paused)return;const n=Date.now(),d=Math.max(0,(n-S.last)/1000);S.elapsed+=d;S.phase==='walk'?S.walkTime+=d:S.runTime+=d;S.last=n;S.left=Math.max(0,(S.end-n)/1000);S.left<=.02?switchPhase():renderRun()}

async function holdWakeLock(){try{if('wakeLock'in navigator)S.wakeLock=await navigator.wakeLock.request('screen')}catch{}}
function releaseWakeLock(){try{S.wakeLock?.release()}catch{}S.wakeLock=null}
function averagePaceText(){if(S.total<10||S.elapsed<1)return'--';const v=S.elapsed/(S.total/1000),m=Math.floor(v/60),s=Math.round(v%60);return`${m}:${String(s).padStart(2,'0')}`}
function speedText(){return Number.isFinite(S.speed)&&S.speed>=0?(S.speed*3.6).toFixed(1):'--'}
function vibratePhase(pattern=[100,60,140]){if(S.vibrate)navigator.vibrate?.(pattern)}
function updateRunTip(){E.runTip.innerHTML=S.phase==='run'?'<span>⚡</span><div><strong>Run tall and relaxed</strong><p>Keep your shoulders loose and use short, controlled steps.</p></div>':'<span>💡</span><div><strong>Recover without stopping</strong><p>Use the walk phase to steady your breathing.</p></div>'}
async function warmupCountdown(){if(!E.warmupToggle.checked)return;E.startCountdown.classList.add('open');for(let n=3;n>=1;n--){E.startCountdownNumber.textContent=n;vibratePhase([40]);await new Promise(r=>setTimeout(r,750))}E.startCountdownNumber.textContent='GO';vibratePhase([80,50,150]);await new Promise(r=>setTimeout(r,500));E.startCountdown.classList.remove('open')}

async function startRun(){S.walk=read(E.wm,E.ws);S.run=read(E.rm,E.rs);if(S.walk<1||S.run<1)return toast('Each interval must be at least 1 second');S.gps=E.gpsToggle.checked;S.target=Number(E.runTarget.value)||0;S.vibrate=E.vibrationToggle.checked;E.startRun.disabled=true;await warmupCountdown();Object.assign(S,{phase:'walk',duration:S.walk,left:S.walk,elapsed:0,walkTime:0,runTime:0,cycles:0,active:true,paused:false,total:0,walkM:0,runM:0,speed:null,pos:null,start:null,trace:[],goalAnnounced:false});E.runSetup.hidden=true;E.runActive.hidden=false;E.runReadyChip.textContent='Live';phaseUI();renderRun();S.end=Date.now()+S.left*1000;S.last=Date.now();clearInterval(S.timer);S.timer=setInterval(tick,200);startGps();holdWakeLock();say('Start walking');E.startRun.disabled=false}
function pauseRun(){if(!S.active)return;S.paused=!S.paused;E.pauseRun.innerHTML=S.paused?'<span>▶</span><small>Resume</small>':'<span>Ⅱ</span><small>Pause</small>';E.pauseRun.classList.toggle('resume',S.paused);E.liveWorkoutStatus.textContent=S.paused?'WORKOUT PAUSED':'WORKOUT LIVE';if(S.paused){S.left=Math.max(0,(S.end-Date.now())/1000);releaseWakeLock();say('Workout paused')}else{S.end=Date.now()+S.left*1000;S.last=Date.now();holdWakeLock();say(S.phase==='walk'?'Continue walking':'Continue running')}renderRun()}
function estimateCalories(){const w=clamp(E.weight.value,30,250)||75;return Math.round((3.5*w*S.walkTime/3600)+(8.3*w*S.runTime/3600))}

const achievements=[
  {id:'first',icon:'🌟',name:'First Step',text:'Complete your first workout',test:s=>s.workouts>=1},
  {id:'five',icon:'🔥',name:'Building Momentum',text:'Complete 5 workouts',test:s=>s.workouts>=5},
  {id:'ten',icon:'🏆',name:'Ten Strong',text:'Complete 10 workouts',test:s=>s.workouts>=10},
  {id:'distance5',icon:'🛣️',name:'Road Starter',text:'Travel 5 km outdoors',test:s=>s.distance>=5000},
  {id:'distance50',icon:'🌍',name:'Distance Hero',text:'Travel 50 km outdoors',test:s=>s.distance>=50000},
  {id:'minutes500',icon:'⏱️',name:'Time Champion',text:'Reach 500 active minutes',test:s=>s.minutes>=500},
  {id:'streak3',icon:'⚡',name:'Three-Day Spark',text:'Build a 3-day workout streak',test:s=>s.streak>=3},
  {id:'goal',icon:'🎯',name:'Goal Crusher',text:'Complete your weekly active goal',test:s=>s.weeklyPct>=100}
];
function achievementStats(items=history()){
  const now=new Date(),monday=new Date(now);monday.setDate(now.getDate()-((now.getDay()+6)%7));monday.setHours(0,0,0,0);
  const minutes=items.reduce((a,x)=>a+(x.duration||0),0)/60;
  const distance=items.reduce((a,x)=>a+(x.distance||0),0);
  const weekMinutes=items.filter(x=>new Date(x.date)>=monday).reduce((a,x)=>a+(x.duration||0),0)/60;
  const goal=Math.max(1,clamp(E.weeklyGoal.value,30,1000)||150);
  return{workouts:items.length,minutes,distance,streak:streakCount(items),weeklyPct:weekMinutes/goal*100}
}
function unlockedAchievementIds(items=history()){
  const s=achievementStats(items);
  return achievements.filter(a=>a.test(s)).map(a=>a.id)
}
function updateAchievements(items=history()){
  if(!E.achievementGrid)return;
  const unlocked=new Set(unlockedAchievementIds(items));
  E.achievementCount.textContent=`${unlocked.size} of ${achievements.length} unlocked`;
  E.achievementGrid.innerHTML=achievements.map(a=>`
    <article class="achievement-card ${unlocked.has(a.id)?'unlocked':'locked'}">
      <span class="achievement-medal">${unlocked.has(a.id)?a.icon:'🔒'}</span>
      <strong>${a.name}</strong>
      <p>${a.text}</p>
      <span class="achievement-state">${unlocked.has(a.id)?'UNLOCKED':'LOCKED'}</span>
    </article>`).join('')
}
function newlyUnlocked(before,after){
  const was=new Set(unlockedAchievementIds(before));
  return achievements.find(a=>unlockedAchievementIds(after).includes(a.id)&&!was.has(a.id))||null
}
function openSummary(workout,newAchievement=null){
  E.summaryIcon.textContent=workout.distance>0?'🏃':'💪';
  E.summaryTitle.textContent=workout.type==='Walk & Run'?'Workout complete!':'Exercise complete!';
  E.summarySubtitle.textContent=`${workout.type} has been added to your activity history.`;
  E.summaryTime.textContent=fmt(workout.duration||0);
  E.summaryDistance.textContent=km(workout.distance||0);
  E.summaryCalories.textContent=workout.calories||0;
  E.summaryFourthLabel.textContent=workout.type==='Walk & Run'?'CYCLES':'REPS / SEC';
  E.summaryFourth.textContent=workout.cycles||0;
  E.summaryAchievement.hidden=!newAchievement;
  if(newAchievement){
    E.summaryAchievementIcon.textContent=newAchievement.icon;
    E.summaryAchievementName.textContent=newAchievement.name;
  }
  E.summaryModal.classList.add('open');
  navigator.vibrate?.([90,50,160]);
}
function closeSummary(goHealth=false){
  E.summaryModal.classList.remove('open');
  show(goHealth?'health':'home')
}

function stopRun(){if(!S.active)return;S.active=false;S.paused=false;clearInterval(S.timer);stopGps();releaseWakeLock();const before=history();const workout={type:'Walk & Run',date:new Date().toISOString(),duration:S.elapsed,distance:S.total,cycles:S.cycles,calories:estimateCalories(),walk:S.walk,run:S.run,walkDistance:S.walkM,runDistance:S.runM,target:S.target,averagePace:averagePaceText()};const after=[workout,...before];saveHistory(after);const unlocked=newlyUnlocked(before,after);E.runSetup.hidden=false;E.runActive.hidden=true;E.runReadyChip.textContent='Ready';E.pauseRun.innerHTML='<span>Ⅱ</span><small>Pause</small>';E.pauseRun.classList.remove('resume');updateAchievements(after);openSummary(workout,unlocked)}
function openIntervals(){setTime(S.walk,E.lwm,E.lws);setTime(S.run,E.lrm,E.lrs);E.applyNow.checked=false;E.intervalModal.classList.add('open')}function applyIntervals(){const w=read(E.lwm,E.lws),r=read(E.lrm,E.lrs);if(w<1||r<1)return toast('Each interval must be at least 1 second');S.walk=w;S.run=r;if(E.applyNow.checked){S.duration=S.phase==='walk'?w:r;S.left=S.duration;S.end=Date.now()+S.left*1000;S.last=Date.now()}phaseUI();renderRun();E.intervalModal.classList.remove('open');say('New intervals applied')}
function personPose(name,pose){const P={
push:[['70','107','115','112','166','121','88','144','146','150'],['70','128','115','130','166','132','90','151','148','152'],['70','107','115','112','166','121','88','144','146','150']],
squat:[['120','55','120','105','90','146','150','146'],['120','78','120','122','86','148','154','148'],['120','55','120','105','90','146','150','146']],
sit:[['78','72','112','118','166','145','92','147'],['112','55','122','112','166','145','93','147'],['78','72','112','118','166','145','92','147']],
lunge:[['120','50','120','102','78','146','174','146'],['120','72','120','116','76','146','174','146'],['120','50','120','102','78','146','174','146']],
plank:[['58','99','119','111','190','126','78','147','170','149'],['58','102','119','114','190','129','78','150','170','151'],['58','99','119','111','190','126','78','147','170','149']],
climber:[['58','93','119','109','184','123','79','147','153','147'],['58','93','119','109','184','123','79','147','105','147'],['58','93','119','109','184','123','79','147','176','147']],
burpee:[['120','48','120','101','91','145','149','145'],['74','112','120','126','179','136','92','151','151','151'],['120','38','120','93','87','137','153','137']],
jack:[['120','48','120','101','98','146','142','146'],['120','48','120','101','71','146','169','146'],['120','48','120','101','98','146','142','146']]
};return P[name][pose]}
function drawPerson(type,pose){const a=personPose(type,pose);if(['push','plank','climber'].includes(type)||type==='burpee'&&pose===1){const [hx,hy,sx,sy,fx,fy,ax,ay,lx,ly]=a;return `<g class="pose${['A','B','C'][pose]}"><ellipse class="mat" cx="125" cy="153" rx="104" ry="10"/><circle class="skin" cx="${hx}" cy="${hy}" r="13"/><path class="limb" d="M${Number(hx)+14} ${Number(hy)+3} L${sx} ${sy} L${fx} ${fy}"/><path class="limb" d="M${Number(sx)-18} ${Number(sy)-4} L${ax} ${ay} M${Number(sx)+26} ${Number(sy)+5} L${lx} ${ly}"/><path class="shirt" d="M${Number(hx)+13} ${Number(hy)-5} L${Number(sx)+8} ${Number(sy)-11} L${Number(sx)+17} ${Number(sy)+11} L${Number(hx)+16} ${Number(hy)+13} Z"/></g>`}const [hx,hy,sx,sy,lx,ly,rx,ry]=a;return `<g class="pose${['A','B','C'][pose]}"><ellipse class="mat" cx="120" cy="153" rx="92" ry="9"/><circle class="skin" cx="${hx}" cy="${hy}" r="13"/><path class="limb" d="M${hx} ${Number(hy)+14} L${sx} ${sy} M${sx} ${Number(sy)-28} L${Number(sx)-34} ${Number(sy)-6} M${sx} ${Number(sy)-28} L${Number(sx)+34} ${Number(sy)-6} M${sx} ${sy} L${lx} ${ly} M${sx} ${sy} L${rx} ${ry}"/><path class="shirt" d="M${Number(sx)-14} ${Number(sy)-45} Q${sx} ${Number(sy)-55} ${Number(sx)+14} ${Number(sy)-45} L${Number(sx)+13} ${Number(sy)-5} L${Number(sx)-13} ${Number(sy)-5} Z"/><path class="shorts" d="M${Number(sx)-14} ${Number(sy)-7} L${Number(sx)+14} ${Number(sy)-7} L${Number(sx)+20} ${Number(sy)+9} L${sx} ${Number(sy)+5} L${Number(sx)-20} ${Number(sy)+9} Z"/></g>`}
function demoSvg(type){return `<svg viewBox="0 0 240 180" aria-label="Animated ${type} form guide"><line class="floor" x1="20" y1="155" x2="220" y2="155"/>${drawPerson(type,0)}${drawPerson(type,1)}${drawPerson(type,2)}<path class="arrow" d="M210 55 Q225 90 210 125"/><path fill="#42d5a1" d="M204 119 L212 134 L219 119 Z"/></svg>`}
function renderExerciseGrid(){
  E.exerciseGrid.innerHTML=exercises.map((x,i)=>`<button class="exercise-card ${i===currentExercise?'selected':''}" data-i="${i}"><span>${x.icon}</span><strong>${x.name}</strong><small>${x.muscle}</small></button>`).join('');
  document.querySelectorAll('.exercise-card').forEach(b=>b.onclick=()=>{currentExercise=+b.dataset.i;exerciseAmount=exercises[currentExercise].amount;renderExerciseGrid();renderExercise()})
}
function renderExercise(){
  const x=exercises[currentExercise];
  E.demo.innerHTML=`<span class="demo-badge">6-second form guide</span>${demoSvg(x.type)}<div class="demo-progress"><i></i></div>`;
  E.exerciseName.textContent=x.name;E.exerciseMuscle.textContent=x.muscle;
  E.exerciseTarget.textContent=`${exerciseAmount} ${x.unit}`;E.exerciseTip.textContent=x.tip;
  E.exerciseAmount.textContent=exerciseAmount;E.exerciseUnit.textContent=x.unit
}
function saveExercise(x,amount,duration,type=x.name,sets=1){
  const before=history();
  const workout={type,date:new Date().toISOString(),duration,distance:0,cycles:amount*sets,sets,calories:Math.round((clamp(E.weight.value,30,250)||75)*duration/3600*6)};
  const after=[workout,...before];saveHistory(after);const unlocked=newlyUnlocked(before,after);updateAchievements(after);openSummary(workout,unlocked)
}
function indoorExerciseDuration(x,amount){
  return x.unit==='seconds'?amount:Math.max(12,Math.round(amount*3))
}
function startExercise(){
  S.indoorMode='single';S.indoorQueue=[currentExercise];S.indoorSets=Number(E.exerciseSets.value)||1;S.indoorRest=Number(E.exerciseRest.value)||30;
  S.indoorIndex=0;S.indoorSet=1;S.indoorElapsed=0;S.indoorStarted=Date.now();S.indoorActive=true;S.indoorPaused=false;
  beginIndoorWork()
}
function startIndoorPlan(){
  const p=indoorPlans[selectedPlan];S.indoorMode='plan';S.indoorPlan=p;S.indoorQueue=[...p.queue];S.indoorSets=p.sets;S.indoorRest=p.rest;
  S.indoorIndex=0;S.indoorSet=1;S.indoorElapsed=0;S.indoorStarted=Date.now();S.indoorActive=true;S.indoorPaused=false;
  beginIndoorWork()
}
function currentIndoorExercise(){return exercises[S.indoorQueue[S.indoorIndex]]}
function beginIndoorWork(){
  clearInterval(S.indoorTimer);const x=currentIndoorExercise();currentExercise=S.indoorQueue[S.indoorIndex];
  const amount=S.indoorMode==='single'?exerciseAmount:x.amount;
  S.indoorPhase='work';S.indoorDuration=indoorExerciseDuration(x,amount);S.indoorLeft=S.indoorDuration;
  E.indoorBrowse.hidden=true;E.indoorActive.hidden=false;E.indoorModeLabel.textContent=S.indoorMode==='plan'?S.indoorPlan.name.toUpperCase():'SINGLE EXERCISE';
  E.activeExerciseName.textContent=x.name;E.activeExerciseTip.textContent=x.tip;E.activeDemo.innerHTML=demoSvg(x.type);
  E.indoorPhaseLabel.textContent='WORK';E.indoorCountdownUnit.textContent=x.unit==='seconds'?'seconds':'reps';
  E.indoorSetTotal.textContent=S.indoorSets;E.indoorSetCurrent.textContent=S.indoorSet;
  E.indoorProgressLabel.textContent=`Exercise ${S.indoorIndex+1} of ${S.indoorQueue.length}`;
  E.indoorNextLabel.textContent=S.indoorSet<S.indoorSets?`Next: Rest ${S.indoorRest} sec`:S.indoorIndex<S.indoorQueue.length-1?`Next: ${exercises[S.indoorQueue[S.indoorIndex+1]].name}`:'Final exercise';
  say(`Start ${x.name}`);holdWakeLock();renderIndoorActive();
  S.indoorTimer=setInterval(indoorTick,1000)
}
function beginIndoorRest(){
  clearInterval(S.indoorTimer);S.indoorPhase='rest';S.indoorDuration=S.indoorRest;S.indoorLeft=S.indoorRest;
  E.indoorPhaseLabel.textContent='REST';E.activeExerciseName.textContent='Recover';
  E.activeExerciseTip.textContent='Breathe slowly, shake out tension and prepare for the next set.';
  E.indoorCountdownUnit.textContent='seconds';E.indoorNextLabel.textContent=`Next: ${currentIndoorExercise().name}`;
  say(`Rest for ${S.indoorRest} seconds`);renderIndoorActive();S.indoorTimer=setInterval(indoorTick,1000)
}
function indoorTick(){
  if(!S.indoorActive||S.indoorPaused)return;
  S.indoorLeft=Math.max(0,S.indoorLeft-1);S.indoorElapsed++;renderIndoorActive();
  if(S.indoorLeft<=0){navigator.vibrate?.([100,60,150]);if(S.indoorPhase==='work')finishIndoorWork();else beginIndoorWork()}
}
function finishIndoorWork(){
  if(S.indoorSet<S.indoorSets){S.indoorSet++;beginIndoorRest();return}
  S.indoorSet=1;
  if(S.indoorIndex<S.indoorQueue.length-1){S.indoorIndex++;beginIndoorRest();return}
  finishIndoorSession()
}
function renderIndoorActive(){
  const x=currentIndoorExercise(),amount=S.indoorMode==='single'?exerciseAmount:x.amount;
  const display=S.indoorPhase==='work'&&x.unit!=='seconds'?Math.max(1,Math.ceil(amount*(S.indoorLeft/S.indoorDuration))):Math.ceil(S.indoorLeft);
  E.indoorCountdown.textContent=display;E.indoorTotalTime.textContent=fmt(S.indoorElapsed);
  const ring=2*Math.PI*72,ratio=S.indoorDuration?S.indoorLeft/S.indoorDuration:0;
  E.indoorRingProgress.style.strokeDasharray=ring;E.indoorRingProgress.style.strokeDashoffset=ring*(1-ratio);
  const totalSteps=S.indoorQueue.length*S.indoorSets,done=S.indoorIndex*S.indoorSets+(S.indoorSet-1)+(S.indoorPhase==='rest'?1:1-ratio);
  E.indoorProgressBar.style.width=`${Math.min(100,done/totalSteps*100)}%`
}
function pauseIndoor(){
  if(!S.indoorActive)return;S.indoorPaused=!S.indoorPaused;
  E.indoorPause.innerHTML=S.indoorPaused?'<span>▶</span><small>Resume</small>':'<span>Ⅱ</span><small>Pause</small>';
  E.indoorPause.classList.toggle('resume',S.indoorPaused);S.indoorPaused?releaseWakeLock():holdWakeLock();
  say(S.indoorPaused?'Workout paused':'Workout resumed')
}
function nextIndoor(){
  if(!S.indoorActive)return;
  if(S.indoorIndex<S.indoorQueue.length-1){S.indoorIndex++;S.indoorSet=1;beginIndoorWork()}else finishIndoorSession()
}
function previousIndoor(){
  if(!S.indoorActive)return;
  if(S.indoorIndex>0){S.indoorIndex--;S.indoorSet=1;beginIndoorWork()}else toast('This is the first exercise')
}
function exitIndoorWorkout(){
  if(!S.indoorActive)return;clearInterval(S.indoorTimer);S.indoorActive=false;S.indoorPaused=false;releaseWakeLock();
  E.indoorActive.hidden=true;E.indoorBrowse.hidden=false;E.indoorPause.innerHTML='<span>Ⅱ</span><small>Pause</small>';E.indoorPause.classList.remove('resume');toast('Indoor workout ended')
}
function finishIndoorSession(){
  clearInterval(S.indoorTimer);S.indoorActive=false;releaseWakeLock();
  const x=currentIndoorExercise(),label=S.indoorMode==='plan'?S.indoorPlan.name:x.name;
  const before=history(),totalMoves=S.indoorQueue.reduce((n,i)=>n+(exercises[i].amount||0),0)*S.indoorSets;
  const workout={type:label,date:new Date().toISOString(),duration:Math.max(1,S.indoorElapsed),distance:0,cycles:totalMoves,sets:S.indoorSets,calories:Math.round((clamp(E.weight.value,30,250)||75)*Math.max(1,S.indoorElapsed)/3600*6)};
  const after=[workout,...before];saveHistory(after);const unlocked=newlyUnlocked(before,after);updateAchievements(after);
  E.indoorActive.hidden=true;E.indoorBrowse.hidden=false;E.indoorPause.innerHTML='<span>Ⅱ</span><small>Pause</small>';E.indoorPause.classList.remove('resume');
  say('Indoor workout complete');openSummary(workout,unlocked)
}
async function routeToStart(){if(!S.pos||!S.start)return toast('Start GPS tracking before routing');E.routeHome.textContent='Calculating…';try{const u=`https://routing.openstreetmap.de/routed-foot/route/v1/driving/${S.pos.longitude},${S.pos.latitude};${S.start.longitude},${S.start.latitude}?overview=full&steps=true&geometries=geojson`;const r=await fetch(u);const d=await r.json();if(!d.routes?.length)throw Error();const route=d.routes[0],coords=route.geometry.coordinates;const src=S.map?.getSource('route-home');if(src)src.setData({type:'Feature',geometry:{type:'LineString',coordinates:coords}});const bounds=coords.reduce((b,c)=>b.extend(c),new maplibregl.LngLatBounds(coords[0],coords[0]));S.map?.fitBounds(bounds,{padding:45});E.routeDistance.textContent=km(route.distance);E.routeDuration.textContent=`${Math.round(route.duration/60)} min walk`;const steps=route.legs.flatMap(l=>l.steps||[]);E.directionSteps.innerHTML=steps.map((x,i)=>`<div class="direction-step"><b>${i+1}</b><span>${instruction(x)}<br><small>${Math.round(x.distance)} m</small></span></div>`).join('');E.directions.classList.add('show')}catch{toast('Walking route could not be calculated')}finally{E.routeHome.textContent='↩ Route to start'}}
function instruction(x){const t=x.maneuver?.type||'continue',m=x.maneuver?.modifier||'';if(t==='depart')return`Start ${m}`;if(t==='arrive')return'You have reached your starting point';if(t==='turn')return`Turn ${m}`;if(t==='new name')return`Continue ${m}`;if(t==='roundabout')return'Enter the roundabout';return`${t.replaceAll('_',' ')} ${m}`.trim()}
function history(){return JSON.parse(localStorage.getItem('touraysHealthHistory')||localStorage.getItem('touraysHistory')||'[]')}function saveHistory(h){localStorage.setItem('touraysHealthHistory',JSON.stringify(h.slice(0,60)));renderHome()}

function dayKey(d){return new Date(d).toISOString().slice(0,10)}
function streakCount(items){
  const days=[...new Set(items.map(x=>dayKey(x.date)))].sort().reverse();
  if(!days.length)return 0;
  let streak=0,cursor=new Date();cursor.setHours(0,0,0,0);
  const today=dayKey(cursor),y=new Date(cursor);y.setDate(y.getDate()-1);
  if(days[0]!==today&&days[0]!==dayKey(y))return 0;
  for(const k of days){
    if(k===dayKey(cursor)){streak++;cursor.setDate(cursor.getDate()-1)}
    else if(streak===0&&k===dayKey(y)){streak++;cursor=new Date(y);cursor.setDate(cursor.getDate()-1)}
    else break
  }
  return streak
}
function renderHome(){
  const h=history(),now=new Date(),hour=now.getHours(),first=(localStorage.getItem('touraysName')||'').trim();
  H.greeting.textContent=`${hour<12?'Good morning':hour<18?'Good afternoon':'Good evening'}${first?' '+first:''}`;
  H.date.textContent=now.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});
  const monday=new Date(now);monday.setDate(now.getDate()-((now.getDay()+6)%7));monday.setHours(0,0,0,0);
  const week=h.filter(x=>new Date(x.date)>=monday),mins=Math.round(week.reduce((a,x)=>a+(x.duration||0),0)/60);
  const goal=Math.max(1,clamp(E.weeklyGoal.value,30,1000)||150),pct=Math.min(100,Math.round(mins/goal*100));
  const cal=week.reduce((a,x)=>a+(x.calories||0),0),dist=week.reduce((a,x)=>a+(x.distance||0),0);
  H.activeMinutes.textContent=mins;H.goalPercent.textContent=`${pct}%`;H.goalRing.style.strokeDashoffset=339.292*(1-pct/100);
  H.goalMessage.textContent=pct>=100?'Weekly goal complete. Excellent work!':`${Math.max(0,goal-mins)} minutes left to reach your weekly goal.`;
  H.workouts.textContent=week.length;H.calories.textContent=cal;H.distance.textContent=km(dist);
  H.streak.textContent=streakCount(h);
  H.gpsLabel.textContent=S.pos?'GPS connected':S.gps?'Finding your location':'GPS disabled';
  if(h[0])H.lastWorkout.textContent=`Last: ${h[0].type} · ${new Date(h[0].date).toLocaleDateString(undefined,{month:'short',day:'numeric'})}`;
  else H.lastWorkout.textContent='No workouts yet';
  const todayDone=h.some(x=>dayKey(x.date)===dayKey(now));
  H.challengeTitle.textContent=todayDone?'Daily challenge complete':'Complete one workout';
  H.challengeText.textContent=todayDone?'You trained today. Your streak is protected.':'A short session still counts. Keep your momentum going.';
  H.challengeCheck.textContent=todayDone?'✓':'○';
  H.challengeCheck.closest('.challenge-card')?.classList.toggle('done',todayDone)
}

function renderHealth(){const h=history(),now=new Date(),monday=new Date(now);monday.setDate(now.getDate()-((now.getDay()+6)%7));monday.setHours(0,0,0,0);const week=h.filter(x=>new Date(x.date)>=monday),mins=Math.round(week.reduce((a,x)=>a+(x.duration||0),0)/60),goal=Math.max(1,clamp(E.weeklyGoal.value,30,1000)||150),pct=Math.min(100,Math.round(mins/goal*100)),dist=h.reduce((a,x)=>a+(x.distance||0),0),cal=h.reduce((a,x)=>a+(x.calories||0),0),outdoor=h.filter(x=>(x.distance||0)>50),outTime=outdoor.reduce((a,x)=>a+(x.duration||0),0),outDist=outdoor.reduce((a,x)=>a+(x.distance||0),0);E.weeklyMinutes.textContent=`${mins} active min`;E.weeklyMessage.textContent=`${Math.max(0,goal-mins)} min remaining to your goal`;E.goalProgress.style.strokeDashoffset=201*(1-pct/100);E.goalPercent.textContent=`${pct}%`;E.healthCalories.textContent=`${cal} kcal`;E.healthDistance.textContent=km(dist);const w=(clamp(E.weight.value,30,250)||75),ht=(clamp(E.height.value,120,230)||0)/100,bmi=ht?w/(ht*ht):0;E.healthBmi.textContent=bmi?bmi.toFixed(1):'--';E.bmiLabel.textContent=bmi<18.5?'Below standard range':bmi<25?'Standard range':bmi<30?'Above standard range':'High range';E.healthPace.textContent=outDist>50?`${Math.floor((outTime/(outDist/1000))/60)}:${String(Math.round((outTime/(outDist/1000))%60)).padStart(2,'0')}/km`:'--';updateAchievements(h);E.historyList.innerHTML=h.length?h.slice(0,20).map(x=>`<article class="history-item"><div class="history-head"><strong>${x.type||'Workout'}</strong><small>${new Date(x.date).toLocaleDateString()} · ${new Date(x.date).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</small></div><div class="history-values"><div><span>TIME</span><strong>${fmt(x.duration||0)}</strong></div><div><span>DISTANCE</span><strong>${km(x.distance||0)}</strong></div><div><span>CALORIES</span><strong>${x.calories||0}</strong></div></div></article>`).join(''):'<div class="empty">No workouts saved yet.</div>'}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>show(b.dataset.screen));document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));document.querySelectorAll('.preset').forEach(b=>b.onclick=()=>{setTime(+b.dataset.w,E.wm,E.ws);setTime(+b.dataset.r,E.rm,E.rs);document.querySelectorAll('.preset').forEach(x=>x.classList.toggle('selected',x===b))});
E.closeSummary.onclick=()=>closeSummary(false);E.summaryDone.onclick=()=>closeSummary(false);E.summaryViewHealth.onclick=()=>closeSummary(true);E.summaryModal.onclick=x=>{if(x.target===E.summaryModal)closeSummary(false)};
E.skipPhase.onclick=()=>{if(S.active&&!S.paused){S.end=Date.now();switchPhase()}};
E.runTarget.value=localStorage.getItem('touraysRunTarget')||'1800';
E.warmupToggle.checked=localStorage.getItem('touraysWarmup')!=='false';
E.vibrationToggle.checked=localStorage.getItem('touraysVibration')!=='false';
E.runTarget.onchange=()=>localStorage.setItem('touraysRunTarget',E.runTarget.value);
E.warmupToggle.onchange=()=>localStorage.setItem('touraysWarmup',E.warmupToggle.checked);
E.vibrationToggle.onchange=()=>localStorage.setItem('touraysVibration',E.vibrationToggle.checked);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&S.active&&!S.paused)holdWakeLock()});
E.startRun.onclick=startRun;E.pauseRun.onclick=pauseRun;E.stopRun.onclick=stopRun;E.changeIntervals.onclick=openIntervals;E.closeIntervals.onclick=()=>E.intervalModal.classList.remove('open');E.applyIntervals.onclick=applyIntervals;E.settingsBtn.onclick=()=>E.settingsModal.classList.add('open');E.closeSettings.onclick=()=>E.settingsModal.classList.remove('open');E.soundBtn.onclick=()=>{S.sound=!S.sound;E.soundBtn.textContent=S.sound?'🔊':'🔇'};E.intervalModal.onclick=x=>{if(x.target===E.intervalModal)E.intervalModal.classList.remove('open')};E.settingsModal.onclick=x=>{if(x.target===E.settingsModal)E.settingsModal.classList.remove('open')};
E.lessExercise.onclick=()=>{exerciseAmount=Math.max(1,exerciseAmount-(exercises[currentExercise].unit==='seconds'?5:1));renderExercise()};
E.moreExercise.onclick=()=>{exerciseAmount+=exercises[currentExercise].unit==='seconds'?5:1;renderExercise()};
E.startExercise.onclick=startExercise;
document.querySelectorAll('.plan-card').forEach(b=>b.onclick=()=>{selectedPlan=b.dataset.plan;document.querySelectorAll('.plan-card').forEach(x=>x.classList.toggle('selected',x===b));E.indoorLevel.textContent=indoorPlans[selectedPlan].level});
E.startPlan.onclick=startIndoorPlan;E.indoorPause.onclick=pauseIndoor;E.nextIndoor.onclick=nextIndoor;E.previousIndoor.onclick=previousIndoor;E.exitIndoor.onclick=exitIndoorWorkout;E.recenterMap.onclick=()=>{if(S.map&&S.pos)S.map.flyTo({center:[S.pos.longitude,S.pos.latitude],zoom:17,pitch:45});else toast('Waiting for GPS')};E.routeHome.onclick=routeToStart;[E.weight,E.height,E.weeklyGoal].forEach(x=>x.onchange=()=>{renderHealth();renderHome()});E.gpsToggle.onchange=()=>{S.gps=E.gpsToggle.checked;S.gps?startGps():stopGps()};
renderExerciseGrid();renderExercise();startGps();renderHealth();renderHome();updateAchievements();
