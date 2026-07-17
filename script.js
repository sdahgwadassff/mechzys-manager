// Fade in the page
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Navbar background on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        nav.style.background = "rgba(15,23,42,.85)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        nav.style.background = "rgba(15,23,42,.55)";
        nav.style.boxShadow = "none";
    }
});

// Hero animation
const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    hero.style.transform = `translate(${x}px, ${y}px)`;

});

// Floating particles

const particles = document.getElementById("particles");

for(let i = 0; i < 70; i++){

    const dot = document.createElement("span");

    dot.style.position = "absolute";

    dot.style.width = Math.random()*4+2+"px";

    dot.style.height = dot.style.width;

    dot.style.background = "white";

    dot.style.borderRadius = "50%";

    dot.style.opacity = Math.random();

    dot.style.left = Math.random()*100+"%";

    dot.style.top = Math.random()*100+"%";

    dot.style.animation = `float ${Math.random()*8+8}s linear infinite`;

    particles.appendChild(dot);

}

// Floating animation

const style = document.createElement("style");

style.innerHTML = `
@keyframes float{

0%{

transform:translateY(0px);

opacity:.2;

}

50%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}
`;

document.head.appendChild(style);
