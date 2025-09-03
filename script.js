// count
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".soft_skils_item .fw-bold");
  let started = false; // only run once

  function startCounting() {
    counters.forEach((counter) => {
      let target = +counter.textContent; // final number
      let count = 0;
      let increment = Math.ceil(target / 100);

      let interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(interval);
        } else {
          counter.textContent = count;
        }
      }, 20);
    });
  }

  window.addEventListener("scroll", function () {
    if (!started && window.scrollY >= 2000) {
      started = true;
      startCounting();
    }
  });
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".clients-swiper", {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 1000,
    },
    slidesPerView: "auto",

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 100,
      },
    },
  });
});
