(function () {
  "use strict";

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
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 50,
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

  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });
})();
