const progress = document.getElementById("progressBar");
const welcome = document.getElementById("welcome");

welcome.addEventListener("click",()=>{

    welcome.style.display="none";

});
const heart = document.querySelector(".heart");
const music = document.getElementById("bgMusic");
const countdown = document.getElementById("countdown");
const birthdayTitle = document.getElementById("birthdayTitle");
const message = document.getElementById("message");
const letter = document.getElementById("letter");
const text = `You are the best thing that ever happened to me. ❤️

Every moment with you is my favorite memory.

I promise to love you, support you and make you smile every day. 🥹💖

Happy Birthday My Love! 🎂🎈`;
heart.addEventListener("click", () => {

    

    heart.style.display = "none";
    document.body.classList.add("blur-bg");
    document.querySelector("h2").style.display = "none";

    let count = 3;

    countdown.innerHTML = "Happy Birthday in... " + count;

    const timer = setInterval(() => {

        count--;

        if(count > 0){

            countdown.innerHTML = "Happy Birthday in... " + count;

        }else{

            clearInterval(timer);

            countdown.style.display = "none";
music.currentTime = 0;
music.play().catch(() => {});

birthdayTitle.style.display = "block";
birthdayTitle.classList.add("fade-in");

message.style.display = "block";
message.classList.add("fade-in");

showPhotos();

        }

    },1000);

});

function typeLetter(){
letter.innerHTML = "";
    let i = 0;

    const typing = setInterval(() => {

        if(i < text.length){

            if(text[i] === "\n"){

                letter.innerHTML += "<br>";

            }else{

                letter.innerHTML += text[i];

            }

            i++;

        }else{

            clearInterval(typing);
setTimeout(()=>{

        document.getElementById("endingScreen").style.display="block";

        document.getElementById("endingScreen").scrollIntoView({

            behavior:"smooth"

        });

    },5000);
        }

    },40);

}
function showPhotos(){

    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo,index)=>{

        setTimeout(()=>{

            // Previous photos become small
            for(let i=0;i<index;i++){
                photos[i].classList.add("small");
            }

            // Current photo appears
            photo.classList.add("show");

            // Last photo → start typing
            if(index === photos.length - 1){

                setTimeout(()=>{
document.querySelector(".gallery").classList.add("finished");
document.getElementById("letter").scrollIntoView({
    behavior: "smooth",
    block: "center"
});

typeLetter();

                    

                },1500);

            }

        },index * 2500);

    });

}
function createStar(){

    const star = document.createElement("div");

    star.className = "star";
    star.innerHTML = "✨";

    star.style.left = Math.random()*100 + "vw";
    star.style.top = Math.random()*100 + "vh";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },3000);

}

setInterval(createStar,300);
function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration = (4 + Math.random()*4) + "s";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },8000);

}

setInterval(createPetal,700);
function createFloatingHeart(){

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (4 + Math.random()*3) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createFloatingHeart,800);
function createFirework(){

    const colors=["#ff4d88","#ffffff","#ffd700"];

    const firework=document.createElement("div");

    firework.className="firework";

    firework.style.left=Math.random()*100+"vw";
    firework.style.top=Math.random()*60+"vh";

    firework.style.background=
    colors[Math.floor(Math.random()*colors.length)];

    document.body.appendChild(firework);

    setTimeout(()=>{
        firework.remove();
    },1000);

}

setInterval(createFirework,1200);
document.getElementById("replayBtn").addEventListener("click",()=>{

    location.reload();

});