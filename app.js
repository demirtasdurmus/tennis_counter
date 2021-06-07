const p1Display = document.querySelector("#p1display");
const p2Display = document.querySelector("#p2display");




const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const reset = document.querySelector("#resetbutton");
const select = document.querySelector("#select");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

select.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    resetting();
    
})





p1Button.addEventListener("click", function(evt){
    if (!isGameOver) {
        p1Score++;
        p1Display.innerText = p1Score;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
            isGameOver = true;
        }
    }   
})

p2Button.addEventListener("click", function(evt){
    if (!isGameOver) {
        p2Score++;
        p2Display.innerText = p2Score;
        if (p2Score === winningScore) {
            p1Display.classList.add("loser");
            p2Display.classList.add("winner");
            p1Button.disabled = true;
            p2Button.disabled = true;
            isGameOver = true;
        }
    }
    
})

reset.addEventListener("click", resetting);
    
function resetting() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.innerText = p2Score;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
    p1Button.disabled = false;
    p2Button.disabled = false;

    }