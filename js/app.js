gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);


window.onload = function () {
  setTimeout(function () {
    document.body.classList.add("loaded");

if (ScrollTrigger.isTouch !== 1) {
// ------------------------Header------------
  const header = gsap.timeline();
  header
    .fromTo(
      ".header__title",
      {
        opacity: 0,
      },
      {
        delay: 0.3,
        duration: 2,
        opacity: 1,
      },.6
    )
    .fromTo(
      ".header__subtitle",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
      },
      0.8
    )
    .fromTo(
      ".header__btn",
      {
        opacity: 0,
      },
      {
        duration: 1.8,
        stagger: 0.4,
        opacity: 1,
      },
      1
    )
    .fromTo(
      ".header__btn-title",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
      },
      1.6
    )
    .fromTo(
      ".header__decor",
      {
        opacity: 0,
        x: 30,
        y: 30,
      },
      {
        opacity: 1,
        duration: 2,
        x: 0,
        y: 0,
      },
      0.8
    )
    .fromTo(
      ".navbar__logo-link",
      {
        opacity: 0,
        y: -30,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
      },
      1.2
    )
    .fromTo(
      ".navbar__menu-btn",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        duration: 1.7,
        stagger: 0.4,
        y: 0,
      },
      1
    );

  //----------------------Steps------------

  gsap.fromTo(
    ".steps__title",
    {
      opacity: 0,
      y: 30,
    },
    {
      scrollTrigger: {
        trigger: ".steps",
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 2,
    }
  );
  gsap.fromTo(
    ".steps__content-title",
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".steps",
        start: "40% 80%",
      },
      opacity: 1,
      duration: 1.4,
    }
  );
  // gsap.to(".steps__content-title", {
  //   scrollTrigger: {
  //     trigger: ".steps",
  //     start: "top 50%",
  //     markers: true,
  //   },
  //   opacity: 1,
  //   duration: 1.2,
  // });

  const steps = gsap.timeline({
    scrollTrigger: {
      trigger: ".steps",
      start: "40% 70%",
    },
  });

  steps
    .fromTo(
      ".steps__content-video",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
      },
      0.2
    )
    .fromTo(
      ".steps__content-video-img",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
      },
      0.4
    )
    .fromTo(
      ".steps__content-video-play",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
      },
      0.8
    )
    .fromTo(
      ".steps__content-video-line",
      {
        left: "0%",
        width: "0%",
      },
      {
        width: "96%",
        left: "50%",
        duration: 0.8,
      },
      0.8
    )
    .fromTo(
      ".steps__content-video-circle",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.6,
      },
      1
    )
    .fromTo(
      ".steps__content-video-message",
      {
        opacity: 0,
        y: -20,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      1.4
    )
    .fromTo(
      ".steps__content-video-menu",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      },
      1
    )
    .fromTo(
      ".steps__content-video-info",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      1.2
    )
    .fromTo(
      ".steps__info-item",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 1.2,
      },
      0.8
    );

  // ---------------------tests-----------

  const tests = gsap.timeline({
    scrollTrigger: {
      trigger: ".tests",
      start: "20% 60%",
    },
  });

  let testsTitle = gsap.utils.toArray(".tests__info-row");

  testsTitle.forEach((item) => {
    tests.fromTo(
      item,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.4,
      }
    );
  });

  tests
    .fromTo(
      ".tests__info-decor-img",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
      0.4
    )
    .fromTo(
      ".tests__info-arrow--left",
      {
        opacity: 0,
        x: 10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      0.4
    )
    .fromTo(
      ".tests__info-arrow--right",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      0.4
    )
    .fromTo(
      ".tests__info-decor-arrow--color",
      {
        opacity: 0,
        x: -10,
        stopColor: "#A7A7A7",
      },
      {
        opacity: 1,
        x: 0,
        stopColor: "#FC6652",
        duration: 1.4,
      },
      1.4
    )
    .fromTo(
      ".tests__title",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      0.4
    )
    .fromTo(
      ".tests__text",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      0.8
    )
    .fromTo(
      ".tests__btn",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
      1
    );

  // -------------------Situation------------

  const situation = gsap.timeline({
    scrollTrigger: {
      trigger: ".situation",
      start: "30% 80%",
    },
  });

  situation
    .fromTo(
      ".situation__title",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
      }
    )
    .fromTo(
      ".situation__item",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
      },
      0.4
    );
  gsap.fromTo(
    ".situation__card",
    {
      opacity: 0,
      y: 30,
    },
    {
      scrollTrigger: {
        trigger: ".situation",
        start: "60% 70%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
    },
    0.6
  );

  // gsap.fromTo("",{},{
  //   scrollTrigger: {
  //   trigger: ".situation",
  //   start: "20% 60%",
  //   marker:true,
  // },
  // })

  // -----------------Reports-----------

  const reports = gsap.timeline({
    scrollTrigger: {
      trigger: ".reports",
      start: "40% 80%",
    },
  });

  reports
    .fromTo(
      ".reports__title",
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
      },
      0.2
    )
    .fromTo(
      ".reports__text",
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        stagger: 0.4,
      },
      0.6
    )
    .fromTo(
      ".reports__btn",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
      },
      1
    )
    .fromTo(
      ".reports__img-layer--first",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.6,
      },
      0.8
    )
    .fromTo(
      ".reports__img-layer--second",
      {
        opacity: 0,
        scale: 1.1,
        x: -10,
        y: -10,
      },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
      },
      1
    )
    .fromTo(
      ".reports__img-layer--third",
      {
        opacity: 0,
        scale: 1.1,
        x: 20,
        y: 20,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
      },
      1.4
    )
    .fromTo(
      ".reports__img-layer--fourth",
      {
        opacity: 0,
        scale: 1.1,
        x: 20,
        y: -20,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
      },
      1.6
    )
    .fromTo(
      ".reports__line-move--first",
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "100%",

        duration: 1,
      },
      1.4
    )
    .fromTo(
      ".reports__line-move--second",
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "100%",

        duration: 1.8,
      },
      2.2
    )
    .fromTo(
      ".reports__img-circle",
      {
        opacity: 0,
        scale: 2,
        y: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.3,
        duration: 0.7,
      },
      2.5
    )
    .fromTo(
      ".reports__img-line-gradient",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
      },
      3.2
    )
    .fromTo(
      ".reports__img-line-gradient",
      {},
      {
        keyframes: {
          "0%": { opacity: 1 },
          "40%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        repeat: -1,
        duration: 3,
      },
      4.2
    )
    .fromTo(
      ".reports__img-circle-line",
      {
        opacity: 0,
        y: -30,
        scale: 1.4,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.6,
        duration: 0.8,
      },
      2.8
    );

  // ------------------------Verification-----------

  const verification = gsap.timeline({
    scrollTrigger: {
      trigger: ".verification",
      start: "40% 80%",
    },
  });

  verification
    .fromTo(
      ".verification__name",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
      },
      0.2
    )
    .fromTo(
      ".verification__title",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      0.6
    )
    .fromTo(
      ".verification__text",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.4,
        duration: 1,
      },
      0.8
    )
    .fromTo(
      ".verification__btn",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
      },
      1
    )
    .fromTo(
      ".verification__img-compucter",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      },
      0.4
    )
    .fromTo(
      ".verification__img-compucter-decor",
      {
        opacity: 0,
        scale: 1.2,
        x: 20,
        y: -20,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.8,
      },
      1.2
    )
    .fromTo(
      ".verification__img-compucter-logo",
      {
        opacity: 0,
        scale: 1.2,
        x: 10,
        y: -20,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
      },
      1.8
    );

  // ----------------Course---------------
  const course = gsap.timeline({
    scrollTrigger: {
      trigger: ".course",
      start: "40% 80%",
    },
  });
  
  course.fromTo(
    ".course__name",
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
    },
    0.2
  );
  course.fromTo(
    ".course__title",
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
    },
    0.6
  );
  course
    .fromTo(
      ".course__text",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
      },
      1
    )
    .fromTo(
      ".course__btn",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
      },
      0.6
    );
  
  course
    .fromTo(
      ".course__img-grid",
      { opacity: 0 },
      { opacity: 1, duration: 1.2 },
      0.2
    )
    .fromTo(
      ".course__img-cube",
      { opacity: 0, y: -30, scale: 1.1 },
      { opacity: 1, y: 0, stagger: 0.2, scale: 1, duration: 0.8 },
      0.6
    )
    .fromTo(
      ".course__img-column",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      0.8
    )
    .fromTo(
      ".course__img-text",
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1 },
      1
    )
    .fromTo(
      ".course__img-list",
      { opacity: 0, y: -20, scale: 1.2 },
      { opacity: 1, y: 0, scale: 1, duration: 1 },
      1.2
    )
    .fromTo(
      ".course__img-message",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      1.6
    )
  
    .fromTo(
      ".course__arrow--first",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.8 },
      1.2
    )
    .fromTo(
      ".course__arrow-decor--first",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      1.2
    )
    .fromTo(
      ".course__arrow--second",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.8 },
      2
    )
    .fromTo(
      ".course__arrow-decor--second",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      2
    )
    .fromTo(
      ".course__arrow--cube",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.8, stagger: 0.4 },
      2.4
    ) .fromTo(
      ".course__arrow-color--first",
      { drawSVG: "0%" },
      {
        keyframes: { drawSVG: ["0% 0%", "0% 100%", "100% 100%"] },
        repeat: -1,
        duration: 2,
      },
      2.8
    )
    .fromTo(
      ".course__arrow-decor-color--first",
      { opacity: 0 },
      {
        keyframes: {
          "0%": { opacity: 1, stopColor: "#D1D1D1" },
          "50%": { opacity: 1, stopColor: "#FC6652" },
          "100%": { opacity: 1, stopColor: "#D1D1D1" },
        },
        duration: 2,
        repeat: -1,
      },
      2.8
    )
  
    .fromTo(
      ".course__arrow-color--second",
      { drawSVG: "0%" },
      {
        keyframes: { drawSVG: ["0% 0%", "0% 100%", "100% 100%"] },
        duration: 2,
        repeat: -1,
      },
      3.8
    )
    .fromTo(
      ".course__arrow-decor-color--second",
      { opacity: 0 },
      {
        keyframes: {
          "0%": { opacity: 1, stopColor: "#D1D1D1" },
          "50%": { opacity: 1, stopColor: "#FC6652" },
          "100%": { opacity: 1, stopColor: "#D1D1D1" },
        },
        duration: 2,
        repeat: -1,
      },
      3.8
    )
  
    .fromTo(
      ".course__arrow-color--cube",
      { drawSVG: "0%" },
      {
        keyframes: { drawSVG: ["0% 0%", "0% 100%", "100% 100%"] },
        repeat: -1,
        duration: 2,
      },
      4.8
    )
    .fromTo(
      ".course__img-list",
      {},
      {
        keyframes: {
          "0%": { y: 0, scale: 1 },
          "40%": { y: -3, scale: 1.03 },
          "100%": { y: 0, scale: 1 },
        },
        duration: 3,
        repeat: -1,
        delay: -0.25,
      },
      2.8
    )
    .fromTo(
      ".course__img-message",
      {},
      {
        keyframes: {
          "0%": { y: 0 },
          "40%": { y: -3 },
          "100%": { y: 0 },
        },
        duration: 3,
        repeat: -1,
        delay: -0.25,
      },
      2.8
    );
 
  // -------------------Platform-------------------
  gsap.fromTo(
    ".platform__title",
    {
      opacity: 0,
      x: -30,
    },
    {
      scrollTrigger: {
        trigger: ".platform",
        start: "40% bottom",
      },
      opacity: 1,
      x: 0,
      duration: 1.4,
    }
  );

  const platform = gsap.timeline({
    scrollTrigger: {
      trigger: ".platform",
      start: "40% 80%",
    },
  });

  platform.fromTo(
    ".platform__section--first",
    {
      opacity: 0,
      x: 400,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
    },
    1.2
  );
  platform.fromTo(
    ".platform__section--second",
    {
      opacity: 0,
      x: -400,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
    },
    1.2
  );
  platform.fromTo(
    ".platform__section--main",
    {
      scale: 0.9,
    },
    {
      scale: 1,
      duration: 0.8,
    },
    1.3
  );

  //------------------Foter-------------
  const footer = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
    },
  });

  footer
    .fromTo(
      ".footer__content-text ",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.4,
        duration: 0.6,
      }
    )
    .fromTo(
      ".footer__social-item",
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
      },
      1
    );
}




if (ScrollTrigger.isTouch == 1) {

  const items=document.querySelectorAll(".header--animation");

  for(let i=0;i<items.length;i++){
    items[i].classList.remove("header--animation")
  }




// -----------------Course------------------

const course = gsap.timeline({
  scrollTrigger: {
    trigger: ".course",
    start: "40% 80%",
  },
});


  course.fromTo(
    ".course__arrow-color--first",
    { drawSVG: "0%" },
    {
      keyframes: { drawSVG: ["0% 0%", "0% 100%", "100% 100%"] },
      repeat: -1,
      duration: 2,
    },
    1
  )
  .fromTo(
    ".course__arrow-decor-color--first",
    { opacity: 0 },
    {
      keyframes: {
        "0%": { opacity: 1, stopColor: "#D1D1D1" },
        "50%": { opacity: 1, stopColor: "#FC6652" },
        "100%": { opacity: 1, stopColor: "#D1D1D1" },
      },
      duration: 2,
      repeat: -1,
    },
    1
  )

  .fromTo(
    ".course__arrow-color--second",
    { drawSVG: "0%" },
    {
      keyframes: { drawSVG: ["0% 0%", "0% 100%", "100% 100%"] },
      duration: 2,
      repeat: -1,
    },
    2
  )
  .fromTo(
    ".course__arrow-decor-color--second",
    { opacity: 0 },
    {
      keyframes: {
        "0%": { opacity: 1, stopColor: "#D1D1D1" },
        "50%": { opacity: 1, stopColor: "#FC6652" },
        "100%": { opacity: 1, stopColor: "#D1D1D1" },
      },
      duration: 2,
      repeat: -1,
    },
    2
  )

  .fromTo(
    ".course__arrow-color--cube",
    { drawSVG: "0%" },
    {
      keyframes: { drawSVG: ["0% 0%", "0% 100%", "100% 100%"] },
      repeat: -1,
      duration: 2,
    },
    3
  )
  .fromTo(
    ".course__img-list",
    {},
    {
      keyframes: {
        "0%": { y: 0, scale: 1 },
        "40%": { y: -3, scale: 1.03 },
        "100%": { y: 0, scale: 1 },
      },
      duration: 3,
      repeat: -1,
      delay: -0.25,
    },
    1
  )
  .fromTo(
    ".course__img-message",
    {},
    {
      keyframes: {
        "0%": { y: 0 },
        "40%": { y: -3 },
        "100%": { y: 0 },
      },
      duration: 3,
      repeat: -1,
      delay: -0.25,
    },
    1
  );

}


}, 400);
};


