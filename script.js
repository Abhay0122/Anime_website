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


// card-page_4

var arr2 = [
    { img: "/images/Onepiece.jpg", name: "One Piece", rank: "Rank-01" },
    { img: "/images/narutoshhipuden.jpg", name: "Naruto: Shippuden", rank: "Rank-02" },
    { img: "/images/Bleach.png", name: "Bleach", rank: "Rank-03" },
    { img: "/images/jujutsu-kaisen-bg.jpg", name: "Jujutsu kaisen", rank: "Rank-04" },
    { img: "/images/one-punch-man-saitama-wgbs1b3mcd3l28tq.jpg", name: "One Punch", rank: "Rank-05" },
    { img: "/images/AOT.png", name: "Attack On Titan", rank: "Rank-06" },
    { img: "/images/anos.jpg", name: "Demon Academy S-02", rank: "Rank-07" },
    { img: "/images/Boruto.png", name: "Boruto", rank: "Rank-08" },
    { img: "/images/dbz.jpg", name: "Dragon Ball Z", rank: "Rank-09" },
    { img: "/images/Spy Kyoushitsu.png", name: "Spy Kyoushitsu", rank: "Rank-10" },
    { img: "/images/Nier_Automata_Ver1.1a_kv.jpg", name: "NieR:Automata Ver1.1a", rank: "Rank-11" },
    { img: "/images/Bungou Stray Dogs 4th Season.jpg", name: "Bungou Stray Dogs S-4th", rank: "Rank-12" },
    { img: "/images/Tokyo Revengers.jpg", name: "Tokyo Revengers", rank: "Rank-13" },
    { img: "/images/blue lock.jpg", name: "Blue Lock", rank: "Rank-14" },
    { img: "/images/Detective Conan.jpg", name: "Detective Conan", rank: "Rank-15" },
    { img: "/images/deathnote.jpg", name: "Death Note", rank: "Rank-16" },
    { img: "/images/Dungeon.png", name: "Dungeon", rank: "Rank-17" },
    { img: "/images/Boku no Hero Academia 6th Season.jpg", name: "Boku no Hero Academia S-6th", rank: "Rank-18" },
    { img: "/images/Kyokou Suiri Season 2.jpg", name: "Kyokou Suiri Season 2", rank: "Rank-19" },
    { img: "/images/Horimiya.jpg", name: "Horimiya", rank: "Rank-20" },
]


function showCard() {
    var clutterCard = "";

    arr2.forEach((element) => {
        clutterCard += `<div class="page_4_card">
        <img src="${element.img}" alt="">
        <div class="page_4_card_txts">
            <h2>${element.name}</h2>
            <span>${element.rank}</span>
        </div>
    </div>`
    })
    document.querySelector('.page_4_cards_container').innerHTML = clutterCard;
};

showCard();