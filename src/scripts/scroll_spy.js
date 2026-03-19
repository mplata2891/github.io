// src/scripts/scroll_spy.js

export const initSystemNav = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const linkMap = new Map();
  navLinks.forEach((link) => {
    linkMap.set(link.getAttribute("href").substring(1), link);
  });

  // wrap our state in an object so it gets passed by reference
  const state = { activeLink: null };

  // pass the map and the state to our helper, which RETURNS the actual callback
  const observerCallback = createNavHandler(linkMap, state);
  const observer = new IntersectionObserver(observerCallback, { threshold: 0.3 });

  sections.forEach((section) => observer.observe(section));
};

/**
 * function that injects the required state into the observer callback
 */
const createNavHandler = (linkMap, state) => {
  // this is the actual function the IntersectionObserver runs
  return (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        const targetLink = linkMap.get(target.id);
        
        if (targetLink && targetLink !== state.activeLink) {
          deactivateNode(state.activeLink);
          activateNode(targetLink);
          state.activeLink = targetLink; // Update the state object
        }
      }
    });
  };
};

/**
 * Strips the active styling from a specific navigation node
 */
const deactivateNode = (link) => {
  if (!link) return;
  link.classList.replace("text-accent", "text-text-secondary");
  link.querySelector(".nav-dot").classList.remove("bg-accent");
};

/**
 * Applies the active electric purple styling to a specific node
 */
const activateNode = (link) => {
  if (!link) return;
  link.classList.replace("text-text-secondary", "text-accent");
  link.querySelector(".nav-dot").classList.add("bg-accent");
};