let moveCount = 0;
const maxMoves = 12;

function startGame() {
    document.getElementById("yesBtn").style.display = "block";
    document.getElementById("noBtn").style.display = "block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("question").innerText = "DO YOU LOVE YOUR GIRLFRIEND TOOO?";
}

function runAway() {
    if (moveCount < maxMoves) {
        let yesBtn = document.getElementById("yesBtn");

        // Ensure the button stays within visible bounds
        let maxX = window.innerWidth - yesBtn.offsetWidth - 50; // Leave some margin
        let maxY = window.innerHeight - yesBtn.offsetHeight - 50;

        let randomX = Math.max(20, Math.floor(Math.random() * maxX));
        let randomY = Math.max(20, Math.floor(Math.random() * maxY));

        yesBtn.style.left = `${randomX}px`;
        yesBtn.style.top = `${randomY}px`;
        yesBtn.style.fontSize = `${18 + moveCount * 5}px`; // Increase size
        moveCount++;

        document.getElementById("runawaySound").play(); // Play sound effect
    } 
    
    if (moveCount >= maxMoves) {
        let yesBtn = document.getElementById("yesBtn");
        yesBtn.onmouseover = null; // Disable movement
        yesBtn.style.position = "fixed"; // Keep it in place
    }
}
function moveYesButton(x, y) {
    let yesBtn = document.getElementById("yesBtn");
    let btnWidth = yesBtn.offsetWidth;
    let btnHeight = yesBtn.offsetHeight;
    
    // Ensure button stays within visible screen area
    let maxX = window.innerWidth - btnWidth - 20;  // Prevent overflow on right
    let maxY = window.innerHeight - btnHeight - 20; // Prevent overflow on bottom
    
    let safeX = Math.max(10, Math.min(x, maxX));  // Ensure X stays in bounds
    let safeY = Math.max(10, Math.min(y, maxY));  // Ensure Y stays in bounds

    yesBtn.style.left = safeX + "px";
    yesBtn.style.top = safeY + "px";
}


function handleYes() {
    if (moveCount >= maxMoves) {
        document.getElementById("result").innerText = "Yayyyyyyy! 🎉";
        document.getElementById("winSound").play();
        
        // Show the popup
        document.getElementById("popup").style.display = "flex";
    }
}

function handleAnswer(answer) {
    if (answer === "no") {
        document.getElementById("result").innerText = "You chose No! fuck you😞";
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
