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

// card-page_3

var arr = [
    { img: "/images/powerful-boruto-uzumaki-uay5fw4k065i44aw.jpg", name: "Boruto: Naruto Next Generations", episode: "Ep - 284" },
    { img: "/images/Mou Ippon! Wallpaper - 1200x889.jpg", name: "Mou Ippon!", episode: "Ep - 03" },
    { img: "/images/wp8602390-d4dj-wallpapers.jpg", name: "D4DJ All Mix", episode: "Ep - 03" },
    { img: "/images/Kyokou Suiri Season 2.jpg", name: "Kyokou Suiri Season 2", episode: "Ep - 03 " },
    { img: "/images/Nokemono-tachi no Yoru.jpg", name: "Nokemono-tachi no Yoru", episode: "Ep - 03" },
    { img: "/images/Benriya Saitou-san, Isekai ni Iku.jpg", name: "Benriya Saitou-san, Isekai ni Iku", episode: "Ep - 03" },
    { img: "/images/Tokyo Revengers.jpg", name: "Tokyo Revengers: Seiya Kessen-hen", episode: "Ep - 03" },
    { img: "/images/Onepiece.jpg", name: "One Piece", episode: "Ep - 1048" },
    { img: "/images/blue lock.jpg", name: "Blue Lock", episode: "Ep - 15" },
    { img: "/images/anos.jpg", name: "The demon Academy season 2", episode: "Ep - 03 " },
    { img: "/images/Digimon Ghost Game.jpg", name: "Digimon Ghost Game", episode: "Ep - 06" },
    { img: "/images/boku.jpg", name: "Boku to Roboko", episode: "Ep - " },
    { img: "/images/Delicious Party♡Precure.png", name: "Delicious Party♡Precure", episode: "Ep - 44" },

];

function show() {
    var clutter = "";

    arr.forEach((elem) => {
        clutter += `<div class="page_3_cards">
                        <img src="${elem.img}" alt="">
                        <div class="page_3_cards_txts">
                            <h2>${elem.name}</h2>
                            <span>${elem.episode}</span>
                        </div>
                    </div>`
    })
    document.querySelector('.page_3-main-card_container').innerHTML = clutter;
};

show();

