
const $=id=>document.getElementById(id),C=2*Math.PI*112;
const E={wm:$('wm'),ws:$('ws'),rm:$('rm'),rs:$('rs'),runSetup:$('runSetup'),runActive:$('runActive'),startRun:$('startRun'),timerCard:$('timerCard'),round:$('round'),gpsStatus:$('gpsStatus'),ringProgress:$('ringProgress'),phaseEmoji:$('phaseEmoji'),phaseName:$('phaseName'),countdown:$('countdown'),nextLabel:$('nextLabel'),totalDistance:$('totalDistance'),walkDistance:$('walkDistance'),runDistance:$('runDistance'),elapsed:$('elapsed'),cycles:$('cycles'),pace:$('pace'),changeIntervals:$('changeIntervals'),stopRun:$('stopRun'),pauseRun:$('pauseRun'),soundBtn:$('soundBtn'),settingsBtn:$('settingsBtn'),exerciseGrid:$('exerciseGrid'),demo:$('demo'),exerciseName:$('exerciseName'),exerciseTarget:$('exerciseTarget'),exerciseTip:$('exerciseTip'),exerciseLibraryCount:$('exerciseLibraryCount'),exerciseDifficulty:$('exerciseDifficulty'),exerciseEquipment:$('exerciseEquipment'),exerciseCalories:$('exerciseCalories'),exerciseMistake:$('exerciseMistake'),exerciseAmount:$('exerciseAmount'),exerciseUnit:$('exerciseUnit'),lessExercise:$('lessExercise'),moreExercise:$('moreExercise'),startExercise:$('startExercise'),mapDistance:$('mapDistance'),mapAccuracy:$('mapAccuracy'),recenterMap:$('recenterMap'),routeHome:$('routeHome'),directions:$('directions'),routeDistance:$('routeDistance'),routeDuration:$('routeDuration'),directionSteps:$('directionSteps'),weeklyMinutes:$('weeklyMinutes'),weeklyMessage:$('weeklyMessage'),goalProgress:$('goalProgress'),goalPercent:$('goalPercent'),healthCalories:$('healthCalories'),healthDistance:$('healthDistance'),healthBmi:$('healthBmi'),bmiLabel:$('bmiLabel'),healthPace:$('healthPace'),historyList:$('historyList'),intervalModal:$('intervalModal'),closeIntervals:$('closeIntervals'),lwm:$('lwm'),lws:$('lws'),lrm:$('lrm'),lrs:$('lrs'),applyNow:$('applyNow'),applyIntervals:$('applyIntervals'),settingsModal:$('settingsModal'),closeSettings:$('closeSettings'),gpsToggle:$('gpsToggle'),weight:$('weight'),height:$('height'),weeklyGoal:$('weeklyGoal'),toast:$('toast'),
achievementGrid:$('achievementGrid'),achievementCount:$('achievementCount'),
summaryModal:$('summaryModal'),closeSummary:$('closeSummary'),summaryDone:$('summaryDone'),
summaryViewHealth:$('summaryViewHealth'),summaryIcon:$('summaryIcon'),summaryTitle:$('summaryTitle'),
summarySubtitle:$('summarySubtitle'),summaryTime:$('summaryTime'),summaryDistance:$('summaryDistance'),
summaryCalories:$('summaryCalories'),summaryFourthLabel:$('summaryFourthLabel'),summaryFourth:$('summaryFourth'),
summaryAchievement:$('summaryAchievement'),summaryAchievementIcon:$('summaryAchievementIcon'),
summaryAchievementName:$('summaryAchievementName'),planGrid:$('planGrid'),startPlan:$('startPlan'),indoorBrowse:$('indoorBrowse'),indoorActive:$('indoorActive'),exerciseMuscle:$('exerciseMuscle'),formStart:$('formStart'),formMove:$('formMove'),formFocus:$('formFocus'),exerciseSets:$('exerciseSets'),exerciseRest:$('exerciseRest'),exitIndoor:$('exitIndoor'),indoorModeLabel:$('indoorModeLabel'),indoorProgressLabel:$('indoorProgressLabel'),indoorTotalTime:$('indoorTotalTime'),indoorProgressBar:$('indoorProgressBar'),activeDemo:$('activeDemo'),indoorPhaseLabel:$('indoorPhaseLabel'),activeExerciseName:$('activeExerciseName'),activeExerciseTip:$('activeExerciseTip'),indoorCountdown:$('indoorCountdown'),indoorCountdownUnit:$('indoorCountdownUnit'),indoorRingProgress:$('indoorRingProgress'),indoorSetCurrent:$('indoorSetCurrent'),indoorSetTotal:$('indoorSetTotal'),indoorNextLabel:$('indoorNextLabel'),previousIndoor:$('previousIndoor'),indoorPause:$('indoorPause'),nextIndoor:$('nextIndoor'),indoorLevel:$('indoorLevel'),healthRange:$('healthRange'),healthTrendBadge:$('healthTrendBadge'),healthStreakPro:$('healthStreakPro'),healthActiveTime:$('healthActiveTime'),healthWorkoutCount:$('healthWorkoutCount'),healthActiveTrend:$('healthActiveTrend'),healthWorkoutTrend:$('healthWorkoutTrend'),healthCaloriesTrend:$('healthCaloriesTrend'),healthDistanceTrend:$('healthDistanceTrend'),healthPaceTrend:$('healthPaceTrend'),activityChart:$('activityChart'),activityChartEmpty:$('activityChartEmpty'),chartTotal:$('chartTotal'),chartAverage:$('chartAverage'),mixChart:$('mixChart'),mixTotal:$('mixTotal'),mixCenterValue:$('mixCenterValue'),mixList:$('mixList'),personalBestGrid:$('personalBestGrid'),personalBestCount:$('personalBestCount'),historySearch:$('historySearch'),historyFilter:$('historyFilter'),exportHistory:$('exportHistory'),coachChip:$('coachChip'),coachHeadline:$('coachHeadline'),coachMessage:$('coachMessage'),coachHeroIcon:$('coachHeroIcon'),coachReadiness:$('coachReadiness'),coachLoad:$('coachLoad'),coachLoadNote:$('coachLoadNote'),coachRecovery:$('coachRecovery'),coachRecoveryNote:$('coachRecoveryNote'),coachGoal:$('coachGoal'),coachGoalNote:$('coachGoalNote'),coachPlanName:$('coachPlanName'),coachPlanBadge:$('coachPlanBadge'),coachPlanIcon:$('coachPlanIcon'),coachPlanReason:$('coachPlanReason'),coachPlanIntensity:$('coachPlanIntensity'),coachPlanType:$('coachPlanType'),coachPlanCalories:$('coachPlanCalories'),startCoachPlan:$('startCoachPlan'),refreshCoach:$('refreshCoach'),coachInsights:$('coachInsights'),coachAlternatives:$('coachAlternatives'),coachGoals:$('coachGoals'),goalStatusChip:$('goalStatusChip'),goalsHeroTitle:$('goalsHeroTitle'),goalsHeroMessage:$('goalsHeroMessage'),goalsOverallRing:$('goalsOverallRing'),goalsOverallPercent:$('goalsOverallPercent'),goalMinutesValue:$('goalMinutesValue'),goalWorkoutsValue:$('goalWorkoutsValue'),goalDistanceValue:$('goalDistanceValue'),goalStreakValue:$('goalStreakValue'),goalMinutesBar:$('goalMinutesBar'),goalWorkoutsBar:$('goalWorkoutsBar'),goalDistanceBar:$('goalDistanceBar'),goalStreakBar:$('goalStreakBar'),dailyChallengeIcon:$('dailyChallengeIcon'),dailyChallengeName:$('dailyChallengeName'),dailyChallengeDescription:$('dailyChallengeDescription'),dailyChallengeBar:$('dailyChallengeBar'),dailyChallengeProgress:$('dailyChallengeProgress'),dailyChallengeState:$('dailyChallengeState'),dailyChallengeReward:$('dailyChallengeReward'),weeklyChallenges:$('weeklyChallenges'),weeklyChallengeCount:$('weeklyChallengeCount'),fitnessLevelName:$('fitnessLevelName'),fitnessLevelNumber:$('fitnessLevelNumber'),xpProgressBar:$('xpProgressBar'),xpCurrent:$('xpCurrent'),xpNext:$('xpNext'),builderMinutes:$('builderMinutes'),builderWorkouts:$('builderWorkouts'),builderDistance:$('builderDistance'),builderStreak:$('builderStreak'),resetSmartGoals:$('resetSmartGoals'),startGoalWorkout:$('startGoalWorkout'),profileStatusChip:$('profileStatusChip'),profileAvatar:$('profileAvatar'),profileDisplayName:$('profileDisplayName'),profileSummary:$('profileSummary'),editProfileButton:$('editProfileButton'),profileWorkoutCount:$('profileWorkoutCount'),profileActiveTime:$('profileActiveTime'),profileDistance:$('profileDistance'),profileFitnessLevel:$('profileFitnessLevel'),profileXpValue:$('profileXpValue'),profileCompletion:$('profileCompletion'),profileName:$('profileName'),profileAge:$('profileAge'),profileTrainingLevel:$('profileTrainingLevel'),profileHeight:$('profileHeight'),profileWeight:$('profileWeight'),profileGoal:$('profileGoal'),saveProfile:$('saveProfile'),profileVoiceToggle:$('profileVoiceToggle'),profileVibrationToggle:$('profileVibrationToggle'),profileCountdownToggle:$('profileCountdownToggle'),profileWeeklyGoal:$('profileWeeklyGoal'),downloadBackup:$('downloadBackup'),restoreBackup:$('restoreBackup'),downloadCsv:$('downloadCsv'),clearAppData:$('clearAppData'),backupFileInput:$('backupFileInput'),dataSizeLabel:$('dataSizeLabel'),plannerToday:$('plannerToday'),plannerHeadline:$('plannerHeadline'),plannerSummary:$('plannerSummary'),plannerRing:$('plannerRing'),plannerPercent:$('plannerPercent'),plannerPrevWeek:$('plannerPrevWeek'),plannerNextWeek:$('plannerNextWeek'),plannerWeekLabel:$('plannerWeekLabel'),plannerWeekDates:$('plannerWeekDates'),plannerDays:$('plannerDays'),plannerSelectedDayTitle:$('plannerSelectedDayTitle'),addPlannedWorkout:$('addPlannedWorkout'),plannerList:$('plannerList'),plannerInsightTitle:$('plannerInsightTitle'),plannerInsightText:$('plannerInsightText'),plannerCompletionLabel:$('plannerCompletionLabel'),plannerPlannedCount:$('plannerPlannedCount'),plannerCompletedCount:$('plannerCompletedCount'),plannerPlannedTime:$('plannerPlannedTime'),plannerRestDays:$('plannerRestDays'),exportPlannerCalendar:$('exportPlannerCalendar'),plannerModal:$('plannerModal'),plannerModalTitle:$('plannerModalTitle'),closePlannerModal:$('closePlannerModal'),plannedWorkoutType:$('plannedWorkoutType'),plannedWorkoutDate:$('plannedWorkoutDate'),plannedWorkoutTime:$('plannedWorkoutTime'),plannedWorkoutDuration:$('plannedWorkoutDuration'),plannedWorkoutNote:$('plannedWorkoutNote'),savePlannedWorkout:$('savePlannedWorkout'),performanceRange:$('performanceRange'),performanceReadinessTitle:$('performanceReadinessTitle'),performanceReadinessText:$('performanceReadinessText'),performanceReadinessRing:$('performanceReadinessRing'),performanceReadinessScore:$('performanceReadinessScore'),performanceFitnessTrend:$('performanceFitnessTrend'),performanceFitnessNote:$('performanceFitnessNote'),performanceTrainingLoad:$('performanceTrainingLoad'),performanceLoadNote:$('performanceLoadNote'),performanceRecovery:$('performanceRecovery'),performanceRecoveryNote:$('performanceRecoveryNote'),performanceConsistency:$('performanceConsistency'),performanceConsistencyNote:$('performanceConsistencyNote'),performanceEfficiency:$('performanceEfficiency'),performanceEfficiencyNote:$('performanceEfficiencyNote'),performanceVo2:$('performanceVo2'),performancePaceChange:$('performancePaceChange'),performancePaceChart:$('performancePaceChart'),performanceLoadChange:$('performanceLoadChange'),performanceLoadChart:$('performanceLoadChart'),performanceRecords:$('performanceRecords'),performanceComparison:$('performanceComparison'),performanceInsights:$('performanceInsights'),recoveryCenterTitle:$('recoveryCenterTitle'),recoveryHours:$('recoveryHours'),recoveryCenterText:$('recoveryCenterText'),recoveryProgressBar:$('recoveryProgressBar'),recoveryProgressLabel:$('recoveryProgressLabel'),exportPerformanceCsv:$('exportPerformanceCsv'),exportPerformanceReport:$('exportPerformanceReport'),activityDetailModal:$('activityDetailModal'),activityDetailTitle:$('activityDetailTitle'),activityDetailDate:$('activityDetailDate'),closeActivityDetail:$('closeActivityDetail'),activityDetailIcon:$('activityDetailIcon'),activityDetailCategory:$('activityDetailCategory'),activityDetailDuration:$('activityDetailDuration'),activityDetailBadge:$('activityDetailBadge'),activityDetailDistance:$('activityDetailDistance'),activityDetailDistanceNote:$('activityDetailDistanceNote'),activityDetailCalories:$('activityDetailCalories'),activityDetailPace:$('activityDetailPace'),activityDetailSpeed:$('activityDetailSpeed'),activityRouteCard:$('activityRouteCard'),activityRoutePoints:$('activityRoutePoints'),activityDetailMap:$('activityDetailMap'),activityRouteEmpty:$('activityRouteEmpty'),activityBreakdownList:$('activityBreakdownList'),activityNoteStatus:$('activityNoteStatus'),activityNoteText:$('activityNoteText'),activityFeelingRow:$('activityFeelingRow'),saveActivityNote:$('saveActivityNote'),shareActivity:$('shareActivity'),repeatActivity:$('repeatActivity'),deleteActivityDetail:$('deleteActivityDetail'),runTarget:$('runTarget'),warmupToggle:$('warmupToggle'),vibrationToggle:$('vibrationToggle'),runReadyChip:$('runReadyChip'),liveWorkoutStatus:$('liveWorkoutStatus'),targetProgressText:$('targetProgressText'),targetRing:$('targetRing'),phaseProgressText:$('phaseProgressText'),skipPhase:$('skipPhase'),targetRemaining:$('targetRemaining'),averagePace:$('averagePace'),liveCalories:$('liveCalories'),liveSpeed:$('liveSpeed'),runTip:$('runTip'),startCountdown:$('startCountdown'),startCountdownNumber:$('startCountdownNumber')};
const H={greeting:$('homeGreeting'),date:$('homeDate'),streak:$('homeStreak'),goalRing:$('homeGoalRing'),goalPercent:$('homeGoalPercent'),activeMinutes:$('homeActiveMinutes'),goalMessage:$('homeGoalMessage'),workouts:$('homeWorkouts'),calories:$('homeCalories'),distance:$('homeDistance'),gpsLabel:$('homeGpsLabel'),lastWorkout:$('homeLastWorkout'),challengeTitle:$('challengeTitle'),challengeText:$('challengeText'),challengeCheck:$('challengeCheck')};
let S={walk:120,run:180,phase:'walk',duration:120,left:120,elapsed:0,walkTime:0,runTime:0,cycles:0,active:false,paused:false,sound:true,timer:null,end:0,last:0,audio:null,gps:true,watch:null,pos:null,start:null,total:0,walkM:0,runM:0,speed:null,map:null,userMarker:null,startMarker:null,trace:[],routeGeo:null,indoorTimer:null,target:1800,vibrate:true,wakeLock:null,goalAnnounced:false,indoorActive:false,indoorPaused:false,indoorPlan:null,indoorQueue:[],indoorIndex:0,indoorSet:1,indoorSets:2,indoorRest:30,indoorPhase:'work',indoorLeft:0,indoorDuration:0,indoorElapsed:0,indoorStarted:0,indoorMode:'single'};

const exerciseMeta={push:{group:'upper',difficulty:'Intermediate',equipment:'No equipment',impact:'Upper body',mistake:'Do not let your hips drop or elbows flare too wide.'},squat:{group:'lower',difficulty:'Beginner',equipment:'No equipment',impact:'Lower body',mistake:'Avoid letting your knees collapse inward.'},sit:{group:'core',difficulty:'Beginner',equipment:'Mat optional',impact:'Core focus',mistake:'Do not pull your neck or use momentum.'},lunge:{group:'lower',difficulty:'Intermediate',equipment:'No equipment',impact:'Balance',mistake:'Do not let the front knee move far past the toes.'},plank:{group:'core',difficulty:'Beginner',equipment:'Mat optional',impact:'Core stability',mistake:'Avoid lifting or dropping your hips.'},climber:{group:'cardio',difficulty:'Intermediate',equipment:'No equipment',impact:'High energy',mistake:'Do not bounce your hips or shorten your range.'},burpee:{group:'cardio',difficulty:'Advanced',equipment:'No equipment',impact:'Full body',mistake:'Avoid rushing transitions and landing heavily.'},jack:{group:'cardio',difficulty:'Beginner',equipment:'No equipment',impact:'Cardio',mistake:'Land softly and keep the movement controlled.'}};let activeExerciseFilter='all';
const exerciseGuides={
  push:{start:'Hands slightly wider than shoulders; body in one straight line.',move:'Bend elbows and lower your chest, then press the floor away.',focus:'Keep hips level and elbows angled slightly back.'},
  squat:{start:'Stand tall with feet about shoulder-width apart.',move:'Push hips back and bend knees, then drive through your feet to stand.',focus:'Keep chest lifted and knees tracking over toes.'},
  sit:{start:'Lie on your back with knees bent and feet planted.',move:'Brace your core and lift your shoulders toward your knees.',focus:'Move slowly and avoid pulling your neck.'},
  lunge:{start:'Stand tall, brace your core and step forward.',move:'Lower both knees with control, then push through the front foot.',focus:'Keep the front knee aligned above the foot.'},
  plank:{start:'Place elbows under shoulders and extend both legs.',move:'Hold the position while breathing steadily.',focus:'Keep shoulders, hips and heels in one line.'},
  climber:{start:'Begin in a strong high-plank position.',move:'Drive one knee toward your chest, then switch legs.',focus:'Keep shoulders above hands and hips steady.'},
  burpee:{start:'Stand tall with feet under your hips.',move:'Squat, place hands down, step or jump to plank, then return to standing.',focus:'Land softly and keep every phase controlled.'},
  jack:{start:'Stand tall with feet together and arms by your sides.',move:'Jump feet apart while raising arms, then return.',focus:'Maintain a smooth rhythm and land softly.'}
};

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
function show(name){
  window.scrollTo({top:0,left:0,behavior:'instant'});document.querySelectorAll('.screen').forEach(x=>x.classList.toggle('active',x.id===name));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.screen===name));if(name==='mapScreen')setTimeout(()=>{initMap();S.map?.resize()},80);if(name==='health')renderHealth();if(name==='performance')renderPerformance();if(name==='home')renderHome()}
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

function stopRun(){if(!S.active)return;S.active=false;S.paused=false;clearInterval(S.timer);stopGps();releaseWakeLock();const before=history();const route=S.trace.length<=350?S.trace:S.trace.filter((_,i)=>i%Math.ceil(S.trace.length/350)===0);const workout={id:`w${Date.now()}`,type:'Walk & Run',date:new Date().toISOString(),duration:S.elapsed,distance:S.total,cycles:S.cycles,calories:estimateCalories(),walk:S.walk,run:S.run,walkDistance:S.walkM,runDistance:S.runM,target:S.target,averagePace:averagePaceText(),route};const after=[workout,...before];saveHistory(after);const unlocked=newlyUnlocked(before,after);E.runSetup.hidden=false;E.runActive.hidden=true;E.runReadyChip.textContent='Ready';E.pauseRun.innerHTML='<span>Ⅱ</span><small>Pause</small>';E.pauseRun.classList.remove('resume');updateAchievements(after);openSummary(workout,unlocked)}
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
  const visible=exercises.map((x,i)=>({x,i})).filter(({x})=>activeExerciseFilter==='all'||exerciseMeta[x.type]?.group===activeExerciseFilter);E.exerciseGrid.innerHTML=visible.map(({x,i})=>`<button class="exercise-card ${i===currentExercise?'selected':''}" data-i="${i}"><span>${x.icon}</span><strong>${x.name}</strong><small>${exerciseMeta[x.type]?.difficulty||'Beginner'} · ${x.muscle}</small></button>`).join('');E.exerciseLibraryCount.textContent=`${visible.length} exercise${visible.length===1?'':'s'}`;
  document.querySelectorAll('.exercise-card').forEach(b=>b.onclick=()=>{currentExercise=+b.dataset.i;exerciseAmount=exercises[currentExercise].amount;renderExerciseGrid();renderExercise()})
}
function renderExercise(){
  const x=exercises[currentExercise];
  E.demo.innerHTML=`<span class="demo-badge">6-second form guide</span>${demoSvg(x.type)}<div class="demo-progress"><i></i></div>`;
  E.exerciseName.textContent=x.name;E.exerciseMuscle.textContent=x.muscle;
  E.exerciseTarget.textContent=`${exerciseAmount} ${x.unit}`;E.exerciseTip.textContent=x.tip;
  const guide=exerciseGuides[x.type]||exerciseGuides.push;
  E.formStart.textContent=guide.start;E.formMove.textContent=guide.move;E.formFocus.textContent=guide.focus;const meta=exerciseMeta[x.type]||exerciseMeta.push;E.exerciseDifficulty.textContent=meta.difficulty;E.exerciseEquipment.textContent=meta.equipment;E.exerciseCalories.textContent=meta.impact;E.exerciseMistake.textContent=meta.mistake;
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






function perfItems(){const r=E.performanceRange?.value||'28',all=history();if(r==='all')return all.slice();const c=Date.now()-Number(r)*86400000;return all.filter(x=>new Date(x.date).getTime()>=c)}
function perfLoad(x){return Math.round((x.duration||0)/60*(category(x)==='Outdoor'?1.15:1.25))}
function perfPace(x){return x.distance>20&&x.duration?x.duration/(x.distance/1000):null}
function perfReadiness(items){const l=items.filter(x=>Date.now()-new Date(x.date).getTime()<48*3600000).reduce((a,x)=>a+perfLoad(x),0);return Math.max(10,Math.min(100,Math.round(92-l*.55)))}
function perfDraw(canvas,values,labels){const ctx=canvas.getContext('2d'),dpr=devicePixelRatio||1,w=canvas.clientWidth||320,h=220;canvas.width=w*dpr;canvas.height=h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);ctx.strokeStyle='rgba(255,255,255,.08)';for(let i=1;i<5;i++){const y=i*h/5;ctx.beginPath();ctx.moveTo(10,y);ctx.lineTo(w-10,y);ctx.stroke()}if(!values.length){ctx.fillStyle='rgba(255,255,255,.45)';ctx.textAlign='center';ctx.fillText('Not enough workout data',w/2,h/2);return}const min=Math.min(...values),max=Math.max(...values),span=max-min||1,pts=values.map((v,i)=>[12+i*(w-24)/Math.max(1,values.length-1),16+(max-v)/span*(h-42)]);ctx.strokeStyle='#51a8ff';ctx.lineWidth=3;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.stroke();ctx.fillStyle='#8d7cff';pts.forEach(p=>{ctx.beginPath();ctx.arc(p[0],p[1],4,0,Math.PI*2);ctx.fill()});ctx.fillStyle='rgba(255,255,255,.48)';ctx.font='10px system-ui';ctx.textAlign='center';labels.forEach((l,i)=>{if(i===0||i===labels.length-1||labels.length<=6)ctx.fillText(l,pts[i][0],h-8)})}
function renderPerformance(){const items=perfItems().sort((a,b)=>new Date(a.date)-new Date(b.date)),days=E.performanceRange.value==='all'?28:Number(E.performanceRange.value),ready=perfReadiness(items),load=items.reduce((a,x)=>a+perfLoad(x),0),active=new Set(items.map(x=>new Date(x.date).toISOString().slice(0,10))).size,cons=Math.min(100,Math.round(active/Math.max(2,days/7*3)*100)),eff=Math.round(cons*.5+ready*.5),out=items.filter(x=>category(x)==='Outdoor'&&perfPace(x)),vo2=out.length?Math.max(20,Math.min(65,Math.round((((out.reduce((a,x)=>a+(x.distance/1000)/(x.duration/3600),0)/out.length)*3.5)+5)*10)/10)):null;E.performanceReadinessRing.style.strokeDashoffset=245.044*(1-ready/100);E.performanceReadinessScore.textContent=ready;E.performanceReadinessTitle.textContent=ready>=80?'Ready to train':ready>=60?'Train with control':'Recovery recommended';E.performanceReadinessText.textContent=ready>=80?'Your recent activity suggests a balanced training load.':'Your recent load is elevated. Choose a lighter session or rest.';const half=Math.floor(items.length/2),old=items.slice(0,half).reduce((a,x)=>a+perfLoad(x),0),recent=items.slice(half).reduce((a,x)=>a+perfLoad(x),0);E.performanceFitnessTrend.textContent=recent>old*1.08?'Improving':recent<old*.92?'Easing':'Stable';E.performanceFitnessNote.textContent=items.length<2?'Need more workouts':`${recent-old>=0?'+':''}${recent-old} load points`;E.performanceTrainingLoad.textContent=load;E.performanceLoadNote.textContent=load>350?'High':load>180?'Moderate':'Low';E.performanceRecovery.textContent=`${ready}%`;E.performanceRecoveryNote.textContent=ready>=80?'Fully recovered':ready>=60?'Mostly recovered':'Recovery needed';E.performanceConsistency.textContent=`${cons}%`;E.performanceConsistencyNote.textContent=cons>=80?'Excellent routine':cons>=50?'Building consistency':'Build a routine';E.performanceEfficiency.textContent=eff;E.performanceEfficiencyNote.textContent=eff>=80?'Excellent':eff>=60?'Good':'Developing';E.performanceVo2.textContent=vo2??'--';const paces=out.map(perfPace);perfDraw(E.performancePaceChart,paces.map(x=>-x),out.map(x=>new Date(x.date).toLocaleDateString([],{month:'short',day:'numeric'})));E.performancePaceChange.textContent=paces.length>1?`${((paces[0]-paces.at(-1))/paces[0]*100).toFixed(1)}% faster`:'No comparison';const weeks=[];for(let i=3;i>=0;i--){const e=Date.now()-i*7*86400000,s=e-7*86400000;weeks.push({label:`W${4-i}`,value:items.filter(x=>{const t=new Date(x.date).getTime();return t>=s&&t<e}).reduce((a,x)=>a+perfLoad(x),0)})}perfDraw(E.performanceLoadChart,weeks.map(x=>x.value),weeks.map(x=>x.label));E.performanceLoadChange.textContent=weeks[0].value?`${Math.round((weeks.at(-1).value-weeks[0].value)/weeks[0].value*100)}% vs first week`:'No comparison';const fastest=out.slice().sort((a,b)=>perfPace(a)-perfPace(b))[0],records=[['⏱️','Longest workout',items.length?fmt(Math.max(...items.map(x=>x.duration||0))):'--'],['🛣️','Longest distance',out.length?km(Math.max(...out.map(x=>x.distance||0))):'--'],['⚡','Fastest pace',fastest?`${paceLabel(perfPace(fastest))}/km`:'--'],['🔥','Highest calories',items.length?`${Math.max(...items.map(x=>x.calories||0))} kcal`:'--'],['🚀','Highest speed',out.length?`${Math.max(...out.map(x=>(x.distance/1000)/(x.duration/3600))).toFixed(1)} km/h`:'--'],['📅','Best streak',`${streakCount(history())} days`]];E.performanceRecords.innerHTML=records.map(r=>`<article class="performance-record"><span>${r[0]}</span><strong>${r[1]}</strong><small>${r[2]}</small></article>`).join('');const a=items.at(-1),b=items.at(-2);E.performanceComparison.innerHTML=a&&b?[['Duration',a.duration||0,b.duration||0,'t'],['Distance',a.distance||0,b.distance||0,'d'],['Calories',a.calories||0,b.calories||0,'n']].map(([n,x,y,t])=>{const d=y?Math.round((x-y)/y*100):0,f=v=>t==='t'?fmt(v):t==='d'?km(v):v;return`<div class="comparison-row"><span>${n}</span><strong>${f(x)} vs ${f(y)}</strong><b class="${d>=0?'up':'down'}">${d>=0?'+':''}${d}%</b></div>`}).join(''):'<div class="empty">Complete at least two workouts to compare performance.</div>';const insights=[];if(items.length<3)insights.push(['📊','Build your data','Complete a few more workouts to unlock stronger trend analysis.']);if(cons>=75)insights.push(['🔥','Consistency is a strength',`You were active on ${active} days in this period.`]);if(load>350)insights.push(['🛌','Recovery deserves attention','Your training load is high. Add a lighter day before another demanding session.']);if(paces.length>1&&paces.at(-1)<paces[0])insights.push(['⚡','Your pace is improving','Your latest outdoor pace is faster than your first workout in this period.']);if(!insights.length)insights.push(['✨','Keep building momentum','Your training pattern is stable. Progress gradually and listen to recovery signals.']);E.performanceInsights.innerHTML=insights.map(x=>`<article class="performance-insight"><span>${x[0]}</span><div><strong>${x[1]}</strong><p>${x[2]}</p></div></article>`).join('');const hours=Math.max(0,Math.round((100-ready)/4));E.recoveryHours.textContent=`${hours} h`;E.recoveryCenterTitle.textContent=hours<=4?'Recovery looks good':hours<=12?'Light recovery recommended':'Prioritize recovery';E.recoveryCenterText.textContent=hours<=4?'You can train normally today.':'Choose an easier workout or reduce intensity today.';E.recoveryProgressBar.style.width=`${ready}%`;E.recoveryProgressLabel.textContent=`${ready}% recovered`}
function exportPerformanceAnalytics(){const rows=[['Date','Workout','Category','Duration','Distance','Calories','Load']];perfItems().forEach(x=>rows.push([x.date,x.type,category(x),x.duration||0,x.distance||0,x.calories||0,perfLoad(x)]));const blob=new Blob([rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n')],{type:'text/csv'}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='tourays-performance.csv';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);toast('Performance CSV exported')}
function exportPerformanceHtml(){const items=perfItems(),doc=`<!doctype html><html><head><meta charset="utf-8"><title>Tourays Fitness Report</title><style>body{font-family:Arial;max-width:850px;margin:40px auto;padding:20px}table{width:100%;border-collapse:collapse}td,th{padding:9px;border-bottom:1px solid #ddd;text-align:left}</style></head><body><h1>Tourays Fitness Performance Report</h1><p>Generated ${new Date().toLocaleString()}</p><h2>${items.length} workouts</h2><table><tr><th>Date</th><th>Workout</th><th>Duration</th><th>Distance</th><th>Calories</th></tr>${items.map(x=>`<tr><td>${new Date(x.date).toLocaleDateString()}</td><td>${x.type}</td><td>${fmt(x.duration||0)}</td><td>${km(x.distance||0)}</td><td>${x.calories||0}</td></tr>`).join('')}</table></body></html>`,blob=new Blob([doc],{type:'text/html'}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='tourays-performance-report.html';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);toast('Performance report exported')}

let activeActivityIndex=-1;
let activityDetailMapInstance=null;
let activityDetailFeeling='';
function activityIcon(item){return category(item)==='Outdoor'?'🏃':['Quick Start','Core Builder','Full Body'].includes(item.type)?'💪':'⚡'}
function ensureWorkoutIds(){
  const h=history();let changed=false;h.forEach((x,i)=>{if(!x.id){x.id=`legacy-${new Date(x.date).getTime()}-${i}`;changed=true}});if(changed)localStorage.setItem('touraysHealthHistory',JSON.stringify(h));return h
}
function activitySpeed(item){
  if(!item.distance||!item.duration)return'--';
  return`${((item.distance/1000)/(item.duration/3600)).toFixed(1)} km/h`
}
function detailRows(item){
  const rows=[];
  if(item.walk)rows.push(['Walk interval',fmt(item.walk)]);
  if(item.run)rows.push(['Run interval',fmt(item.run)]);
  if(item.cycles)rows.push([category(item)==='Outdoor'?'Completed cycles':'Repetitions / cycles',String(item.cycles)]);
  if(item.sets)rows.push(['Sets',String(item.sets)]);
  if(item.walkDistance)rows.push(['Walking distance',km(item.walkDistance)]);
  if(item.runDistance)rows.push(['Running distance',km(item.runDistance)]);
  if(item.target)rows.push(['Workout target',item.target?fmt(item.target):'Open goal']);
  if(item.averagePace&&item.averagePace!=='--')rows.push(['Recorded average pace',`${item.averagePace}/km`]);
  rows.push(['Workout source',item.route?.length?'GPS tracked':'Local workout']);
  return rows
}
function renderActivityRoute(item){
  if(activityDetailMapInstance){activityDetailMapInstance.remove();activityDetailMapInstance=null}
  const route=Array.isArray(item.route)?item.route.filter(x=>Array.isArray(x)&&x.length===2):[];
  E.activityRoutePoints.textContent=`${route.length} GPS point${route.length===1?'':'s'}`;
  E.activityDetailMap.style.display=route.length>1?'block':'none';E.activityRouteEmpty.style.display=route.length>1?'none':'grid';
  if(route.length<2||typeof maplibregl==='undefined')return;
  activityDetailMapInstance=new maplibregl.Map({container:'activityDetailMap',style:'https://tiles.openfreemap.org/styles/liberty',center:route[0],zoom:14,attributionControl:false});
  activityDetailMapInstance.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');
  activityDetailMapInstance.on('load',()=>{
    activityDetailMapInstance.addSource('activity-route',{type:'geojson',data:{type:'Feature',geometry:{type:'LineString',coordinates:route}}});
    activityDetailMapInstance.addLayer({id:'activity-route-line',type:'line',source:'activity-route',paint:{'line-color':'#8d7cff','line-width':5,'line-opacity':.9}});
    const startNode=document.createElement('div');startNode.textContent='🏁';startNode.style.fontSize='20px';new maplibregl.Marker({element:startNode}).setLngLat(route[0]).addTo(activityDetailMapInstance);
    const endNode=document.createElement('div');endNode.textContent='●';endNode.style.cssText='color:#42d5a1;font-size:25px;text-shadow:0 2px 8px #000';new maplibregl.Marker({element:endNode}).setLngLat(route.at(-1)).addTo(activityDetailMapInstance);
    const bounds=route.reduce((b,c)=>b.extend(c),new maplibregl.LngLatBounds(route[0],route[0]));activityDetailMapInstance.fitBounds(bounds,{padding:38,duration:0})
  })
}
function openActivityDetail(index){
  const h=ensureWorkoutIds(),item=h[index];if(!item)return;
  activeActivityIndex=index;activityDetailFeeling=item.feeling||'';
  E.activityDetailTitle.textContent=item.type||'Workout';E.activityDetailDate.textContent=new Date(item.date).toLocaleString([],{weekday:'long',month:'long',day:'numeric',year:'numeric',hour:'2-digit',minute:'2-digit'});
  E.activityDetailIcon.textContent=activityIcon(item);E.activityDetailCategory.textContent=category(item).toUpperCase();E.activityDetailDuration.textContent=fmt(item.duration||0);
  E.activityDetailDistance.textContent=km(item.distance||0);E.activityDetailCalories.textContent=`${item.calories||0} kcal`;
  const pace=item.distance>20&&item.duration?paceLabel(item.duration/(item.distance/1000)):'--';E.activityDetailPace.textContent=pace;E.activityDetailSpeed.textContent=activitySpeed(item);
  E.activityBreakdownList.innerHTML=detailRows(item).map(x=>`<div class="activity-breakdown-row"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('');
  E.activityNoteText.value=item.note||'';E.activityNoteStatus.textContent=item.note||item.feeling?'Saved':'Not saved';
  document.querySelectorAll('[data-feeling]').forEach(b=>b.classList.toggle('selected',b.dataset.feeling===activityDetailFeeling));
  E.activityDetailModal.hidden=false;setTimeout(()=>renderActivityRoute(item),80)
}
function closeActivityDetails(){
  E.activityDetailModal.hidden=true;if(activityDetailMapInstance){activityDetailMapInstance.remove();activityDetailMapInstance=null}
}
function saveActivityDetailNote(){
  const h=ensureWorkoutIds(),item=h[activeActivityIndex];if(!item)return;
  item.note=E.activityNoteText.value.trim();item.feeling=activityDetailFeeling;saveHistory(h);E.activityNoteStatus.textContent='Saved';toast('Workout note saved')
}
function activityShareText(item){
  const lines=[`${item.type||'Workout'} completed with Tourays Fitness`,`${fmt(item.duration||0)} active time`];
  if(item.distance)lines.push(`${km(item.distance)} distance`);
  if(item.calories)lines.push(`${item.calories} estimated calories`);
  if(item.feeling)lines.push(`Feeling: ${item.feeling}`);
  return lines.join(' · ')
}
async function shareCurrentActivity(){
  const item=ensureWorkoutIds()[activeActivityIndex];if(!item)return;
  const text=activityShareText(item);
  try{if(navigator.share)await navigator.share({title:'Tourays Fitness workout',text});else{await navigator.clipboard.writeText(text);toast('Workout summary copied')}}catch{}
}
function repeatCurrentActivity(){
  const item=ensureWorkoutIds()[activeActivityIndex];if(!item)return;
  closeActivityDetails();
  if(category(item)==='Outdoor'){
    E.runTarget.value=String(item.target||item.duration||1800);E.wm.value=Math.floor((item.walk||120)/60);E.ws.value=(item.walk||120)%60;E.rm.value=Math.floor((item.run||180)/60);E.rs.value=(item.run||180)%60;show('run')
  }else{
    const key=Object.keys(indoorPlans).find(k=>indoorPlans[k].name===item.type)||'quick';selectedPlan=key;document.querySelectorAll('.plan-card').forEach(x=>x.classList.toggle('selected',x.dataset.plan===key));E.indoorLevel.textContent=indoorPlans[key].level;show('indoor')
  }
  toast('Workout setup restored')
}
function deleteCurrentActivity(){
  const h=ensureWorkoutIds(),item=h[activeActivityIndex];if(!item||!confirm('Delete this workout permanently?'))return;
  h.splice(activeActivityIndex,1);saveHistory(h);closeActivityDetails();renderHealth();renderGoals();renderProfile();renderPlanner();toast('Workout deleted')
}

const plannerWorkoutMeta={
  walkrun:{name:'Balanced Walk & Run',icon:'🏃',screen:'run',duration:30},
  recovery:{name:'Recovery Walk',icon:'🚶',screen:'run',duration:20},
  quick:{name:'Quick Start',icon:'⚡',screen:'indoor',plan:'quick',duration:5},
  core:{name:'Core Builder',icon:'🎯',screen:'indoor',plan:'core',duration:8},
  full:{name:'Full Body',icon:'🔥',screen:'indoor',plan:'full',duration:12}
};
let plannerWeekOffset=0;
let plannerSelectedDate=new Date().toISOString().slice(0,10);
function loadPlanner(){try{return JSON.parse(localStorage.getItem('touraysPlanner')||'[]')}catch{return[]}}
function savePlanner(items){localStorage.setItem('touraysPlanner',JSON.stringify(items))}
function mondayOf(date){
  const d=new Date(date);d.setHours(0,0,0,0);d.setDate(d.getDate()-((d.getDay()+6)%7));return d
}
function plannerWeekStart(){
  const d=mondayOf(new Date());d.setDate(d.getDate()+plannerWeekOffset*7);return d
}
function isoDate(d){return new Date(d.getFullYear(),d.getMonth(),d.getDate()).toISOString().slice(0,10)}
function plannerWeekItems(){
  const start=plannerWeekStart(),end=new Date(start);end.setDate(start.getDate()+7);
  return loadPlanner().filter(x=>{const d=new Date(`${x.date}T00:00:00`);return d>=start&&d<end})
}
function plannerCompletionForItem(item){
  if(item.completed)return true;
  return history().some(x=>{
    const sameDay=new Date(x.date).toISOString().slice(0,10)===item.date;
    const meta=plannerWorkoutMeta[item.type];
    if(!sameDay||!meta)return false;
    if(meta.screen==='run')return category(x)==='Outdoor';
    return category(x)!=='Outdoor'
  })
}
function plannerWeekLabelText(start){
  const todayStart=mondayOf(new Date()),diff=Math.round((start-todayStart)/(86400000*7));
  return diff===0?'This week':diff===1?'Next week':diff===-1?'Last week':start.toLocaleDateString([],{month:'long',year:'numeric'})
}
function plannerTip(items){
  if(!items.length)return['Start with three sessions','A simple plan could include one outdoor workout, one indoor workout and one recovery day.'];
  const demanding=items.filter(x=>['full','walkrun'].includes(x.type)).length;
  const consecutive=items.some((x,i)=>i&&Math.abs(new Date(x.date)-new Date(items[i-1].date))<=86400000);
  if(demanding>=4)return['Protect your recovery','You have several demanding sessions planned. Consider replacing one with a recovery walk.'];
  if(consecutive)return['Balance hard and easy days','Back-to-back sessions are fine when one of them is light or recovery focused.'];
  return['Your week looks balanced','Keep at least one lighter day between demanding sessions and adjust based on how you feel.']
}
function renderPlanner(){
  const all=loadPlanner(),start=plannerWeekStart(),week=plannerWeekItems().sort((a,b)=>`${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  const completed=week.filter(plannerCompletionForItem).length,percent=week.length?Math.round(completed/week.length*100):0;
  E.plannerRing.style.strokeDashoffset=245.044*(1-percent/100);E.plannerPercent.textContent=`${percent}%`;
  E.plannerHeadline.textContent=week.length?percent===100?'Your planned week is complete':`${week.length} workout${week.length===1?'':'s'} planned`:'A balanced week starts here';
  E.plannerSummary.textContent=week.length?`${completed} completed and ${week.length-completed} remaining this week.`:'Schedule workouts, keep your routine visible and launch each session directly from the plan.';
  E.plannerWeekLabel.textContent=plannerWeekLabelText(start);
  const end=new Date(start);end.setDate(start.getDate()+6);
  E.plannerWeekDates.textContent=`${start.toLocaleDateString([],{month:'short',day:'numeric'})} – ${end.toLocaleDateString([],{month:'short',day:'numeric'})}`;
  const days=[];
  for(let i=0;i<7;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);const iso=isoDate(d),count=week.filter(x=>x.date===iso).length;
    days.push(`<button class="planner-day ${iso===plannerSelectedDate?'selected':''} ${iso===isoDate(new Date())?'today':''} ${count?'has-plan':''}" data-planner-day="${iso}"><span>${d.toLocaleDateString([],{weekday:'short'}).toUpperCase()}</span><strong>${d.getDate()}</strong><small>${count?`${count} plan${count===1?'':'s'}`:'Rest'}</small></button>`)
  }
  E.plannerDays.innerHTML=days.join('');
  document.querySelectorAll('[data-planner-day]').forEach(b=>b.onclick=()=>{plannerSelectedDate=b.dataset.plannerDay;renderPlanner()});
  const selected=new Date(`${plannerSelectedDate}T00:00:00`);
  E.plannerSelectedDayTitle.textContent=plannerSelectedDate===isoDate(new Date())?'Today':selected.toLocaleDateString([],{weekday:'long',month:'short',day:'numeric'});
  const selectedItems=all.filter(x=>x.date===plannerSelectedDate).sort((a,b)=>a.time.localeCompare(b.time));
  E.plannerList.innerHTML=selectedItems.length?selectedItems.map(item=>{const m=plannerWorkoutMeta[item.type],done=plannerCompletionForItem(item);return`<article class="planner-item ${done?'complete':''}"><div class="planner-item-icon">${m.icon}</div><div><strong>${m.name}</strong><small>${item.time} · ${item.duration} min</small>${item.note?`<em>${item.note}</em>`:''}</div><div class="planner-item-actions"><button class="done" data-plan-done="${item.id}" title="Mark complete">${done?'✓':'○'}</button><button data-plan-start="${item.id}" title="Start">▶</button><button class="delete" data-plan-delete="${item.id}" title="Delete">✕</button></div></article>`}).join(''):'<div class="empty">No workout planned for this day.</div>';
  document.querySelectorAll('[data-plan-done]').forEach(b=>b.onclick=()=>togglePlannedDone(b.dataset.planDone));
  document.querySelectorAll('[data-plan-start]').forEach(b=>b.onclick=()=>startPlannedWorkout(b.dataset.planStart));
  document.querySelectorAll('[data-plan-delete]').forEach(b=>b.onclick=()=>deletePlannedWorkout(b.dataset.planDelete));
  const tip=plannerTip(week);E.plannerInsightTitle.textContent=tip[0];E.plannerInsightText.textContent=tip[1];
  const activeDays=new Set(week.map(x=>x.date)).size;
  E.plannerCompletionLabel.textContent=`${completed} of ${week.length} done`;E.plannerPlannedCount.textContent=week.length;E.plannerCompletedCount.textContent=completed;E.plannerPlannedTime.textContent=`${week.reduce((a,x)=>a+Number(x.duration||0),0)} min`;E.plannerRestDays.textContent=7-activeDays
}
function openPlannerModal(){
  E.plannedWorkoutDate.value=plannerSelectedDate;E.plannedWorkoutTime.value='18:00';E.plannedWorkoutType.value='walkrun';E.plannedWorkoutDuration.value='30';E.plannedWorkoutNote.value='';E.plannerModal.hidden=false
}
function closePlanner(){E.plannerModal.hidden=true}
function savePlannerWorkout(){
  const type=E.plannedWorkoutType.value,date=E.plannedWorkoutDate.value,time=E.plannedWorkoutTime.value,duration=Number(E.plannedWorkoutDuration.value),note=E.plannedWorkoutNote.value.trim();
  if(!date||!time)return toast('Choose a date and time');
  const items=loadPlanner();items.push({id:`p${Date.now()}`,type,date,time,duration,note,completed:false,createdAt:new Date().toISOString()});savePlanner(items);plannerSelectedDate=date;closePlanner();renderPlanner();toast('Workout added to planner')
}
function togglePlannedDone(id){const items=loadPlanner(),item=items.find(x=>x.id===id);if(item){item.completed=!item.completed;savePlanner(items);renderPlanner();toast(item.completed?'Workout marked complete':'Workout reopened')}}
function deletePlannedWorkout(id){savePlanner(loadPlanner().filter(x=>x.id!==id));renderPlanner();toast('Planned workout deleted')}
function startPlannedWorkout(id){
  const item=loadPlanner().find(x=>x.id===id);if(!item)return;
  const m=plannerWorkoutMeta[item.type];
  if(m.screen==='run'){
    E.runTarget.value=String(item.duration*60);localStorage.setItem('touraysRunTarget',E.runTarget.value);
    if(item.type==='recovery'){E.wm.value=5;E.rm.value=1}else{E.wm.value=2;E.rm.value=3}E.ws.value=0;E.rs.value=0;show('run')
  }else{
    selectedPlan=m.plan;document.querySelectorAll('.plan-card').forEach(x=>x.classList.toggle('selected',x.dataset.plan===selectedPlan));E.indoorLevel.textContent=indoorPlans[selectedPlan].level;show('indoor')
  }
  toast(`${m.name} is ready`)
}
function plannerIcsDate(date,time){
  return `${date.replaceAll('-','')}T${time.replace(':','')}00`
}
function exportPlannerIcs(){
  const items=plannerWeekItems();if(!items.length)return toast('No planned workouts this week');
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Tourays Fitness//Workout Planner//EN','CALSCALE:GREGORIAN'];
  items.forEach(item=>{const m=plannerWorkoutMeta[item.type],start=plannerIcsDate(item.date,item.time),endDate=new Date(`${item.date}T${item.time}:00`);endDate.setMinutes(endDate.getMinutes()+Number(item.duration));const end=`${endDate.getFullYear()}${String(endDate.getMonth()+1).padStart(2,'0')}${String(endDate.getDate()).padStart(2,'0')}T${String(endDate.getHours()).padStart(2,'0')}${String(endDate.getMinutes()).padStart(2,'0')}00`;lines.push('BEGIN:VEVENT',`UID:${item.id}@touraysfitness`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z`,`DTSTART:${start}`,`DTEND:${end}`,`SUMMARY:${m.name}`,`DESCRIPTION:${(item.note||'Planned with Tourays Fitness').replace(/\n/g,' ')}`,'END:VEVENT')});
  lines.push('END:VCALENDAR');const blob=new Blob([lines.join('\r\n')],{type:'text/calendar'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='tourays-fitness-week.ics';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Calendar file exported')
}

const profileDefaults={name:'Tourays Athlete',age:'',level:'beginner',height:'',weight:'',goal:'balanced'};
function loadProfile(){
  try{return{...profileDefaults,...JSON.parse(localStorage.getItem('touraysProfile')||'{}')}}catch{return{...profileDefaults}}
}
function saveProfileData(profile){localStorage.setItem('touraysProfile',JSON.stringify(profile))}
function initials(name){
  const parts=String(name||'TF').trim().split(/\s+/).filter(Boolean);
  return(parts.slice(0,2).map(x=>x[0]).join('')||'TF').toUpperCase()
}
function profileXp(){
  const h=history(),d=goalData(),daily=getDailyChallenge(d),weekly=getWeeklyChallenges(d);
  return Math.round(h.reduce((a,x)=>a+(x.duration||0)/60+(x.calories||0)/10+(x.distance||0)/500,0)+weekly.filter(x=>x.done).reduce((a,x)=>a+x.xp,0)+(daily.value>=daily.target?daily.xp:0))
}
function profileCompletion(profile){
  const keys=['name','age','height','weight','goal','level'];
  return Math.round(keys.filter(k=>String(profile[k]??'').trim()).length/keys.length*100)
}
function renderProfile(){
  const p=loadProfile(),h=history(),duration=h.reduce((a,x)=>a+(x.duration||0),0),distance=h.reduce((a,x)=>a+(x.distance||0),0),xp=profileXp(),level=Math.floor(xp/100)+1,names=['Starter','Mover','Builder','Challenger','Athlete','Performer','Champion','Elite'],fitness=names[Math.min(names.length-1,level-1)],complete=profileCompletion(p);
  E.profileAvatar.textContent=initials(p.name);E.profileDisplayName.textContent=p.name||profileDefaults.name;E.profileSummary.textContent=complete>=100?`${p.level[0].toUpperCase()+p.level.slice(1)} profile · ${p.goal==='fatloss'?'Calorie burn':p.goal==='fitness'?'Endurance':p.goal==='recovery'?'Recovery':'General fitness'}`:'Complete your profile to improve calorie estimates, BMI and coaching recommendations.';
  E.profileCompletion.textContent=`${complete}% complete`;E.profileStatusChip.textContent='Local & private';
  E.profileWorkoutCount.textContent=h.length;E.profileActiveTime.textContent=duration>=3600?`${(duration/3600).toFixed(1)} h`:`${Math.round(duration/60)} min`;E.profileDistance.textContent=`${(distance/1000).toFixed(1)} km`;E.profileFitnessLevel.textContent=fitness;E.profileXpValue.textContent=`${xp} XP`;
  E.profileName.value=p.name||'';E.profileAge.value=p.age||'';E.profileTrainingLevel.value=p.level||'beginner';E.profileHeight.value=p.height||E.height.value||'';E.profileWeight.value=p.weight||E.weight.value||'';E.profileGoal.value=p.goal||'balanced';
  E.profileVoiceToggle.checked=localStorage.getItem('touraysVoice')!=='false';E.profileVibrationToggle.checked=localStorage.getItem('touraysVibration')!=='false';E.profileCountdownToggle.checked=localStorage.getItem('touraysWarmup')!=='false';E.profileWeeklyGoal.value=String(loadSmartGoals().minutes||150);
  const bytes=new Blob([JSON.stringify(localStorage)]).size;E.dataSizeLabel.textContent=bytes<1024?`${bytes} B stored`:`${(bytes/1024).toFixed(1)} KB stored`
}
function commitProfile(){
  const p={name:E.profileName.value.trim()||profileDefaults.name,age:E.profileAge.value,level:E.profileTrainingLevel.value,height:E.profileHeight.value,weight:E.profileWeight.value,goal:E.profileGoal.value};
  saveProfileData(p);
  if(p.height){E.height.value=p.height;localStorage.setItem('touraysHeight',p.height)}
  if(p.weight){E.weight.value=p.weight;localStorage.setItem('touraysWeight',p.weight)}
  localStorage.setItem('touraysCoachGoal',p.goal);
  renderProfile();renderHealth();renderCoach();toast('Profile saved')
}
function backupPayload(){
  const data={version:8,app:'Tourays Fitness',exportedAt:new Date().toISOString(),storage:{}};
  for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(key&&key.startsWith('tourays'))data.storage[key]=localStorage.getItem(key)}
  return data
}
function downloadJsonBackup(){
  const blob=new Blob([JSON.stringify(backupPayload(),null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=`tourays-fitness-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Backup downloaded')
}
async function restoreJsonBackup(file){
  try{
    const parsed=JSON.parse(await file.text());
    if(!parsed||parsed.app!=='Tourays Fitness'||typeof parsed.storage!=='object')throw new Error('Invalid backup');
    Object.entries(parsed.storage).forEach(([k,v])=>{if(k.startsWith('tourays'))localStorage.setItem(k,String(v))});
    location.reload()
  }catch{toast('Backup could not be restored')}
}
function resetTouraysData(){
  if(!confirm('Reset all Tourays Fitness workouts, goals and settings? This cannot be undone.'))return;
  const keys=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('tourays'))keys.push(k)}
  keys.forEach(k=>localStorage.removeItem(k));location.reload()
}

const defaultSmartGoals={minutes:150,workouts:4,distance:10,streak:3};
function loadSmartGoals(){try{return{...defaultSmartGoals,...JSON.parse(localStorage.getItem('touraysSmartGoals')||'{}')}}catch{return{...defaultSmartGoals}}}
function saveSmartGoals(g){localStorage.setItem('touraysSmartGoals',JSON.stringify(g))}
function goalWeekItems(){const m=new Date();m.setDate(m.getDate()-((m.getDay()+6)%7));m.setHours(0,0,0,0);return history().filter(x=>new Date(x.date)>=m)}
function goalData(){const items=goalWeekItems(),goals=loadSmartGoals();return{items,goals,minutes:items.reduce((a,x)=>a+(x.duration||0),0)/60,distance:items.reduce((a,x)=>a+(x.distance||0),0)/1000,workouts:items.length,streak:streakCount(history())}}
function getDailyChallenge(d){const today=new Date().toDateString(),todayItems=d.items.filter(x=>new Date(x.date).toDateString()===today),n=new Date().getDay(),list=[{icon:'⚡',name:'Complete 10 active minutes',desc:'Any indoor or outdoor workout counts.',target:10,value:todayItems.reduce((a,x)=>a+(x.duration||0),0)/60,unit:'minutes',xp:20},{icon:'🏃',name:'Complete one outdoor workout',desc:'A walk or run session completes this challenge.',target:1,value:todayItems.filter(x=>category(x)==='Outdoor').length,unit:'workout',xp:25},{icon:'💪',name:'Complete one indoor workout',desc:'Any indoor exercise or plan counts.',target:1,value:todayItems.filter(x=>category(x)!=='Outdoor').length,unit:'workout',xp:25},{icon:'🔥',name:'Burn 100 active calories',desc:'Combine any workouts until you reach the target.',target:100,value:todayItems.reduce((a,x)=>a+(x.calories||0),0),unit:'kcal',xp:30}];return list[n%list.length]}
function getWeeklyChallenges(d){return[{icon:'🎯',name:'Goal Builder',desc:'Complete 75% of your active-minute target.',done:d.minutes>=d.goals.minutes*.75,progress:`${Math.round(Math.min(100,d.minutes/(d.goals.minutes*.75)*100))}%`,xp:60},{icon:'⚖️',name:'Balanced Athlete',desc:'Complete one indoor and one outdoor workout.',done:d.items.some(x=>category(x)==='Outdoor')&&d.items.some(x=>category(x)!=='Outdoor'),progress:`${d.items.some(x=>category(x)==='Outdoor')?1:0}+${d.items.some(x=>category(x)!=='Outdoor')?1:0} types`,xp:50},{icon:'🔥',name:'Consistency Week',desc:'Reach your weekly streak target.',done:d.streak>=d.goals.streak,progress:`${d.streak}/${d.goals.streak} days`,xp:75},{icon:'🛣️',name:'Distance Explorer',desc:'Complete half of your distance goal.',done:d.distance>=d.goals.distance*.5,progress:`${d.distance.toFixed(1)}/${(d.goals.distance*.5).toFixed(1)} km`,xp:65}]}
function renderGoals(){const d=goalData(),g=d.goals,r={minutes:Math.min(1,d.minutes/g.minutes),workouts:Math.min(1,d.workouts/g.workouts),distance:Math.min(1,d.distance/g.distance),streak:Math.min(1,d.streak/g.streak)},overall=Math.round((r.minutes+r.workouts+r.distance+r.streak)/4*100);E.goalsOverallRing.style.strokeDashoffset=245.044*(1-overall/100);E.goalsOverallPercent.textContent=`${overall}%`;E.goalStatusChip.textContent=overall>=75?'On track':overall>=40?'Building':'Start today';E.goalStatusChip.classList.toggle('behind',overall<75);E.goalsHeroTitle.textContent=overall>=100?'Weekly goals complete!':overall>=75?'Finish the week strong':overall>=40?'Momentum is building':'Start your momentum';E.goalMinutesValue.textContent=`${Math.round(d.minutes)} / ${g.minutes}`;E.goalWorkoutsValue.textContent=`${d.workouts} / ${g.workouts}`;E.goalDistanceValue.textContent=`${d.distance.toFixed(1)} / ${g.distance} km`;E.goalStreakValue.textContent=`${d.streak} / ${g.streak} days`;E.goalMinutesBar.style.width=`${r.minutes*100}%`;E.goalWorkoutsBar.style.width=`${r.workouts*100}%`;E.goalDistanceBar.style.width=`${r.distance*100}%`;E.goalStreakBar.style.width=`${r.streak*100}%`;const daily=getDailyChallenge(d),done=daily.value>=daily.target;E.dailyChallengeIcon.textContent=daily.icon;E.dailyChallengeName.textContent=daily.name;E.dailyChallengeDescription.textContent=daily.desc;E.dailyChallengeReward.textContent=`+${daily.xp} XP`;E.dailyChallengeBar.style.width=`${Math.min(100,daily.value/daily.target*100)}%`;E.dailyChallengeProgress.textContent=`${Math.min(daily.target,Math.round(daily.value))} of ${daily.target} ${daily.unit}`;E.dailyChallengeState.textContent=done?'COMPLETE':'ACTIVE';E.dailyChallengeState.classList.toggle('done',done);const weekly=getWeeklyChallenges(d),completed=weekly.filter(x=>x.done).length;E.weeklyChallengeCount.textContent=`${completed} completed`;E.weeklyChallenges.innerHTML=weekly.map(x=>`<article class="weekly-challenge ${x.done?'complete':''}"><span>${x.icon}</span><div><strong>${x.name}</strong><small>${x.desc}</small></div><b>${x.done?'DONE':x.progress}</b></article>`).join('');const xp=Math.round(history().reduce((a,x)=>a+(x.duration||0)/60+(x.calories||0)/10+(x.distance||0)/500,0)+weekly.filter(x=>x.done).reduce((a,x)=>a+x.xp,0)+(done?daily.xp:0)),level=Math.floor(xp/100)+1,names=['Starter','Mover','Builder','Challenger','Athlete','Performer','Champion','Elite'];E.fitnessLevelName.textContent=names[Math.min(names.length-1,level-1)];E.fitnessLevelNumber.textContent=`Level ${level}`;E.xpProgressBar.style.width=`${xp%100}%`;E.xpCurrent.textContent=`${xp} XP`;E.xpNext.textContent=`${100-xp%100} XP to next level`;E.builderMinutes.textContent=g.minutes;E.builderWorkouts.textContent=g.workouts;E.builderDistance.textContent=`${g.distance} km`;E.builderStreak.textContent=g.streak}
function adjustSmartGoal(key,dir){const g=loadSmartGoals(),step={minutes:15,workouts:1,distance:1,streak:1},min={minutes:30,workouts:1,distance:1,streak:1},max={minutes:600,workouts:14,distance:100,streak:7};g[key]=Math.max(min[key],Math.min(max[key],g[key]+step[key]*(dir==='+'?1:-1)));saveSmartGoals(g);if(key==='minutes'){E.weeklyGoal.value=g.minutes;localStorage.setItem('touraysWeeklyGoal',g.minutes)}renderGoals();renderHealth();renderHome()}

const coachPlans={
 walkrun:{name:'Balanced Walk & Run',icon:'🏃',duration:30,intensity:'Moderate',type:'Outdoor',calories:240,screen:'run'},
 recovery:{name:'Recovery Walk',icon:'🚶',duration:20,intensity:'Easy',type:'Outdoor',calories:120,screen:'run'},
 quick:{name:'Quick Start',icon:'⚡',duration:5,intensity:'Easy',type:'Indoor',calories:55,screen:'indoor',plan:'quick'},
 core:{name:'Core Builder',icon:'🎯',duration:8,intensity:'Moderate',type:'Indoor',calories:85,screen:'indoor',plan:'core'},
 full:{name:'Full Body',icon:'🔥',duration:12,intensity:'Challenging',type:'Indoor',calories:145,screen:'indoor',plan:'full'}
};
let activeCoachPlan='walkrun';
function coachData(){const h=history(),now=Date.now(),day=86400000,last7=h.filter(x=>now-new Date(x.date)<=7*day),last3=h.filter(x=>now-new Date(x.date)<=3*day),mins=last7.reduce((a,x)=>a+(x.duration||0),0)/60,recent=last3.reduce((a,x)=>a+(x.duration||0),0)/60,goal=Math.max(1,clamp(E.weeklyGoal.value,30,1000)||150),outdoor=last7.filter(x=>category(x)==='Outdoor').length,indoor=last7.length-outdoor,hours=h.length?(now-new Date(h[0].date))/3600000:999,readiness=Math.max(25,Math.min(100,Math.round(86-recent*.38+(hours>36?8:0)-(hours<12?18:0))));return{h,last7,mins,recent,goal,pct:Math.min(100,Math.round(mins/goal*100)),outdoor,indoor,hours,readiness,streak:streakCount(h)}}
function chooseCoach(d,g){if(g==='recovery')return d.hours<24||d.recent>80?'recovery':'quick';if(g==='fatloss')return d.readiness>=70?'full':'walkrun';if(g==='fitness')return d.readiness>=72?'walkrun':'core';if(d.readiness<50)return'recovery';if(!d.last7.length)return'quick';if(d.outdoor>d.indoor+1)return'core';if(d.indoor>d.outdoor+1)return'walkrun';return d.readiness>=78?'full':'walkrun'}
function renderCoach(){const d=coachData(),g=localStorage.getItem('touraysCoachGoal')||'balanced';activeCoachPlan=chooseCoach(d,g);const p=coachPlans[activeCoachPlan],load=d.mins>180?'High':d.mins>70?'Balanced':'Light',recovery=d.hours<12?'Low':d.hours<28?'Moderate':'Good';E.coachReadiness.textContent=d.readiness;E.coachChip.textContent=d.readiness<50?'Recover':d.readiness<75?'Steady':'Ready';E.coachChip.classList.toggle('low',d.readiness<50);E.coachLoad.textContent=load;E.coachLoadNote.textContent=`${Math.round(d.mins)} active min`;E.coachRecovery.textContent=recovery;E.coachRecoveryNote.textContent=d.hours>900?'No recent workout':`${Math.round(d.hours)} h since last`;E.coachGoal.textContent=`${d.pct}%`;E.coachGoalNote.textContent=`${Math.max(0,Math.round(d.goal-d.mins))} min remaining`;E.coachHeadline.textContent=d.readiness<50?'Recovery is the smart move':d.pct>=100?'Maintain momentum':'Your next workout is ready';E.coachMessage.textContent=d.h.length?'Your plan uses recent activity, recovery time, workout balance and weekly progress.':'Start with one guided session. Recommendations become more personal as you train.';E.coachHeroIcon.textContent=d.readiness<50?'🌿':'🧠';E.coachPlanName.textContent=p.name;E.coachPlanBadge.textContent=`${p.duration} min`;E.coachPlanIcon.textContent=p.icon;E.coachPlanReason.textContent=activeCoachPlan==='recovery'?'A lighter session supports recovery while keeping you active.':activeCoachPlan==='core'?'Your recent activity would benefit from more core strength and stability.':activeCoachPlan==='full'?'Your readiness supports a compact, higher-effort full-body session.':'A balanced session will build fitness without excessive load.';E.coachPlanIntensity.textContent=p.intensity;E.coachPlanType.textContent=p.type;E.coachPlanCalories.textContent=`≈ ${p.calories} kcal`;const insights=[['📊','Weekly load',`${Math.round(d.mins)} active minutes across ${d.last7.length} workout${d.last7.length===1?'':'s'}.`],['⚖️','Training balance',d.outdoor===d.indoor?'Indoor and outdoor activity are balanced.':d.outdoor>d.indoor?'You have trained outdoors more often recently.':'You have trained indoors more often recently.'],['🔥','Consistency',d.streak?`You are on a ${d.streak}-day streak.`:'A workout today can restart your streak.'],['🎯','Weekly goal',d.pct>=100?'Your weekly goal is complete.':`${d.pct}% complete with ${Math.max(0,Math.round(d.goal-d.mins))} minutes remaining.`]];E.coachInsights.innerHTML=insights.map(x=>`<article class="coach-insight"><span>${x[0]}</span><div><strong>${x[1]}</strong><p>${x[2]}</p></div></article>`).join('');const alts=Object.keys(coachPlans).filter(k=>k!==activeCoachPlan).slice(0,3);E.coachAlternatives.innerHTML=alts.map(k=>{const a=coachPlans[k];return`<button class="coach-alt" data-coach="${k}"><span>${a.icon}</span><div><strong>${a.name}</strong><small>${a.duration} min · ${a.intensity} · ${a.type}</small></div><b>›</b></button>`}).join('');document.querySelectorAll('[data-coach]').forEach(b=>b.onclick=()=>{activeCoachPlan=b.dataset.coach;startCoachRecommendation()});document.querySelectorAll('[data-goal]').forEach(b=>b.classList.toggle('selected',b.dataset.goal===g))}
function startCoachRecommendation(){const p=coachPlans[activeCoachPlan];if(p.screen==='run'){E.runTarget.value=String(p.duration*60);localStorage.setItem('touraysRunTarget',E.runTarget.value);if(activeCoachPlan==='recovery'){E.wm.value=5;E.rm.value=1}else{E.wm.value=2;E.rm.value=3}E.ws.value=0;E.rs.value=0;show('run');toast(`${p.name} is ready`)}else{selectedPlan=p.plan;document.querySelectorAll('.plan-card').forEach(x=>x.classList.toggle('selected',x.dataset.plan===selectedPlan));E.indoorLevel.textContent=indoorPlans[selectedPlan].level;show('indoor');toast(`${p.name} is selected`)}}

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


function healthDays(){const v=E.healthRange.value;return v==='all'?Infinity:Number(v)}
function rangeItems(items,days,offset=0){
  if(!Number.isFinite(days))return offset?[]:items;
  const end=new Date();end.setHours(23,59,59,999);end.setDate(end.getDate()-offset*days);
  const start=new Date(end);start.setDate(end.getDate()-days+1);start.setHours(0,0,0,0);
  return items.filter(x=>{const d=new Date(x.date);return d>=start&&d<=end})
}
function healthStats(items){
  const duration=items.reduce((a,x)=>a+(x.duration||0),0),distance=items.reduce((a,x)=>a+(x.distance||0),0),calories=items.reduce((a,x)=>a+(x.calories||0),0);
  const outdoor=items.filter(x=>(x.distance||0)>20),outTime=outdoor.reduce((a,x)=>a+(x.duration||0),0),outDist=outdoor.reduce((a,x)=>a+(x.distance||0),0);
  return{duration,minutes:duration/60,distance,calories,count:items.length,outTime,outDist}
}
function changeText(now,before,invert=false){
  if(!now&&!before)return'No activity yet';if(!before)return now?'New activity':'No comparison';
  let p=(now-before)/before*100;if(invert)p=-p;
  return Math.abs(p)<1?'About the same':`${p>0?'↑':'↓'} ${Math.abs(Math.round(p))}% vs previous`
}
function paceLabel(sec){if(!sec||!Number.isFinite(sec))return'--';return`${Math.floor(sec/60)}:${String(Math.round(sec%60)).padStart(2,'0')}/km`}
function drawActivity(items,days){
  const c=E.activityChart,x=c.getContext('2d'),ratio=Math.max(1,devicePixelRatio||1),box=c.getBoundingClientRect(),w=Math.max(300,box.width),h=185;
  c.width=w*ratio;c.height=h*ratio;x.setTransform(ratio,0,0,ratio,0,0);x.clearRect(0,0,w,h);
  const count=days<=7?7:14,span=Number.isFinite(days)?days:28,bucket=Math.max(1,Math.ceil(span/count)),end=new Date(),data=[];
  end.setHours(23,59,59,999);
  for(let i=count-1;i>=0;i--){const e=new Date(end);e.setDate(end.getDate()-i*bucket);const s=new Date(e);s.setDate(e.getDate()-bucket+1);s.setHours(0,0,0,0);data.push({label:e.toLocaleDateString([],{month:'short',day:'numeric'}),value:items.filter(v=>{const d=new Date(v.date);return d>=s&&d<=e}).reduce((a,v)=>a+(v.duration||0),0)/60})}
  const max=Math.max(10,...data.map(v=>v.value)),pad={l:18,r:8,t:12,b:25},step=(w-pad.l-pad.r)/(data.length-1);
  E.activityChartEmpty.style.display=data.some(v=>v.value>0)?'none':'grid';
  x.strokeStyle='rgba(255,255,255,.07)';for(let i=0;i<4;i++){const y=pad.t+(h-pad.t-pad.b)*i/3;x.beginPath();x.moveTo(pad.l,y);x.lineTo(w-pad.r,y);x.stroke()}
  const pts=data.map((v,i)=>({x:pad.l+i*step,y:pad.t+(h-pad.t-pad.b)*(1-v.value/max),...v}));
  const g=x.createLinearGradient(0,pad.t,0,h-pad.b);g.addColorStop(0,'rgba(141,124,255,.32)');g.addColorStop(1,'rgba(141,124,255,0)');
  x.beginPath();pts.forEach((p,i)=>i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y));x.lineTo(pts.at(-1).x,h-pad.b);x.lineTo(pts[0].x,h-pad.b);x.closePath();x.fillStyle=g;x.fill();
  x.beginPath();pts.forEach((p,i)=>i?x.lineTo(p.x,p.y):x.moveTo(p.x,p.y));x.strokeStyle='#9c8cff';x.lineWidth=2.4;x.stroke();
  x.fillStyle='rgba(205,214,226,.55)';x.font='9px system-ui';x.textAlign='center';data.forEach((v,i)=>{if(i%3===0||i===data.length-1)x.fillText(v.label,pts[i].x,h-7)});
  const total=Math.round(data.reduce((a,v)=>a+v.value,0));E.chartTotal.textContent=`${total} min total`;E.chartAverage.textContent=`${Math.round(total/data.length)} min average`
}
function category(x){return x.type==='Walk & Run'||(x.distance||0)>20?'Outdoor':['Quick Start','Core Builder','Full Body'].includes(x.type)?'Plans':'Indoor'}
function drawMix(items){
  const groups={Outdoor:0,Plans:0,Indoor:0},colors=['#8d7cff','#42d5a1','#51a8ff'];items.forEach(v=>groups[category(v)]++);
  const values=Object.values(groups),total=values.reduce((a,b)=>a+b,0),c=E.mixChart,x=c.getContext('2d'),ratio=Math.max(1,devicePixelRatio||1);c.width=150*ratio;c.height=150*ratio;x.setTransform(ratio,0,0,ratio,0,0);x.clearRect(0,0,150,150);
  let a=-Math.PI/2;if(!total){x.beginPath();x.arc(75,75,55,0,Math.PI*2);x.strokeStyle='rgba(255,255,255,.08)';x.lineWidth=16;x.stroke()}else values.forEach((v,i)=>{if(!v)return;const n=a+Math.PI*2*v/total;x.beginPath();x.arc(75,75,55,a+.03,n-.03);x.strokeStyle=colors[i];x.lineWidth=16;x.lineCap='round';x.stroke();a=n});
  E.mixCenterValue.textContent=total;E.mixTotal.textContent=`${total} workout${total===1?'':'s'}`;E.mixList.innerHTML=Object.keys(groups).map((n,i)=>`<div class="mix-row" style="--mix-color:${colors[i]}"><i></i><span>${n}</span><strong>${groups[n]}</strong></div>`).join('')
}
function renderBests(items){
  const outdoor=items.filter(x=>(x.distance||0)>20),longest=items.reduce((b,x)=>(x.duration||0)>(b.duration||0)?x:b,{}),farthest=outdoor.reduce((b,x)=>(x.distance||0)>(b.distance||0)?x:b,{});
  const fastest=outdoor.filter(x=>(x.distance||0)>=500).reduce((b,x)=>{const p=(x.duration||0)/(x.distance/1000);return p<(b.p||Infinity)?{...x,p}:b},{}),cal=items.reduce((b,x)=>(x.calories||0)>(b.calories||0)?x:b,{});
  const list=[['⏱️','LONGEST WORKOUT',longest.duration?fmt(longest.duration):'--',longest.date],['🛣️','FARTHEST DISTANCE',farthest.distance?km(farthest.distance):'--',farthest.date],['⚡','FASTEST PACE',fastest.p?paceLabel(fastest.p):'--',fastest.date],['🔥','MOST CALORIES',cal.calories?`${cal.calories} kcal`:'--',cal.date]];
  E.personalBestCount.textContent=`${list.filter(v=>v[2]!=='--').length} records`;E.personalBestGrid.innerHTML=list.map(v=>`<article class="personal-best"><span>${v[0]}</span><small>${v[1]}</small><strong>${v[2]}</strong><em>${v[3]?new Date(v[3]).toLocaleDateString():'No record yet'}</em></article>`).join('')
}
function renderHistory(items){
  const q=E.historySearch.value.trim().toLowerCase(),f=E.historyFilter.value;
  const list=items.map((x,i)=>({...x,_i:i})).filter(x=>{const out=category(x)==='Outdoor';return(!q||String(x.type||'Workout').toLowerCase().includes(q))&&(f==='all'||(f==='outdoor'&&out)||(f==='indoor'&&!out))});
  E.historyList.innerHTML=list.length?list.slice(0,40).map(x=>`<article class="history-item"><button class="history-detail-button" data-detail="${x._i}">›</button><button class="history-delete" data-del="${x._i}">✕</button><div class="history-head"><strong>${x.type||'Workout'}</strong><small>${new Date(x.date).toLocaleDateString()} · ${new Date(x.date).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</small><span class="history-type-chip">${category(x)}</span></div><div class="history-values"><div><span>TIME</span><strong>${fmt(x.duration||0)}</strong></div><div><span>DISTANCE</span><strong>${km(x.distance||0)}</strong></div><div><span>CALORIES</span><strong>${x.calories||0}</strong></div></div>${x.sets||x.cycles?`<div class="history-extra">${x.sets?`<span>${x.sets} sets</span>`:''}${x.cycles?`<span>${x.cycles} reps / cycles</span>`:''}</div>`:''}</article>`).join(''):'<div class="empty">No matching workouts.</div>';
  document.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>openActivityDetail(Number(b.dataset.detail)));document.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{const h=history();h.splice(Number(b.dataset.del),1);saveHistory(h);renderHealth();toast('Workout deleted')})
}
function exportWorkoutHistory(){
  const h=history();if(!h.length)return toast('No workouts to export');
  const rows=[['Date','Workout','Duration seconds','Distance metres','Calories','Cycles','Sets'],...h.map(x=>[x.date,x.type||'Workout',x.duration||0,Math.round(x.distance||0),x.calories||0,x.cycles||0,x.sets||''])];
  const csv=rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n'),blob=new Blob([csv],{type:'text/csv'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`tourays-fitness-${new Date().toISOString().slice(0,10)}.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('History exported')
}
function renderHealth(){
  const all=history(),days=healthDays(),current=rangeItems(all,days),previous=rangeItems(all,days,1),s=healthStats(current),p=healthStats(previous);
  const monday=new Date();monday.setDate(monday.getDate()-((monday.getDay()+6)%7));monday.setHours(0,0,0,0);const week=all.filter(x=>new Date(x.date)>=monday),mins=Math.round(week.reduce((a,x)=>a+(x.duration||0),0)/60),goal=Math.max(1,clamp(E.weeklyGoal.value,30,1000)||150),pct=Math.min(100,Math.round(mins/goal*100));
  E.weeklyMinutes.textContent=`${mins} active min`;E.weeklyMessage.textContent=mins>=goal?'Weekly goal complete':`${goal-mins} min remaining`;E.goalProgress.style.strokeDashoffset=201*(1-pct/100);E.goalPercent.textContent=`${pct}%`;
  const delta=p.minutes?(s.minutes-p.minutes)/p.minutes*100:0;E.healthTrendBadge.textContent=!Number.isFinite(days)?'All-time overview':p.minutes||s.minutes?`${delta>=0?'↑':'↓'} ${Math.abs(Math.round(delta))}% active time`:'No comparison yet';E.healthTrendBadge.classList.toggle('negative',delta<0);E.healthStreakPro.textContent=`${streakCount(all)}-day streak`;
  E.healthActiveTime.textContent=`${Math.round(s.minutes)} min`;E.healthWorkoutCount.textContent=s.count;E.healthCalories.textContent=`${s.calories} kcal`;E.healthDistance.textContent=km(s.distance);
  E.healthActiveTrend.textContent=changeText(s.minutes,p.minutes);E.healthWorkoutTrend.textContent=changeText(s.count,p.count);E.healthCaloriesTrend.textContent=changeText(s.calories,p.calories);E.healthDistanceTrend.textContent=changeText(s.distance,p.distance);
  const pace=s.outDist>20?s.outTime/(s.outDist/1000):0,prevPace=p.outDist>20?p.outTime/(p.outDist/1000):0;E.healthPace.textContent=paceLabel(pace);E.healthPaceTrend.textContent=pace&&prevPace?changeText(pace,prevPace,true):'Outdoor workouts';
  const w=clamp(E.weight.value,30,250)||75,h=(clamp(E.height.value,120,230)||0)/100,bmi=h?w/(h*h):0;E.healthBmi.textContent=bmi?bmi.toFixed(1):'--';E.bmiLabel.textContent=!bmi?'Add height in settings':bmi<18.5?'Below standard range':bmi<25?'Standard range':bmi<30?'Above standard range':'High range';
  drawActivity(current,Number.isFinite(days)?days:28);drawMix(current);renderBests(all);updateAchievements(all);renderHistory(all)
}

document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>show(b.dataset.screen));document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));document.querySelectorAll('.preset').forEach(b=>b.onclick=()=>{setTime(+b.dataset.w,E.wm,E.ws);setTime(+b.dataset.r,E.rm,E.rs);document.querySelectorAll('.preset').forEach(x=>x.classList.toggle('selected',x===b))});
E.performanceRange.onchange=renderPerformance;E.exportPerformanceCsv.onclick=exportPerformanceAnalytics;E.exportPerformanceReport.onclick=exportPerformanceHtml;
E.closeActivityDetail.onclick=closeActivityDetails;E.activityDetailModal.onclick=e=>{if(e.target===E.activityDetailModal)closeActivityDetails()};
E.saveActivityNote.onclick=saveActivityDetailNote;E.shareActivity.onclick=shareCurrentActivity;E.repeatActivity.onclick=repeatCurrentActivity;E.deleteActivityDetail.onclick=deleteCurrentActivity;
document.querySelectorAll('[data-feeling]').forEach(b=>b.onclick=()=>{activityDetailFeeling=b.dataset.feeling;document.querySelectorAll('[data-feeling]').forEach(x=>x.classList.toggle('selected',x===b))});
E.plannerToday.onclick=()=>{plannerWeekOffset=0;plannerSelectedDate=isoDate(new Date());renderPlanner()};
E.plannerPrevWeek.onclick=()=>{plannerWeekOffset--;plannerSelectedDate=isoDate(plannerWeekStart());renderPlanner()};
E.plannerNextWeek.onclick=()=>{plannerWeekOffset++;plannerSelectedDate=isoDate(plannerWeekStart());renderPlanner()};
E.addPlannedWorkout.onclick=openPlannerModal;E.closePlannerModal.onclick=closePlanner;E.savePlannedWorkout.onclick=savePlannerWorkout;E.exportPlannerCalendar.onclick=exportPlannerIcs;
E.plannerModal.onclick=e=>{if(e.target===E.plannerModal)closePlanner()};
E.saveProfile.onclick=commitProfile;E.editProfileButton.onclick=()=>E.profileName.focus();
E.profileVoiceToggle.onchange=()=>localStorage.setItem('touraysVoice',E.profileVoiceToggle.checked);
E.profileVibrationToggle.onchange=()=>{localStorage.setItem('touraysVibration',E.profileVibrationToggle.checked);E.vibrationToggle.checked=E.profileVibrationToggle.checked};
E.profileCountdownToggle.onchange=()=>{localStorage.setItem('touraysWarmup',E.profileCountdownToggle.checked);E.warmupToggle.checked=E.profileCountdownToggle.checked};
E.profileWeeklyGoal.onchange=()=>{const g=loadSmartGoals();g.minutes=Number(E.profileWeeklyGoal.value);saveSmartGoals(g);E.weeklyGoal.value=g.minutes;localStorage.setItem('touraysWeeklyGoal',g.minutes);renderGoals();renderHealth();renderHome()};
E.downloadBackup.onclick=downloadJsonBackup;E.restoreBackup.onclick=()=>E.backupFileInput.click();E.backupFileInput.onchange=()=>{const f=E.backupFileInput.files?.[0];if(f)restoreJsonBackup(f)};E.downloadCsv.onclick=exportWorkoutHistory;E.clearAppData.onclick=resetTouraysData;
document.querySelectorAll('[data-goal-step]').forEach(b=>b.onclick=()=>adjustSmartGoal(b.dataset.goalStep,b.dataset.dir));
E.resetSmartGoals.onclick=()=>{saveSmartGoals(defaultSmartGoals);E.weeklyGoal.value=defaultSmartGoals.minutes;localStorage.setItem('touraysWeeklyGoal',defaultSmartGoals.minutes);renderGoals();renderHealth();renderHome();toast('Smart goals restored')};
E.startGoalWorkout.onclick=()=>show('coach');
E.startCoachPlan.onclick=startCoachRecommendation;E.refreshCoach.onclick=()=>{renderCoach();toast('Recommendation refreshed')};
document.querySelectorAll('[data-goal]').forEach(b=>b.onclick=()=>{localStorage.setItem('touraysCoachGoal',b.dataset.goal);renderCoach()});
E.healthRange.value=localStorage.getItem('touraysHealthRange')||'28';
E.healthRange.onchange=()=>{localStorage.setItem('touraysHealthRange',E.healthRange.value);renderHealth()};
E.historySearch.oninput=()=>renderHistory(history());E.historyFilter.onchange=()=>renderHistory(history());E.exportHistory.onclick=exportWorkoutHistory;
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
ensureWorkoutIds();renderExerciseGrid();renderExercise();startGps();renderHealth();renderPerformance();renderHome();renderPlanner();renderGoals();renderProfile();renderCoach();updateAchievements();
