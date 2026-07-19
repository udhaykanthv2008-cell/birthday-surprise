console.log("JS working");
const heart = document.querySelector(".heart");
const music = document.getElementById("bgMusic");
const message = document.getElementById("message");

const text = `
You are the best thing that ever happened to me. ❤️

Every moment with you is my favorite memory.

I promise to love you, support you and make you smile every day. 🥹💖

Happy Birthday, My Love! 🎂🎈
`;

heart.addEventListener("click", function () {
    music.volume = 0.4;
    music.play();

    heart.style.display = "none";
    document.querySelector("h2").style.display = "none";
    message.style.display = "block";

    const p = message.querySelector("p");
    p.innerHTML = "";

    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            if (text[i] === "\n") {
                p.innerHTML += "<br>";
            } else {
                p.innerHTML += text[i];
            }
            i++;
        } else {
            clearInterval(typing);
        }
    }, 40);

    createHearts();
});

function createHearts() {
    setInterval(() => {
        const h = document.createElement("div");
        h.classList.add("floating-heart");
        h.innerHTML = "❤️";
        h.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(h);

        setTimeout(() => {
            h.remove();
        }, 6000);
    }, 300);
}
// Fireworks coming next
console.log("Fireworks Ready 🎆");
const text = "Happy Birthday My Everything ❤️";
let index = 0;

function typeWriter() {
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter,100);
    }
}

typeWriter();