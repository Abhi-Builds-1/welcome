/* =========================================
   5 PAGE LOVE WEBSITE
========================================= */


/* ---------- MUSIC ---------- */

const music = document.getElementById("music");

const songs = {
    1: "song1.mp3",
    2: "song2.mp3",
    3: "song3.mp3",
    4: "song4.mp3",
    5: "song5.mp3"
};

let currentPage = 1;


/* ---------- LOAD MUSIC ---------- */

function playMusic(pageNumber) {

    const song = songs[pageNumber];

    if (!song) return;

    const newSource = song;

    /*
       Don't reload the same song unnecessarily.
    */

    if (!music.src.endsWith(newSource)) {

        music.src = newSource;

        music.load();
    }

    music.play().catch(() => {

        console.log(
            "Music will start after user interaction."
        );

    });
}


/* ---------- CHANGE PAGE ---------- */

function showPage(pageNumber) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(
            "page" + pageNumber
        );


    if (page) {

        page.classList.add("active");

        currentPage = pageNumber;

        playMusic(pageNumber);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* ---------- FIRST USER INTERACTION ---------- */

document.addEventListener(
    "click",
    function startMusic() {

        playMusic(currentPage);

    },
    { once: true }
);


/* =========================================
   PAGE 1
========================================= */

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");


/* YES → PAGE 3 */

yesBtn.addEventListener(
    "click",
    function () {

        showPage(3);

    }
);


/* NO → PAGE 2 */

noBtn.addEventListener(
    "click",
    function () {

        showPage(2);

    }
);


/* =========================================
   PAGE 2
========================================= */

const tryAgainBtn =
    document.getElementById(
        "tryAgainBtn"
    );


tryAgainBtn.addEventListener(
    "click",
    function () {

        showPage(1);

    }
);


/* =========================================
   PAGE 3
========================================= */

const page3Next =
    document.getElementById(
        "page3Next"
    );


page3Next.addEventListener(
    "click",
    function () {

        showPage(4);

    }
);


/* =========================================
   PAGE 4
========================================= */

const page4Next =
    document.getElementById(
        "page4Next"
    );


page4Next.addEventListener(
    "click",
    function () {

        showPage(5);

    }
);


/* =========================================
   KEEP NO BUTTON MOVING
   ONLY IN A SMALL PHONE-SAFE AREA
========================================= */

let noMoveCount = 0;


noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);

noBtn.addEventListener(
    "touchstart",
    function (event) {

        /*
           Prevent accidental clicking on phones.
        */

        event.preventDefault();

        moveNoButton();

    }
);


function moveNoButton() {

    noMoveCount++;

    /*
       Keep movement deliberately small
       so it stays within a phone-sized area.
    */

    const x =
        (Math.random() * 100) - 50;

    const y =
        (Math.random() * 60) - 30;


    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
}