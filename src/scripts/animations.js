import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------
   1. Header — fono būsena slenkant
--------------------------------------------------------------- */
const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------------------------------------------------------------
   2. Mobilus meniu
--------------------------------------------------------------- */
const burger = document.querySelector('[data-burger]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
if (burger && mobileMenu) {
  const setOpen = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    if (open) {
      mobileMenu.hidden = false;
      requestAnimationFrame(() => mobileMenu.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => { mobileMenu.hidden = true; }, 320);
    }
  };
  burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
  mobileMenu.querySelectorAll('[data-mobile-link]').forEach((a) =>
    a.addEventListener('click', () => setOpen(false))
  );
}

/* ---------------------------------------------------------------
   3. Hero intro
--------------------------------------------------------------- */
function heroIntro() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const lines = hero.querySelectorAll('.line__in');
  const els = hero.querySelectorAll('[data-hero-el]');

  if (reduce) {
    gsap.set(lines, { yPercent: 0, y: 0 });
    gsap.set(els, { opacity: 1, y: 0 });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.fromTo(lines, { yPercent: 115, y: 0 }, { yPercent: 0, duration: 1.1, stagger: 0.09 }, 0.15)
    .to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.5);
}

/* ---------------------------------------------------------------
   4. Scroll reveal (visi [data-reveal])
--------------------------------------------------------------- */
function revealAll() {
  const items = gsap.utils.toArray('[data-reveal]');
  if (reduce) {
    gsap.set(items, { opacity: 1, x: 0, y: 0, scale: 1 });
    return;
  }
  ScrollTrigger.batch(items, {
    start: 'top 85%',
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.09,
        overwrite: true,
      }),
  });
}

/* ---------------------------------------------------------------
   5. FAQ akordeonas
--------------------------------------------------------------- */
function faqAccordion() {
  const items = document.querySelectorAll('[data-faq-item]');
  items.forEach((item) => {
    const btn = item.querySelector('[data-faq-q]');
    const panel = item.querySelector('[data-faq-a]');
    if (!btn || !panel) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // uždarom kitus
      items.forEach((o) => {
        if (o !== item) {
          o.classList.remove('is-open');
          o.querySelector('[data-faq-q]')?.setAttribute('aria-expanded', 'false');
          const p = o.querySelector('[data-faq-a]');
          if (p) p.style.maxHeight = '';
        }
      });
      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + 'px' : '';
    });
  });
}

/* ---------------------------------------------------------------
   6. Subtilus parallax elementams su [data-parallax]
--------------------------------------------------------------- */
function parallax() {
  if (reduce) return;
  gsap.utils.toArray('[data-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.parallax) || 60;
    gsap.fromTo(
      el,
      { y: amount },
      {
        y: -amount,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  });
}

/* ---------------------------------------------------------------
   Init
--------------------------------------------------------------- */
function init() {
  heroIntro();
  revealAll();
  faqAccordion();
  parallax();
  ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
window.addEventListener('load', () => ScrollTrigger.refresh());
