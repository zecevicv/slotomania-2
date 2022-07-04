/* #Hamburger
  ======================================================= */
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header-hamburger button');

if (headerBtn) {
  headerBtn.addEventListener('click', (e) => {
    e.preventDefault();
  
    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
    headerBtn.classList.toggle('is-active');
  });
}

/* #Header
  ======================================================= */

// Color Change
if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

/* #Reviews Slider
  ======================================================= */
if (document.querySelector('.reviews .swiper')) {
  new Swiper(".reviews .swiper", {
    pagination: {
      el: ".reviews .swiper-pagination",
      type: "progressbar",
    },
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: '.reviews .next',
      prevEl: '.reviews .prev',
    },
  });
}

/* #Slot Games Slider
  ======================================================= */
if (document.querySelector('.slot-games .swiper')) {
  new Swiper(".slot-games .swiper", {
    pagination: {
      el: ".slot-games .swiper-pagination",
      type: "progressbar",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 1.75,
      }
    },
    navigation: {
      nextEl: '.slot-games .next',
      prevEl: '.slot-games .prev',
    },
  });
}

/* #Blog Post Slider
  ======================================================= */
if (document.querySelector('.blog-post-slider .swiper')) {
  new Swiper(".blog-post-slider .swiper", {
    pagination: {
      el: ".blog-post-slider .swiper-pagination",
      type: "progressbar",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.6,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 4,
        centeredSlides: false
      }
    }
  });
}

/* #AOS Animations
    ======================================================= */
if (window.innerWidth > 1024) {
  AOS.init({
    startEvent: 'load',
    once: true,
    duration: 800,
    offset: 300
  });
} else {
  AOS.init({
    startEvent: 'load',
    once: true,
    duration: 800,
    offset: 50
  });
}

/* #Parallax Animations
  ======================================================= */
if (document.querySelector('.home-page')) {
  // About
  gsap.to(".about .img", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".about ",
      scrub: true
    },
  });

  gsap.to(".about .coin-1", {
    yPercent: -300,
    ease: "none",
    scrollTrigger: {
      trigger: ".about ",
      scrub: true
    },
  });

  gsap.to(".about .coin-2", {
    yPercent: 200,
    ease: "none",
    scrollTrigger: {
      trigger: ".about ",
      scrub: true
    },
  });

  gsap.to(".about .cloud-1", {
    yPercent: 300,
    ease: "none",
    scrollTrigger: {
      trigger: ".about ",
      scrub: true
    },
  });

  gsap.to(".about .cloud-2", {
    yPercent: 300,
    ease: "none",
    scrollTrigger: {
      trigger: ".about ",
      scrub: true
    },
  });

  // Banner 2
  gsap.to(".banner-2 .person", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(1)", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(2)", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(3)", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(4)", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(5)", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(6)", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(7)", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(8)", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(9)", {
    yPercent: 150,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(10)", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(11)", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(12)", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(13)", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(14)", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(15)", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .coins img:nth-child(16)", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  gsap.to(".banner-2 .slot", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner-2",
      scrub: true
    },
  });

  // Reviews
  gsap.to(".reviews .icons img:nth-child(1)", {
    yPercent: -25,
    ease: "none",
    scrollTrigger: {
      trigger: ".reviews",
      scrub: true
    },
  });

  gsap.to(".reviews .icons img:nth-child(2)", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".reviews",
      scrub: true
    },
  });

  gsap.to(".reviews .icons img:nth-child(3)", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".reviews",
      scrub: true
    },
  });

  gsap.to(".reviews .icons img:nth-child(4)", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".reviews",
      scrub: true
    },
  });

  if (window.innerWidth > 1024) {
    gsap.to(".reviews .tree-left img", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".reviews",
        scrub: true
      },
    });
  } else {
    gsap.to(".reviews .tree-left img", {
      yPercent: -70,
      ease: "none",
      scrollTrigger: {
        trigger: ".reviews",
        scrub: true
      },
    });
  }

  gsap.to(".reviews .tree-right img", {
    yPercent: 40,
    ease: "none",
    scrollTrigger: {
      trigger: ".reviews",
      scrub: true
    },
  });

  // Building Right
  gsap.to(".building-right img", {
    yPercent: 35,
    ease: "none",
    scrollTrigger: {
      trigger: ".building-right",
      scrub: true
    },
  });
}