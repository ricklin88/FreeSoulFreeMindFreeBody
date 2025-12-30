const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* FADE-IN ON SCROLL */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

faders.forEach(el => observer.observe(el));


const quoteTab = document.getElementById('quoteTab');
const quoteDrawer = document.getElementById('quoteDrawer');
const quoteClose = document.getElementById('quoteClose');
const quoteOverlay = document.getElementById('quoteOverlay');

let lastFocusElement = null;

function getFocusableElements(container) {
    return container.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
}

lastFocuseElement = null;

function openDrawer() {
    lastFocusElement = document.activeElement

    quoteDrawer.classList.add('open');
    quoteOverlay.classList.add('open');
    document.body.classList.add('drawer-open');

    const focusableElements = getFocusableElements(quoteDrawer);
    if (focusableElements.length) {
        focusableElements[0].focus();
    }
}

function closeDrawer() {
    quoteDrawer.classList.remove('open');
    quoteOverlay.classList.remove('open');
    document.body.classList.remove('drawer-open');

    if (lastFocusElement) {
        lastFocusElement.focus();
    }
}

quoteTab.addEventListener('click', () => {
    if(!quoteDrawer.classList.contains('open')) {
        openDrawer();
    }
});
quoteClose.addEventListener('click', closeDrawer);
quoteOverlay.addEventListener('click', closeDrawer);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteDrawer.classList.contains('open')) {
        closeDrawer();
    }});

quoteDrawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    const focusable = getFocusableElements(quoteDrawer);
    if (focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    }

    if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
});