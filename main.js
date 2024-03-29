function setTitleOpacity(n) {
  const start = 1000 + n * 50;
  const end = 1100 + n * 50;
  return {
    opacity: [
      [start, end],
      [0, 1],
    ],
  };
}
window.onload = function () {
  window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);
  });
  lax.init(); // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });
  lax.addElements(".ultron", {
    scrollY: {
      opacity: [
        [0, 80],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 0],
      ],
    },
  });
  lax.addElements(".loki", {
    scrollY: {
      opacity: [
        [40, 120],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, -200],
      ],
    },
  });
  lax.addElements(".thanos", {
    scrollY: {
      opacity: [
        [80, 160],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 0],
      ],
    },
  }); // Add animation bindings to elements
  lax.addElements(".logo", {
    scrollY: {
      scale: [
        [0, 80],
        [1, 3],
      ],
      opacity: [
        [0, 50],
        [1, 0],
      ],
      translateY: [
        [0, 80],
        [0, 200],
      ],
    },
  });
  lax.addElements(".logo-text", {
    scrollY: {
      opacity: [
        [800, 900],
        [0, 1],
      ],
    },
  });
  lax.addElements(".scroll-tip", {
    scrollY: {
      translateY: [
        [0, 800],
        [-100, 0],
      ],
      opacity: [
        [0, 600],
        [1, 0],
      ],
      "letter-spacing": [
        [0, 600],
        [0, 150],
        {
          cssUnit: "px",
        },
      ],
    },
  });
  lax.addElements(".ironman-title", {
    scrollY: {
      filter: [
        [900, 1000, 1100, 1200, 1300, 1400, 1500],
        [0, 20, 0, 20, 0, 20, 0],
        {
          cssFn: function (val) {
            return `drop-shadow(0 0 ${val * 4}px yellow)`;
          },
        },
      ],
      translateY: [
        [1000, 1500, 5200],
        [200, "elCenterY", "elCenterY"],
      ],
    },
  });
  lax.addElements(".ironman-title-01", { scrollY: setTitleOpacity(1) });
  lax.addElements(".ironman-title-02", { scrollY: setTitleOpacity(2) });
  lax.addElements(".ironman-title-03", { scrollY: setTitleOpacity(3) });
  lax.addElements(".ironman-title-04", { scrollY: setTitleOpacity(4) });
  lax.addElements(".ironman-title-05", { scrollY: setTitleOpacity(5) });
  lax.addElements(".ironman-title-06", { scrollY: setTitleOpacity(6) });
  lax.addElements(".ironman-title-07", { scrollY: setTitleOpacity(7) });
  lax.addElements(".ironman-title-08", { scrollY: setTitleOpacity(8) });
  
  lax.addElements(".ironman-01", {
    scrollY: {
      translateY: [
        [1500, 2000],
        [800, -3000],
      ],
    },
  });
  
  lax.addElements(".ironman-02", {
    scrollY: {
      scale: [
        [1500, 2500],
        [0, 2],
      ],
      translateY: [
        [3000, 3200, 4000],
        [-800, 0, -800],
      ],
      translateX: [
        [1000, 2000, 2800],
        [0, 800, 0],
      ],
    },
  });
  lax.addElements(".shield", {
    scrollY: {
      translateY: [
        [3200, 3400, 3600, 3800],
        [800, 1200, 1600, 1600],
      ],
      translateX: [
        [3200, 3400, 3600, 3800],
        [-800, "screenWidth - 200", 0, "screenWidth + 200"],
      ],
    },
  });
  lax.addElements(".capitan-title", {
    scrollY: {
      filter: [
        [300, 3100, 3200, 3300, 3400, 3500, 3600],
        [0, 20, 0, 20, 0, 20, 0],
        {
          cssFn: function (val) {
            return `drop-shadow(0 0 ${val * 4}px blue)`;
          },
        },
      ],
      translateY: [
        [3000, 3500],
        [0, 500],
      ],
    },
  });
  lax.addElements(".capi", {
    scrollY: {
      translateX: [
        [3900, 4400],
        [400, -800],
      ],
      translateY: [
        [3000, 4400],
        [400, 400],
      ],
      scale: [
        [3000, 4400],
        [1, 0.5],
      ],
      opacity: [
        [3000, 4000],
        [0, 1],
      ],
    },
  });
  lax.addElements(".shield02", {
    scrollY: {
      translateX: [
        [3900, 4400],
        [0, 2500],
      ],
      translateY: [
        [3900, 4600],
        [0, 400],
      ],
      scale: [
        [3900, 4300],
        [1, 10],
      ],
      opacity: [
        [3900, 4000],
        [0, 1],
      ],
    },
  });
  };
