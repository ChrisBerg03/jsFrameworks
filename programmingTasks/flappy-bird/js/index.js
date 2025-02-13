const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const Jump = document.getElementById("Jump");
const up = document.getElementById("up");
const posContainer = document.getElementById("posContainer");

const player = {
    x: 175,
    y: 200,
    height: 50,
    width: 50,
    speed: -6,
};

const obsticle = {
    x: 500,
    y: 200,
    height: 200,
    width: 50,
};

const obsticle2 = {
    x: 800,
    y: 0,
    height: 200,
    width: 50,
};

Jump.addEventListener("click", () => {
    player.speed = -6;
    c.clearRect(0, 0, 400, 400);
    c.fillRect(player.x, player.y, player.width, player.height);
});

function checkBounds() {
    if (player.y > 350 || player.y < 0) {
        reset();
    }
    if (
        player.x + player.width > obsticle.x &&
        player.x < obsticle.x + obsticle.width &&
        player.y + player.height > obsticle.y &&
        player.y < obsticle.y + obsticle.height
    ) {
        reset();
    }

    if (
        player.x + player.width > obsticle2.x &&
        player.x < obsticle2.x + obsticle2.width &&
        player.y + player.height > obsticle2.y &&
        player.y < obsticle2.y + obsticle2.height
    ) {
        reset();
    }
}

setInterval(() => {
    gameLoop();
}, 20);

function render() {
    player.speed += 0.3;
    player.y += player.speed;
    obsticle.x -= 2;
    obsticle2.x -= 2;
    c.clearRect(0, 0, 400, 400);
    c.fillRect(player.x, player.y, player.width, player.height);
    c.fillRect(obsticle.x, obsticle.y, obsticle.width, obsticle.height);
    c.fillRect(obsticle2.x, obsticle2.y, obsticle2.width, obsticle2.height);
    if (obsticle.x < -obsticle.width) {
        obsticle.x = 500;
    }
    if (obsticle2.x < -obsticle2.width) {
        obsticle2.x = 500;
    }
}

function reset() {
    alert("You died, try again pussy?");
    (obsticle.x = 500), (player.y = 175), (player.speed = -6);
    (obsticle2.x = 800), (player.y = 175), (player.speed = -6);
}

window.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        e.preventDefault();
        player.speed = -6;
    }
});

function gameLoop() {
    render();
    checkBounds();
}
