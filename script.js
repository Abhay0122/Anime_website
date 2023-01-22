// swiper

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});

// overlay

const menuOverlay = document.querySelector('.menu-overlay');
const menubtn = document.querySelector('.menu-btn>i');

var flag = 1;

menubtn.addEventListener("click", () => {
    if (flag === 1) {
        menuOverlay.style.transform = "translatex(0)";
        flag = 0;
    }
    else {
        menuOverlay.style.transform = "translatex(-110%)";
        flag = 1;
    }
})

