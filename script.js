(function () {
  "use strict";

  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
  });

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };

  /**
   * Home type effect
   */

  const typed = document.querySelector(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * links
   */
  let links = document.querySelector(".links");
  if (links) {
    const togglelinkstoside = () => {
      if (window.scrollY > 400) {
        links.classList.add("links-on-side");
      } else {
        links.classList.remove("links-on-side");
      }
    };
    window.addEventListener("load", togglelinkstoside);
    document.addEventListener("scroll", togglelinkstoside);
  }
  /**
   * back-to-top
   */
  let backtotop = document.querySelector(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("back-to-top-active");
      } else {
        backtotop.classList.remove("back-to-top-active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    document.addEventListener("scroll", toggleBacktotop);
  }

  /**
   * skills slider
   */
  new Swiper(".skills-slider", {
    speed: 3000,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      120: {
        spaceBetween: 20,
      },
    },
    loop: true,
  });

  /**
   * Projects isotope and filter
   */
  window.addEventListener("load", () => {
    let projectContainer = document.querySelector(".project-container");
    if (projectContainer) {
      let projectIsotope = new Isotope(projectContainer, {
        itemSelector: ".project-item",
      });

      let projectFilters = document.querySelectorAll("#project-filters li");

      projectFilters.forEach((e) =>
        e.addEventListener("click", function (e) {
          e.preventDefault();
          projectFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          projectIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          projectIsotope.addEventListener("arrangeComplete", function () {
            AOS.refresh();
          });
        })
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const featLightbox = GLightbox({
    selector: ".feat-lightbox",
  });

  var dis = document.querySelector(".display-mode");
  var light = document.querySelector(".light");
  var dark = document.querySelector(".dark");

  console.log(dis);
  var r = document.querySelector(":root");

  dis.addEventListener("click", () => {
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
    console.log(rs.getPropertyValue("--bg"));
    if (rs.getPropertyValue("--bg") == "#1d1d1d") {
      toggleLight();
    } else toggleDark();
  });

  function toggleLight() {
    light.style.display = "none";
    dark.style.display = "block";
    r.style.setProperty("--nav-bg", "#f2f3f5");
    r.style.setProperty("--link-text", "#fff");
    r.style.setProperty("--accent-color", "#8a3ffc");
    r.style.setProperty("--accent-color-faded", "#8b3ffc10");
    r.style.setProperty("--heading-color", "#252a7c");
    r.style.setProperty("--text-color", "#484848");
    r.style.setProperty("--bg", "#fff");
    r.style.setProperty("--mohit-bg-gradient1", "#ffffff26");
    r.style.setProperty("--mohit-bg-gradient2", "#ffffff30");
    r.style.setProperty("--nav-bg2", "#ffffff00");
    r.style.setProperty("--mohit-bg-gradient4", "#ffffffcc");
    r.style.setProperty("--feat-bg", "#ffffff80");
    r.style.setProperty("--project-bg1", "#8a3ffc0d");
    r.style.setProperty("--project-bg2", "#ffffff0d");
  }

  function toggleDark() {
    dark.style.display = "none";
    light.style.display = "block";
    r.style.setProperty("--nav-bg", "#313131");
    r.style.setProperty("--link-text", "#fff");
    r.style.setProperty("--accent-color", "#8a3ffc");
    r.style.setProperty("--accent-color-faded", "#8b3ffc10");
    r.style.setProperty("--heading-color", "#e0e7ff");
    r.style.setProperty("--text-color", "#e1e1e1");
    r.style.setProperty("--bg", "#1d1d1d");
    r.style.setProperty("--mohit-bg-gradient1", "#1d1d1d26");
    r.style.setProperty("--mohit-bg-gradient2", "#1d1d1d30");
    r.style.setProperty("--mohit-bg-gradient3", "#1d1d1d33");
    r.style.setProperty("--mohit-bg-gradient4", "#1d1d1dcc");
    r.style.setProperty("--nav-bg2", "#1d1d1d00");
    r.style.setProperty("--feat-bg", "#1d1d1d80");
    r.style.setProperty("--project-bg1", "#8a3ffc0d");
    r.style.setProperty("--project-bg2", "#1d1d1d0d");
  }

  // const wrapper = document.getElementById("bubble-wrapper");

  // const animateBubble = (x) => {
  //   const bubble = document.createElement("div");

  //   bubble.className = "bubble";
  //   bubble.style.left = `${x}px`;

  //   wrapper.appendChild(bubble);

  //   setTimeout(() => wrapper.removeChild(bubble), 2000);
  // };

  // window.onmousemove = (e) => animateBubble(e.clientX);

  /* -- ⬇️⬇️ Multi-color version ⬇️⬇️ -- */

  // const wrapper = document.getElementById("bubble-wrapper");

  // let index = 0;

  // /* -- Step 1️⃣: Create an "enum" of colors -- */

  // const Red = {
  //   One: "rgb(239, 83, 80)",
  //   Two: "rgb(244, 67, 54)",
  //   Three: "rgb(229, 57, 53)",
  //   Four: "rgb(211, 47, 47)",
  //   Five: "rgb(198, 40, 40)"
  // }

  // const Green = {
  //   One: "rgb(102, 187, 106)",
  //   Two: "rgb(76, 175, 80)",
  //   Three: "rgb(67, 160, 71)",
  //   Four: "rgb(56, 142, 60)",
  //   Five: "rgb(46, 125, 50)"
  // }

  // const Blue = {
  //   One: "rgb(66, 165, 245)",
  //   Two: "rgb(33, 150, 243)",
  //   Three: "rgb(30, 136, 229)",
  //   Four: "rgb(25, 118, 210)",
  //   Five: "rgb(21, 101, 192)"
  // }

  // const Color = Red;

  // /* -- Step 2️⃣: Pick the order of colors -- */

  // const colors = [
  //   Color.One,
  //   Color.Two,
  //   Color.Three,
  //   Color.Four,
  //   Color.Five,
  //   Color.Four,
  //   Color.Three,
  //   Color.Two
  // ];

  // const animateBubble = x => {
  //   const bubble = document.createElement("div");

  //   bubble.className = "bubble";
  //   bubble.style.left = `${x}px`;

  //   /* -- Step 3️⃣: Cycle through the colors using an index variable and the modulus (%) operator -- */

  //   bubble.style.backgroundColor = colors[index++ % (colors.length - 1)];

  //   wrapper.appendChild(bubble);

  //   setTimeout(() => wrapper.removeChild(bubble), 2000);
  // }

  // window.onmousemove = e => animateBubble(e.clientX);
})();
