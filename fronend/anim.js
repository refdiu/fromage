const myno = document.getElementById("nay");
const mye = document.getElementById("aye");
const c1 = document.getElementById("cap1");
const i = document.getElementById("pic");


myno.addEventListener("mousemove", () => {
    
    const x = Math.floor(Math.random() * 900) - 500;
    const y = Math.floor(Math.random() * 300) - 300;
    c1.innerText = "Why not?🥺🥺";
    i.src = "nohover.jpg";
    myno.style.transform = `translate(${x}px, ${y}px)`;
});


mye.addEventListener("mouseover", () => {
    c1.innerText = "Yayyy!🎉";
    i.src = "cat-happy.gif";
});

mye.addEventListener("mouseleave", () => {
    i.src = "nohover.jpg";
    c1.innerText = "Do you wanna be my valentine?💖";
})