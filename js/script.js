document.querySelector("#btn-container").style.display = "none";
const img = document.querySelector("img");

const animationInfo = {
    targets: "#text-container h1",
    translateY: "-10vh",
    rotate: 360,
    scale: 1.25,
    borderRadius: "100%",
    color: "hsl(360, 100%, 70%)",
    backgroundColor: "hsl(351, 100%, 86%)",
    delay: anime.stagger(500),
    easing: "easeInSine",
    direction: "alternate",
    duration: 5000,
};

const jump = anime(animationInfo);
jump.play();

//kontrollknappar
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

play.addEventListener("click", function () {
    jump.play();
});
pause.addEventListener("click", function () {
    jump.pause();
});
resetBtn.addEventListener("click", function () {
    location.reload();
});

function showBtns() {
    document.querySelector("#btn-container").style.display = "flex";
}

img.addEventListener("click", function () {
    anime({
        targets: ".battery-segment",
        width: 23.1,
        duration: 2000,
        easing: "linear",
        endDelay: 500,
    });
    setTimeout(showBtns, 2000);
});
