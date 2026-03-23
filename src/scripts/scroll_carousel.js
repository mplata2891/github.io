// src/scripts/scroll_carousel.js

// ==========================================
// 1. MAIN EXPORT (System Orchestrator)
// ==========================================
export function initSysCarousel(container) {
  const dom = mapDomElements(container);
  if (!dom.track) return;

  const state = initializeState();
  
  bindEventListeners(state, dom);
  runBootSequence(state, dom);
}

// ==========================================
// 2. INITIALIZATION HELPERS
// ==========================================
function mapDomElements(container) {
  return {
    track: container.querySelector('.carousel-track'),
    prevBtns: container.querySelectorAll('.prev-btn'),
    nextBtns: container.querySelectorAll('.next-btn'),
    toggleBtn: container.querySelector('.toggle-btn'),
    btnText: container.querySelector('.btn-text'),
    statusDot: container.querySelector('.status-dot'),
    navButtons: container.querySelector('.nav-buttons')
  };
}

function initializeState() {
  const isDesktop = window.matchMedia('(min-width: 640px)').matches;
  return {
    isAuto: isDesktop,
    autoScrollInterval: null,
    isTransitioning: false
  };
}

function bindEventListeners(state, dom) {
  dom.toggleBtn?.addEventListener('click', () => toggleUX(state, dom));
  
  dom.prevBtns.forEach(btn => {
    btn.addEventListener('click', () => scrollPrev(state, dom));
  });
  
  dom.nextBtns.forEach(btn => {
    btn.addEventListener('click', () => scrollNext(state, dom));
  });
}

function runBootSequence(state, dom) {
  if (state.isAuto) {
    startAuto(state, dom);
  } else {
    dom.navButtons?.classList.add('nav-active');
  }
}

// ==========================================
// 3. RUNTIME LOGIC HELPERS
// ==========================================
function toggleUX(state, dom) {
  state.isAuto = !state.isAuto;
  
  if (state.isAuto) {
    startAuto(state, dom);
    dom.btnText.textContent = '[ SYS_STATUS: AUTO_SCROLL ]';
    dom.toggleBtn.classList.replace('text-text-primary', 'text-accent');
    dom.toggleBtn.classList.replace('border-industrial', 'border-accent/30');
    dom.statusDot.classList.replace('bg-text-primary', 'bg-accent');
    dom.statusDot.classList.add('animate-pulse');
    dom.navButtons?.classList.remove('nav-active');
  } else {
    stopAuto(state);
    dom.btnText.textContent = '[ MANUAL_OVERRIDE ]';
    dom.toggleBtn.classList.replace('text-accent', 'text-text-primary');
    dom.toggleBtn.classList.replace('border-accent/30', 'border-industrial');
    dom.statusDot.classList.replace('bg-accent', 'bg-text-primary');
    dom.statusDot.classList.remove('animate-pulse');
    dom.navButtons?.classList.add('nav-active');
  }
}

function scrollPrev(state, dom) {
  if (state.isTransitioning || dom.track.children.length < 2) return;
  state.isTransitioning = true;

  const scrollAmount = getScrollAmount(dom.track);
  
  dom.track.style.scrollBehavior = 'auto';
  dom.track.prepend(dom.track.lastElementChild);
  dom.track.scrollLeft += scrollAmount;
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dom.track.style.scrollBehavior = 'smooth';
      dom.track.scrollLeft -= scrollAmount;
      
      setTimeout(() => {
        state.isTransitioning = false;
      }, 500);
    });
  });
}

function scrollNext(state, dom) {
  if (state.isTransitioning || dom.track.children.length < 2) return;
  state.isTransitioning = true;
  
  const scrollAmount = getScrollAmount(dom.track);
  dom.track.scrollBy({ left: scrollAmount, behavior: 'smooth' });

  setTimeout(() => {
    dom.track.appendChild(dom.track.firstElementChild);
    dom.track.style.scrollBehavior = 'auto';
    dom.track.scrollLeft -= scrollAmount;
    
    requestAnimationFrame(() => {
      dom.track.style.scrollBehavior = 'smooth';
      state.isTransitioning = false;
    });
  }, 500); 
}

function startAuto(state, dom) {
  const interval = setInterval(() => scrollNext(state, dom), 4000);
  state.autoScrollInterval = interval;
}

function stopAuto(state) {
  clearInterval(state.autoScrollInterval);
}

function getScrollAmount(track) {
  return track.firstElementChild.clientWidth + 24;
}