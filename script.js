const buttons = document.querySelectorAll("button");
const myScoreEl = document.querySelector(".myScore span");
const machineScoreEl = document.querySelector(".machineScore span");
const winnerEl = document.querySelector(".winner");
const machineChoiceEl = document.createElement("p");
machineChoiceEl.classList.add("machineChoice");
document.querySelector("main").appendChild(machineChoiceEl);

const symbols = {
    pedra: "&#x270A;&#x1F3FB;",
    papel: "&#x1F590;&#x1F3FB;",
    tesoura: "&#x270C;&#x1F3FB;"
};

let myScore = 0;
let machineScore = 0;


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const choices = ["pedra", "papel", "tesoura"];
        const machineChoice = choices[Math.floor(Math.random() * choices.length)];
        
        machineChoiceEl.innerHTML = `Computador escolheu: ${symbols[machineChoice]}`;
        
        const result = determineWinner(userChoice, machineChoice);
        
        if (result === "win") {
            myScore++;
            winnerEl.textContent = "Vitória!";
        } else if (result === "lose") {
            machineScore++;
            winnerEl.textContent = "Derrota!";
        } else {
            winnerEl.textContent = "Empate!";
        }

        myScoreEl.textContent = myScore;
        machineScoreEl.textContent = machineScore;
    });
});

function determineWinner(user, machine) {
    if (user === machine) {
        return "draw";
    }
    if (
        (user === "pedra" && machine === "tesoura") ||
        (user === "papel" && machine === "pedra") ||
        (user === "tesoura" && machine === "papel")
    ) {
        return "win";
    }
    return "lose";
}
