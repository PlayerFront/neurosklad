(function () {
    const burger = document.querySelector('.mobile-menu__burger');
const panel = document.getElementById('mobile-panel');
const overlay = panel.querySelector('.mobile-panel__overlay');
const nav = panel.querySelector('.mobile-panel__nav');
const closeBtn = panel.querySelector('.mobile-panel__close');

let isOpen = false;

function openPanel() {
  if (isOpen) return;
  isOpen = true;

  panel.classList.add('active');
  panel.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';

  overlay.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 300, fill: 'forwards' }
  );

  nav.animate(
    [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }],
    { duration: 300, easing: 'ease', fill: 'forwards' }
  );
}

function closePanel() {
  if (!isOpen) return;
  isOpen = false;

  overlay.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    { duration: 300, fill: 'forwards' }
  );

  const animation = nav.animate(
    [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }],
    { duration: 300, easing: 'ease', fill: 'forwards' }
  );

  animation.onfinish = () => {
    panel.classList.remove('active');
    panel.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
}

function togglePanel() {
  isOpen ? closePanel() : openPanel();
}

burger.addEventListener('click', togglePanel);
overlay.addEventListener('click', togglePanel);
closeBtn.addEventListener('click', togglePanel);
})();