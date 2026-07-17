// Select all required HTML elements.

const timeInput = document.getElementById("timeInput");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const errorMessage = document.getElementById("errorMessage");
const maxProfit = document.getElementById("maxProfit");
const remainingTime = document.getElementById("remainingTime");
const totalBuildings = document.getElementById("totalBuildings");
const solutionContainer = document.getElementById("solutionContainer");

// GLOBAL VARIABLES

let inputTime = 0;
let bestProfit = -1;
let best = [];

// Removes any validation error message.

function clearError() {
  errorMessage.textContent = "";
}

// Displays validation error.

function showError(m) {
  errorMessage.textContent = m;
}

// Checks whether the user input is valid as per Validation Rules.

function validate() {
  clearError();
  if (timeInput.value.trim() === "") {
    showError("Enter available time.");
    return false;
  }
  inputTime = Number(timeInput.value);
  if (!Number.isInteger(inputTime) || inputTime <= 0) {
    showError("Enter a positive whole number.");
    return false;
  }
  return true;
}

// Swaps two elements inside an array.

function swap(a, i, j) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}

// Creates an array containing every building.

function buildList(t, p, c) {
  let a = [];
  for (let i = 0; i < t; i++) a.push("T");
  for (let i = 0; i < p; i++) a.push("P");
  for (let i = 0; i < c; i++) a.push("C");
  return a;
}

// Calculates the total profit for one construction order.

function profit(order) {
  let now = 0,
    total = 0;
  for (let b of order) {
    if (b === "T") now += 5;
    if (b === "P") now += 4;
    if (b === "C") now += 10;
    if (now <= inputTime) {
      let rem = inputTime - now;
      if (b === "T") total += rem * 1500;
      if (b === "P") total += rem * 1000;
      if (b === "C") total += rem * 2000;
    }
  }
  return total;
}

// Generates every unique construction order using recursion.

function permute(arr, start, t, p, c, used) {
  if (start === arr.length) {
    let pr = profit(arr);
    if (pr > bestProfit) {
      bestProfit = pr;
      best = [];
    }
    if (pr === bestProfit) {
      best.push({ t, p, c, used, rem: inputTime - used, profit: pr, order: arr.join(" → ") });
    }
    return;
  }
  let seen = {};
  for (let i = start; i < arr.length; i++) {
    if (seen[arr[i]]) continue;
    seen[arr[i]] = true;
    swap(arr, start, i);
    permute(arr, start + 1, t, p, c, used);
    swap(arr, start, i);
  }
}

// Main algorithms

// 1. Validate input
// 2. Generate every building combination
// 3. Generate every construction order
// 4. Find maximum profit
// 5. Display results

function solve() {
  if (!validate()) return;
  best = [];
  bestProfit = -1;
  for (let t = 0; t <= Math.floor(inputTime / 5); t++) {
    for (let p = 0; p <= Math.floor(inputTime / 4); p++) {
      for (let c = 0; c <= Math.floor(inputTime / 10); c++) {
        let used = t * 5 + p * 4 + c * 10;
        if (used > inputTime) continue;
        permute(buildList(t, p, c), 0, t, p, c, used);
      }
    }
  }
  render();
}

// Displays/Render the best solution(s)

function render() {
  if (best.length === 0) return;
  let s = best[0];
  maxProfit.textContent = "$" + s.profit;
  remainingTime.textContent = s.rem;
  totalBuildings.textContent = s.t + s.p + s.c;
  solutionContainer.innerHTML = "";
  best.forEach((x, i) => {
    solutionContainer.innerHTML += `<div class="solution-card"><h3>Solution ${i + 1}</h3><p>Order: ${x.order}</p><p>T:${x.t} P:${x.p} C:${x.c}</p><p>Profit: $${x.profit}</p></div>`;
  });
}

// Reset Application fields

function resetFields() {
  timeInput.value = "";
  clearError();
  best = [];
  bestProfit = -1;
  ["maxProfit", "remainingTime", "totalBuildings"].forEach((id) => (document.getElementById(id).textContent = id === "maxProfit" ? "$0" : "0"));
  solutionContainer.innerHTML = "";
}

// Button Event Listeners

calculateBtn.addEventListener("click", solve);
resetBtn.addEventListener("click", resetFields);

// Press Enter to calculate

timeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") solve();
});
