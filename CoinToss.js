function coin() {
    if (Math.random() < 0.5) {
        document.getElementById('img').src = "Heads.png";

    } else {
        document.getElementById('img').src = "Tails.png";

    }
};
coin();

function res() {
    document.getElementById('img').src = "gold.png";
}
res();