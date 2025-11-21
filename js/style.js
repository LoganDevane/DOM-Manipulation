

const secretText = document.getElementById("secretText991");


secretText.style.visibility = "visible";
secretText.style.transition = "0.6s ease";
secretText.textContent = "You found me using the DOM!";




const weirdButton = document.getElementById("weirdButtonX");
const patchZ9 = document.querySelector(".colorPatch-z9");
let timesClicked = 0;

weirdButton.addEventListener("click", () => {
    timesClicked++;

    
    let hue = Math.floor(Math.random() * 360);
    let color = `hsl(${hue}, 85%, 60%)`;

    patchZ9.style.backgroundColor = color;
    patchZ9.style.boxShadow = `0 0 20px ${color}`;
    patchZ9.style.transition = "0.3s";

    
    
    weirdButton.textContent = timesClicked;
});




const box7 = document.getElementById("box7");
let isBig = false;

box7.style.transition = "0.25s ease";



box7.addEventListener("mouseenter", () => {
    box7.style.borderRadius = "50%";
});



box7.addEventListener("mouseleave", () => {
    box7.style.borderRadius = "0%";
});



box7.addEventListener("dblclick", () => {
    if (isBig) {
        box7.style.width = "100px";
        box7.style.height = "100px";
    } else {
        box7.style.width = "200px";
        box7.style.height = "200px";
    }
    isBig = !isBig;
});




const decoder = document.getElementById("decoderInput");
const decodedText = document.getElementById("decodedOutput");

decoder.addEventListener("input", () => {
    let value = decoder.value;

    if (value.toLowerCase().includes("x")) {
        decodedText.textContent = "Forbidden letter detected.";
        decodedText.style.color = "#ff4444";
    } else {
        decodedText.textContent = value;
        decodedText.style.color = "#00b7ff";
    }
});




const mysteryList = document.getElementById("mysteryList");
const liItems = mysteryList.querySelectorAll("li");

liItems.forEach((item) => {
    item.addEventListener("click", () => {

   
        
        item.className = "highlight1";

     
        
        let index = 0;
        liItems.forEach((other) => {
            if (other !== item) {
                if (index % 2 === 0) {
                    other.className = "highlight-l";
                    
                } else {
                    other.className = "highlightI"; 
                    
                }
                index++;
            }
        });
    });
});




const header = document.getElementById("glitchTitle");

setTimeout(() => {
    header.textContent = "DOM Restored!";
    header.style.color = "#34e1ff";
    header.style.fontSize = "40px";
    header.style.transition = "0.6s ease";
}, 3000);
