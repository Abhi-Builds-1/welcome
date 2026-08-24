function nextPage(pageNumber) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.add("hidden");
    });

    document.getElementById("page" + pageNumber)
        .classList.remove("hidden");
}


// Moving NO button
const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseenter", moveButton);

noButton.addEventListener("touchstart", moveButton);


function moveButton() {

    const maxX = 100;
    const maxY = 80;

    const x = Math.random() * (maxX * 2) - maxX;
    const y = Math.random() * (maxY * 2) - maxY;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;
}