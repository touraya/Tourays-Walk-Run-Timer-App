const elements = {
  setupView: document.getElementById("setupView"),
  timerView: document.getElementById("timerView"),
  walkMinutes: document.getElementById("walkMinutes"),
  runMinutes: document.getElementById("runMinutes"),
  startButton: document.getElementById("startButton"),
  pauseButton: document.getElementById("pauseButton"),
  stopButton: document.getElementById("stopButton"),
  soundButton: document.getElementById("soundButton"),
  soundIcon: document.getElementById("soundIcon"),
  phaseCard: document.getElementById("phaseCard"),
  phaseInstruction: document.getElementById("phaseInstruction"),
  countdown: document.getElementById("countdown"),
  progressBar: document.getElementById("progressBar"),
  roundLabel: document.getElementById("roundLabel"),
  nextLabel: document.getElementById("nextLabel"),
  elapsedTime: document.getElementById("elapsedTime"),
  cycleCount: document.getElementById("cycleCount"),
  statusText: document.getElementById("statusText"),
  walkIllustration: document.getElementById("walkIllustration"),
  runIllustration: document.getElementById("runIllustration"),
  announcement: document.getElementById("announcement")
};

const state = {
  walkSeconds: 120,
  runSeconds: 180,
  phase: "walk",
  phaseDuration: 120,
  remaining: 120,
  elapsed: 0,
  cycles: 0,
  round: 1,
  running: false,
  paused: false,
  soundEnabled: true,
  timerId: null,
  expectedEnd: null,
  lastElapsedUpdate: null,
  audioContext: null,
  wakeLock: null
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || min));
}

function formatTime(totalSeconds) {
  const seconds = Math.max(0, Math.ceil(totalSeconds));
  const minutesPart = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secondsPart = (seconds % 60).toString().padStart(2, "0");
  return `${minutesPart}:${secondsPart}`;
}

function showView(view) {
  elements.setupView.classList.toggle("active", view === "setup");
  elements.timerView.classList.toggle("active", view === "timer");
}

function selectPresetButton(walk, run) {
  document.querySelectorAll(".quick-presets button").forEach(button => {
    const selected = Number(button.dataset.walk) === walk && Number(button.dataset.run) === run;
    button.classList.toggle("selected", selected);
  });
}

function announce(message) {
  elements.announcement.textContent = message;
  elements.announcement.classList.add("show");

  window.clearTimeout(announce.hideTimer);
  announce.hideTimer = window.setTimeout(() => {
    elements.announcement.classList.remove("show");
  }, 2400);

  if (!state.soundEnabled) return;

  playAlert();

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }

  if ("vibrate" in navigator) {
    navigator.vibrate([180, 90, 180]);
  }
}

function playAlert() {
  try {
    if (!state.audioContext) {
      state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const now = state.audioContext.currentTime;
    [0, 0.18].forEach((offset, index) => {
      const oscillator = state.audioContext.createOscillator();
      const gain = state.audioContext.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(index === 0 ? 780 : 980, now + offset);
      gain.gain.setValueAtTime(0.0001, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.22, now + offset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.14);

      oscillator.connect(gain);
      gain.connect(state.audioContext.destination);
      oscillator.start(now + offset);
      oscillator.stop(now + offset + 0.15);
    });
  } catch (error) {
    console.warn("Audio alert unavailable:", error);
  }
}

async function requestWakeLock() {
  if (!("wakeLock" in navigator)) return;

  try {
    state.wakeLock = await navigator.wakeLock.request("screen");
  } catch (error) {
    console.warn("Wake lock unavailable:", error);
  }
}

async function releaseWakeLock() {
  if (!state.wakeLock) return;

  try {
    await state.wakeLock.release();
  } catch (error) {
    console.warn("Could not release wake lock:", error);
  } finally {
    state.wakeLock = null;
  }
}

function updatePhaseUI() {
  const walking = state.phase === "walk";
  const nextDuration = walking ? state.runSeconds : state.walkSeconds;

  elements.phaseCard.classList.toggle("walking", walking);
  elements.phaseCard.classList.toggle("running", !walking);
  elements.walkIllustration.classList.toggle("hidden", !walking);
  elements.runIllustration.classList.toggle("hidden", walking);

  elements.phaseInstruction.textContent = walking ? "KEEP WALKING" : "KEEP RUNNING";
  elements.nextLabel.textContent = walking
    ? `Next: Run ${formatTime(nextDuration)}`
    : `Next: Walk ${formatTime(nextDuration)}`;
  elements.roundLabel.textContent = `ROUND ${state.round}`;
}

function renderTimer() {
  elements.countdown.textContent = formatTime(state.remaining);
  elements.elapsedTime.textContent = formatTime(state.elapsed);
  elements.cycleCount.textContent = state.cycles.toString();
  elements.statusText.textContent = state.paused ? "Paused" : "Active";

  const progress = state.phaseDuration > 0
    ? Math.max(0, Math.min(100, (state.remaining / state.phaseDuration) * 100))
    : 0;

  elements.progressBar.style.width = `${progress}%`;
  document.title = `${formatTime(state.remaining)} · ${state.phase === "walk" ? "Walk" : "Run"}`;
}

function switchPhase() {
  if (state.phase === "walk") {
    state.phase = "run";
    state.phaseDuration = state.runSeconds;
    state.remaining = state.runSeconds;
    announce("Start running");
  } else {
    state.phase = "walk";
    state.phaseDuration = state.walkSeconds;
    state.remaining = state.walkSeconds;
    state.cycles += 1;
    state.round += 1;
    announce("Start walking");
  }

  state.expectedEnd = Date.now() + state.remaining * 1000;
  state.lastElapsedUpdate = Date.now();
  updatePhaseUI();
  renderTimer();
}

function tick() {
  if (!state.running || state.paused) return;

  const now = Date.now();
  const delta = Math.max(0, (now - state.lastElapsedUpdate) / 1000);
  state.elapsed += delta;
  state.lastElapsedUpdate = now;
  state.remaining = Math.max(0, (state.expectedEnd - now) / 1000);

  if (state.remaining <= 0.02) {
    switchPhase();
    return;
  }

  renderTimer();
}

function startWorkout() {
  const walkMinutes = clamp(elements.walkMinutes.value, 1, 99);
  const runMinutes = clamp(elements.runMinutes.value, 1, 99);

  elements.walkMinutes.value = walkMinutes;
  elements.runMinutes.value = runMinutes;

  state.walkSeconds = walkMinutes * 60;
  state.runSeconds = runMinutes * 60;
  state.phase = "walk";
  state.phaseDuration = state.walkSeconds;
  state.remaining = state.walkSeconds;
  state.elapsed = 0;
  state.cycles = 0;
  state.round = 1;
  state.running = true;
  state.paused = false;
  state.expectedEnd = Date.now() + state.remaining * 1000;
  state.lastElapsedUpdate = Date.now();

  showView("timer");
  updatePhaseUI();
  renderTimer();
  requestWakeLock();
  announce("Start walking");

  window.clearInterval(state.timerId);
  state.timerId = window.setInterval(tick, 200);
}

function togglePause() {
  if (!state.running) return;

  state.paused = !state.paused;

  if (state.paused) {
    state.remaining = Math.max(0, (state.expectedEnd - Date.now()) / 1000);
    elements.pauseButton.textContent = "▶ Resume";
    announce("Workout paused");
  } else {
    state.expectedEnd = Date.now() + state.remaining * 1000;
    state.lastElapsedUpdate = Date.now();
    elements.pauseButton.textContent = "Ⅱ Pause";
    announce(state.phase === "walk" ? "Continue walking" : "Continue running");
  }

  renderTimer();
}

function stopWorkout() {
  state.running = false;
  state.paused = false;
  window.clearInterval(state.timerId);
  window.speechSynthesis?.cancel();
  releaseWakeLock();

  elements.pauseButton.textContent = "Ⅱ Pause";
  document.title = "Walk & Run Timer";
  showView("setup");
}

document.querySelectorAll(".adjust-button").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    input.value = clamp(Number(input.value) + Number(button.dataset.change), 1, 99);
    selectPresetButton(
      Number(elements.walkMinutes.value),
      Number(elements.runMinutes.value)
    );
  });
});

document.querySelectorAll(".quick-presets button").forEach(button => {
  button.addEventListener("click", () => {
    elements.walkMinutes.value = button.dataset.walk;
    elements.runMinutes.value = button.dataset.run;
    selectPresetButton(Number(button.dataset.walk), Number(button.dataset.run));
  });
});

[elements.walkMinutes, elements.runMinutes].forEach(input => {
  input.addEventListener("change", () => {
    input.value = clamp(input.value, 1, 99);
    selectPresetButton(
      Number(elements.walkMinutes.value),
      Number(elements.runMinutes.value)
    );
  });
});

elements.startButton.addEventListener("click", startWorkout);
elements.pauseButton.addEventListener("click", togglePause);
elements.stopButton.addEventListener("click", stopWorkout);

elements.soundButton.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  elements.soundIcon.textContent = state.soundEnabled ? "🔊" : "🔇";
  elements.soundButton.setAttribute(
    "aria-label",
    state.soundEnabled ? "Turn sound off" : "Turn sound on"
  );
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && state.running && !state.paused) {
    state.remaining = Math.max(0, (state.expectedEnd - Date.now()) / 1000);
    state.lastElapsedUpdate = Date.now();

    if (state.remaining <= 0.02) {
      switchPhase();
    } else {
      renderTimer();
    }

    requestWakeLock();
  }
});

window.addEventListener("beforeunload", releaseWakeLock);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(error => {
      console.warn("Service worker registration failed:", error);
    });
  });
}
