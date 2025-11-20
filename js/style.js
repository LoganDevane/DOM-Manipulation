
const hiddenMsg = document.getElementById("secretText991");


hiddenMsg.style.visibility = "visible";

hiddenMsg.textContent = "You found me using the DOM!";





const weirdBtn = document.getElementById("weirdButtonX");
const colorPatch = document.querySelector(".colorPatch-z9");

let clickCount = 0;


weirdBtn.addEventListener("click", () => {
    clickCount++;

   

    const funColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;
    colorPatch.style.backgroundColor = funColor;
    colorPatch.style.boxShadow = `0 0 20px ${funColor}`;

   
    weirdBtn.textContent = clickCount;
});



const shiftBox = document.getElementById("box7");

let large = false; 


shiftBox.addEventListener("mouseenter", () => {
    shiftBox.style.borderRadius = "50%";
});

shiftBox.addEventListener("mouseleave", () => {
    shiftBox.style.borderRadius = "0%";
});


shiftBox.addEventListener("dblclick", () => {
    if (large) {
        shiftBox.style.width = "100px";
        shiftBox.style.height = "100px";
        shiftBox.style.transition = "0.25s";
    } else {
        shiftBox.style.width = "200px";
        shiftBox.style.height = "200px";
        shiftBox.style.transition = "0.25s";
    }
    large = !large;
});
