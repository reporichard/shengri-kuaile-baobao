// ==========================
// ELEMENT
// ==========================

const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const curtain = document.getElementById("curtain");
const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");
const birthdayTitle = document.getElementById("birthdayTitle");
const birthdayName = document.getElementById("birthdayName");
const birthdayText = document.getElementById("birthdayText");
const songVoice = document.getElementById("songVoice");
const cakeScene = document.getElementById("cakeScene");
//const voiceLetter = document.getElementById("voiceLetter");
const bgMusic = document.getElementById("bgMusic");
const flame1 = document.getElementById("flame1");
const flame2 = document.getElementById("flame2");
bgMusic.volume = 0.4;
let candleCount = 0;

// ==========================
// BALLOON
// ==========================

const balloonColors = [
    "#ff5f95",
    "#ffd166",
    "#5ec8ff",
    "#7dff91",
    "#d27dff",
    "#ff8fab",
    "#9bf6ff"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.animation = `
        fly ${8 + Math.random() * 6}s linear infinite
    `;

    balloon.style.animationDelay =
        Math.random() * 5 + "s";

    balloon.style.transform =
        `scale(${0.8 + Math.random() * .6})`;

    balloons.appendChild(balloon);

}



// ==========================
// CONFETTI
// ==========================

const confettiColors = [

"#ff4d6d",
"#ffd93d",
"#5ec8ff",
"#7dff91",
"#d27dff",
"#ff8fab"

];

function createConfetti(){

    for(let i=0;i<120;i++){

        const piece=document.createElement("span");

        piece.style.position="absolute";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.width="8px";

        piece.style.height="14px";

        piece.style.background=
        confettiColors[
            Math.floor(
                Math.random()*confettiColors.length
            )
        ];

        piece.style.opacity=".9";

        piece.style.transform=
        `rotate(${Math.random()*360}deg)`;

        piece.style.animation=`
        confettiFall
        ${3+Math.random()*3}s
        linear forwards`;

        piece.style.animationDelay=
        Math.random()*0.6+"s";

        confetti.appendChild(piece);

    }

}

// ==========================
// AUTO OPEN

birthday.style.display = "block";
birthday.style.visibility = "hidden";

setTimeout(() => {

    // Intro fade
    intro.style.opacity = "0";
    intro.style.transform = "scale(1.05)";

    setTimeout(() => {

        intro.style.display = "none";
        birthday.style.visibility = "visible";

    },500);

    // Tirai buka
    setTimeout(() => {
        curtain.classList.add("open");
    },600);

    // Sparkle
    setTimeout(() => {
        sparkles.innerHTML="";
        createSparkles();
    },800);

    // Sakura
    setTimeout(() => {
        petals.innerHTML="";
        createPetals();
    },900);

    // Balon
    setTimeout(() => {

        balloons.innerHTML="";

        for(let i=0;i<25;i++){
            createBalloon();
        }

    },1100);

    // Confetti
    setTimeout(() => {

        confetti.innerHTML="";
        createConfetti();

    },1300);

    // Hero muncul
setTimeout(() => {

    showHero();

},1700);

},3000);
// Hilangkan tirai setelah animasi selesai
setTimeout(() => {

    curtain.style.opacity = "0";

    setTimeout(() => {

        curtain.style.display = "none";

    }, 500);

}, 6500);

const sparkles=document.getElementById("sparkles");

function createSparkles(){

    for(let i=0;i<40;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.style.left=Math.random()*100+"vw";
        s.style.top=Math.random()*100+"vh";

        s.style.animationDelay=
        Math.random()*3+"s";

        sparkles.appendChild(s);

    }

}

const petals=document.getElementById("petals");

function createPetals(){

    for(let i=0;i<35;i++){

        const p=document.createElement("div");

        p.className="petal";

        p.style.left=Math.random()*100+"vw";

        p.style.animationDuration=
        8+Math.random()*6+"s";

        p.style.animationDelay=
        Math.random()*6+"s";

        petals.appendChild(p);

    }

}
function blowCandle(flame){

    if(flame.classList.contains("off")) return;

    flame.classList.add("off");

    candleCount++;

    if(candleCount==2){

        createConfetti();

    }

}

flame1.onclick=()=>{

    blowCandle(flame1);

}

flame2.onclick=()=>{

    blowCandle(flame2);

}
function fadeAudio(audio, targetVolume, duration){

    const startVolume = audio.volume;

    const steps = 30;

    const stepTime = duration / steps;

    const volumeStep = (targetVolume - startVolume) / steps;

    let currentStep = 0;

    const interval = setInterval(() => {

        currentStep++;

        audio.volume += volumeStep;

        if(currentStep >= steps){

            audio.volume = targetVolume;

            clearInterval(interval);

        }

    }, stepTime);

}
// ==========================
// OPEN LETTER
// ==========================

const openLetter = document.getElementById("openLetter");
const letter = document.querySelector(".letter");
const letterContent = document.getElementById("letterContent");

openLetter.addEventListener("click", () => {

    openLetter.style.display = "none";

    birthday.classList.add("song-mode");

    cakeScene.classList.add("show");

    // Fade out background music
    fadeAudio(bgMusic, 0, 1000);

    setTimeout(() => {

        songVoice.currentTime = 0;
        songVoice.play();

    }, 1000);

});

songVoice.addEventListener("ended", async () => {

    cakeScene.classList.add("hide");

    birthday.classList.remove("song-mode");

    // Background music naik lagi perlahan
    fadeAudio(bgMusic, 0.4, 1200);

    await sleep(1000);

    cakeScene.classList.remove("show");
    cakeScene.classList.remove("hide");

    letter.style.display = "block";

    requestAnimationFrame(() => {

        letter.classList.add("show");

    });

  await showLetter(isiSurat);
});

const isiSurat=`

宝宝，22岁生日快乐呀！！！🎉🎂❤️

希望宝宝一直健健康康、平平安安、长命百岁，每一天都开开心心的。我们也要一直一直在一起，嘻嘻～❤️

我真的真的好爱宝宝，已经爱到快要接近无限大了，嘻嘻～🥰

还有哦，今天也是我们在一起的第62天！希望以后还会有第100天、第500天、第1000天、第10000天，还有永远永远的每一天。✨

在宝宝22岁生日这一天，我想对宝宝说一些发自内心的话。

我真的觉得自己特别幸运，能够遇见宝宝。虽然我们的距离很远很远，但命运还是用它自己的方式，让我们相遇、相识、相爱。❤️

虽然宝宝离我很远，可是在我的心里，宝宝一直都离我很近很近。

不过没关系呀，这段距离只是暂时的。再过不久，我们一定会见面的。到时候我要紧紧抱着宝宝，一边抱着一边转圈圈，舍不得放开，嘻嘻嘻～🥰

宝宝一定要一直健健康康哦～我希望有一天，我们再也不会被距离分开了。到那个时候，我就可以每天抱抱宝宝、亲亲宝宝、陪着宝宝、宠着宝宝，把所有的爱都给宝宝。❤️

我还有一个小小的愿望，就是希望宝宝永远都会爱着我，希望我们能够一直相爱，一直到最后，一辈子都不分开。

以后宝宝的每一个生日，我都想陪在宝宝身边；未来的每一年，我都想陪宝宝一起度过。开心的时候一起笑，难过的时候我陪着宝宝，不管发生什么，我都会一直站在宝宝身边。✨

I love you，思思。❤️

你是我的女朋友，
是我的宝贝，
是我的最爱，
也是我的未来。

谢谢宝宝来到我的世界，也谢谢宝宝愿意爱我。

未来还有很长很长的路，我们一起慢慢走，一起实现我们的梦想，一起去很多很多地方，一起经历人生里的每一个春夏秋冬。

最后，再一次祝宝宝22岁生日快乐！！！🎂🎉

我爱你，宝宝。

永远永远爱你。❤️❤️

`;
// ==========================
// TYPEWRITER
// ==========================

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text, speed = 100){

    element.textContent = "";

    for(const char of text){

        element.textContent += char;

        await sleep(speed);

    }

}
async function showLetter(text){

    letterContent.innerHTML = "";

    const paragraphs = text.trim().split("\n\n");

    for(const paragraph of paragraphs){

        const p = document.createElement("p");

        p.className = "paragraph";

        p.textContent = paragraph;

        letterContent.appendChild(p);

        await sleep(400);

        p.classList.add("show");

        await sleep(2200);

    }

}

async function showHero(){

    await typeText(
        birthdayTitle,
        "🎂 生日快乐!!!! 🎂",
        100
    );

    await sleep(300);

    await typeText(
        birthdayName,
        "❤️ 思思 ❤️",
        80
    );

    await sleep(400);

    await typeText(
        birthdayText,
        `宝宝，22岁生日快乐呀！！🎉🎂

这是我为我的宝宝准备的小惊喜，嘻嘻～ ❤️

今天是你的生日，我有一些话想对你说。

点击下面的按钮吧！✨
`,
        100
    );

    // Baru tampilkan tombol
   openLetter.style.display="block";

requestAnimationFrame(()=>{

    openLetter.classList.add("show");

});
}
// ==========================
// STYLE ANIMATION
// ==========================

const style=document.createElement("style");

style.innerHTML=`


@keyframes confettiFall{

0%{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}

100%{

transform:
translateY(120vh)
rotate(720deg);

opacity:0;

}

}

`;
setInterval(() => {

    sparkles.innerHTML="";
    createSparkles();

},4000);

setInterval(() => {

    petals.innerHTML="";
    createPetals();

},12000);
document.head.appendChild(style);