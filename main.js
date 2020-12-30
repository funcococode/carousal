const imgs = document.querySelectorAll(".carousalImg");
const container = document.querySelector("#imgs")

let idx = 0;

function run() {
    idx++
    if (idx > imgs.length - 1) {
        idx = 0;
    }

    container.style.transform = `translateX(${-idx*600}px)`

    setTimeout(run, 3000)
}

run()