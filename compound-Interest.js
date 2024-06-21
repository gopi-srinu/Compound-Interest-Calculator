const initialInvestment = document.getElementById("initialInvestment");
const annualInterestrate = document.getElementById("annualInterestrate");
const timeInyears = document.getElementById("timeInyears");
function calculate() {
    event.preventDefault();
    if (initialInvestment < 0) {
        initialInvestment = 0;
    }
    if (annualInterestrate < 0) {
        annualInterestrate = 0;
    }

    if (timeInyears < 0) {
        timeInyears = 0;
    }
    const principalAmount = Number(initialInvestment.value);
    const interestRate = Number(annualInterestrate.value / 100);
    const time = Number(timeInyears.value);
    const result = principalAmount * Math.pow((1 + interestRate / 1), time);
    const interestAmount = result - principalAmount;
    updateUI(principalAmount, interestAmount, result);
}

function updateUI(principalAmount, interestAmount, result) {
    const spanEl = document.querySelector("span");
    spanEl.style.display = "block";
    spanEl.style.padding = "1rem";
    spanEl.style.display = "flex";
    spanEl.style.justifyContent = "space-around";
    spanEl.style.alignItems = "flex-start";
    spanEl.style.flexDirection = "column";
    spanEl.style.gap = "1rem";
    const interestEarned = document.getElementById("interestEarned");
    const totalValue = document.getElementById("TotalValue");
    const principalAmountValue = document.getElementById("PrincipalAmount");
    interestEarned.innerText = "Interest Earned : " + interestAmount.toFixed(0);
    principalAmountValue.innerText = "Principal Amount: " + principalAmount.toFixed(0);
    totalValue.innerText = "Total Value: " + result.toFixed(0);
}