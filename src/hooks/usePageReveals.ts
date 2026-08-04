import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function usePageReveals() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + slide up
      gsap.utils.toArray<HTMLElement>('[data-reveal="fade-up"]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            delay: parseFloat(el.dataset.revealDelay ?? '0'),
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });

      // Simple fade
      gsap.utils.toArray<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.4,
            ease: 'power2.out',
            delay: parseFloat(el.dataset.revealDelay ?? '0'),
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          }
        );
      });

      // Image clip-path reveal
      gsap.utils.toArray<HTMLElement>('[data-reveal="image"]').forEach((el) => {
        const img = el.querySelector('img, video') as HTMLElement | null;
        gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)' });
        if (img) gsap.set(img, { scale: 1.25 });
        gsap.to(el, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power3.out',
          delay: parseFloat(el.dataset.revealDelay ?? '0'),
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration: 1.8,
            ease: 'power3.out',
            delay: parseFloat(el.dataset.revealDelay ?? '0'),
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        }
      });

      // Line/word stagger , expects children with data-reveal-item
      gsap.utils.toArray<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
        const items = el.querySelectorAll('[data-reveal-item]');
        gsap.fromTo(
          items,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            stagger: parseFloat(el.dataset.revealStagger ?? '0.08'),
            delay: parseFloat(el.dataset.revealDelay ?? '0'),
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        );
      });

      // Children stagger container
      gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]').forEach((el) => {
        const items = el.querySelectorAll('[data-reveal-item]');
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: parseFloat(el.dataset.revealStagger ?? '0.1'),
            delay: parseFloat(el.dataset.revealDelay ?? '0'),
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        );
      });

      // Parallax elements
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? '0.2');
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);
}
