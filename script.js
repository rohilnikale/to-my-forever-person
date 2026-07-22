/* ============================================
        PART 1 - PREMIUM ANNIVERSARY JS
============================================ */

const loader = document.getElementById("loader");
const lockScreen = document.getElementById("lock-screen");
const website = document.getElementById("website");

const password = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

/* Hide Website Initially */

website.style.display = "none";

/* Loader */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1800);

});

/* Floating Hearts */

createHearts();

function createHearts() {

    const heartsContainer = document.createElement("div");

    heartsContainer.className = "hearts";

    document.body.appendChild(heartsContainer);

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (18 + Math.random() * 25) + "px";

        heart.style.animationDuration = (6 + Math.random() * 6) + "s";

        heart.style.opacity = Math.random();

        heartsContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 12000);

    }, 250);

}

/* Password */

unlockBtn.addEventListener("click", checkPassword);

password.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        checkPassword();

    }

});

function checkPassword(){

    if(password.value==="2220"){

        showUnlockAnimation();

    }

    else{

        error.innerHTML="Wrong Password 🥺";

        lockScreen.classList.add("shake");

        setTimeout(()=>{

            lockScreen.classList.remove("shake");

        },500);

    }

}

/* Unlock Animation */

function showUnlockAnimation(){

    lockScreen.innerHTML=`

    <div class="unlock-animation">

        <div class="bigHeart">❤️</div>

        <h1 id="unlockText">

        Password Accepted...

        </h1>

    </div>

    `;

    const text=document.getElementById("unlockText");

    setTimeout(()=>{

        text.innerHTML="Yayyyyy!! 🥹";

    },1800);

    setTimeout(()=>{

        text.innerHTML="You Guessed It...";

    },3600);

    setTimeout(()=>{

        text.innerHTML="Because...";

    },5400);

    setTimeout(()=>{

        text.innerHTML="❤️ TRUE LOVE NEVER FORGETS ❤️";

        text.style.fontSize="55px";

        text.style.fontFamily="'Great Vibes',cursive";

    },7200);

    setTimeout(()=>{

        text.innerHTML=`

        Welcome to Our Little World ❤️

        <br><br>

        <button id="continueBtn">

        Open My Heart ❤️

        </button>

        `;

        document.getElementById("continueBtn").onclick=openWebsite;

    },9800);

}

/* Open Website */

function openWebsite(){

    lockScreen.style.opacity="0";

    setTimeout(()=>{

        lockScreen.style.display="none";

        website.style.display="block";

        website.style.animation="fadeWebsite 1.5s";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },800);

}

/* Fade Animation */

const fadeStyle=document.createElement("style");

fadeStyle.innerHTML=`

@keyframes fadeWebsite{

from{

opacity:0;

transform:translateY(60px);

}

to{

opacity:1;

transform:none;

}

}

.unlock-animation{

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

height:100vh;

text-align:center;

animation:fadeWebsite 1s;

}

.bigHeart{

font-size:120px;

animation:heartbeat 1.2s infinite;

margin-bottom:30px;

}

#unlockText{

font-size:40px;

color:#ff5b94;

font-family:Poppins;

transition:.5s;

}

#continueBtn{

margin-top:35px;

padding:18px 45px;

border:none;

border-radius:50px;

background:linear-gradient(135deg,#ff5b94,#ff90bb);

color:white;

font-size:18px;

cursor:pointer;

box-shadow:0 20px 45px rgba(255,105,150,.3);

transition:.35s;

}

#continueBtn:hover{

transform:scale(1.06);

}

.shake{

animation:shake .45s;

}

@keyframes shake{

0%{transform:translateX(0);}
20%{transform:translateX(-8px);}
40%{transform:translateX(8px);}
60%{transform:translateX(-8px);}
80%{transform:translateX(8px);}
100%{transform:translateX(0);}

}

`;

document.head.appendChild(fadeStyle);


/* ============================================
        PART 2 - LETTER / SCROLL / CELEBRATION
============================================ */

const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");

if(letterBtn){

letterBtn.addEventListener("click",()=>{

letter.style.display="flex";

document.body.style.overflow="hidden";

});

}

if(closeLetter){

closeLetter.addEventListener("click",closeLetterPopup);

}

function closeLetterPopup(){

letter.style.display="none";

document.body.style.overflow="auto";

}

/* ESC KEY */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeLetterPopup();

}

});

/* CLICK OUTSIDE LETTER */

letter.addEventListener("click",(e)=>{

if(e.target===letter){

closeLetterPopup();

}

});

/* SCROLL ANIMATION */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(70px)";

card.style.transition="1s";

observer.observe(card);

});

/* IMAGE HOVER */

document.querySelectorAll(".card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* HEART CURSOR */

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize=(12+Math.random()*12)+"px";

heart.style.color="#ff5b94";

heart.style.zIndex="99999";

heart.style.opacity=".8";

heart.style.transition="1s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-50px) scale(1.5)";

heart.style.opacity="0";

},10);

setTimeout(()=>{

heart.remove();

},1000);

});

/* FOREVER BUTTON */

const foreverBtn=document.getElementById("foreverBtn");
const celebration=document.getElementById("celebration");

foreverBtn.addEventListener("click",()=>{

celebration.style.display="flex";

startHeartRain();

createConfetti();

});

/* HEART RAIN */

function startHeartRain(){

let interval=setInterval(()=>{

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.top="-50px";

h.style.fontSize=(20+Math.random()*25)+"px";

h.style.zIndex="999999";

h.style.transition="6s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.top="110vh";

h.style.transform="rotate(360deg)";

},20);

setTimeout(()=>{

h.remove();

},6000);

},120);

setTimeout(()=>{

clearInterval(interval);

},12000);

}

/* SIMPLE CONFETTI */

function createConfetti(){

for(let i=0;i<250;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";

c.style.height="8px";

c.style.borderRadius="50%";

const colors=["#ff5b94","#ffb3cf","#ffd700","#ffffff","#ff8ab4"];

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.zIndex="999999";

c.style.transition=(4+Math.random()*3)+"s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform="rotate(720deg)";

},20);

setTimeout(()=>{

c.remove();

},7000);

}

}

/* SMOOTH BUTTON EFFECT */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.96)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="scale(1.05)";

});

});

/* HERO FADE */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.opacity=1-window.scrollY/700;

}

});

/* SMALL WELCOME POP */

setTimeout(()=>{

const pop=document.createElement("div");

pop.innerHTML="❤️ Happy Anniversary ❤️";

pop.style.position="fixed";

pop.style.top="25px";

pop.style.left="50%";

pop.style.transform="translateX(-50%)";

pop.style.background="rgba(255,255,255,.85)";

pop.style.backdropFilter="blur(10px)";

pop.style.padding="15px 35px";

pop.style.borderRadius="40px";

pop.style.boxShadow="0 15px 40px rgba(255,105,150,.25)";

pop.style.zIndex="9999";

pop.style.color="#ff5b94";

pop.style.fontWeight="600";

pop.style.animation="fadeWebsite .8s";

document.body.appendChild(pop);

setTimeout(()=>{

pop.style.opacity="0";

pop.style.transition=".8s";

},2500);

setTimeout(()=>{

pop.remove();

},3500);

},1500);