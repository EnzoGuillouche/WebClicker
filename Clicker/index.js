// THEME
let currentTheme = "white"; 

const whiteThemeCheckbox = document.getElementById("white-theme-checkbox");
const blackThemeCheckbox = document.getElementById("black-theme-checkbox");

function setTheme() {
    localStorage.setItem("theme", currentTheme);
}

document.body.classList.add(currentTheme);

whiteThemeCheckbox.checked = currentTheme === "white";
blackThemeCheckbox.checked = currentTheme === "black";

whiteThemeCheckbox.addEventListener("change", () => {
    if (whiteThemeCheckbox.checked) {
        currentTheme = "white";
        document.body.classList.remove("black");
        document.body.classList.add("white");
        blackThemeCheckbox.checked = false;
    }
    setTheme();
});

// Event listener to toggle theme when black checkbox is changed
blackThemeCheckbox.addEventListener("change", () => {
    if (blackThemeCheckbox.checked) {
        currentTheme = "black";
        document.body.classList.remove("white");
        document.body.classList.add("black");
        whiteThemeCheckbox.checked = false;
    }
    setTheme();
});

// CLICKER

let counter = 0;
const displayedCounter = document.getElementById(`counter`);
const increase = document.getElementById(`increase`);

function displayCounter(){
    displayedCounter.textContent = counter;
}

increase.onclick = function(){
    counter += click;
    displayCounter();
}

// SIDEBAR

const sidebar = document.getElementById("sidebar");
let sidebarState = false;

document.addEventListener("mousemove", (event) => {
    if (event.clientX < 50){
        sidebar.classList.add("active");
        sidebarState = true;
    } 
    if (event.clientX > 300 && sidebarState === true) {
        sidebar.classList.remove("active");
        sidebarState = false;
    }
});

// POWER-UPS

let autoClick = 0;
const autoClickPu = document.getElementById(`auto-click-box`);
let autoClickCost = 20;
let displayedAutoClickCost = document.getElementById(`auto-click-cost`);
let click = 1;
const clickIncreasePu = document.getElementById(`click-increase-box`);
let clickIncreaseCost = 3;
let displayedClickIncreaseCost = document.getElementById(`click-increase-cost`);

autoClickPu.onclick = function(){
    if (autoClickCost <= counter) {
        autoClick = autoClick > 5 ? autoClick * 2 : ++autoClick;
        counter -= autoClickCost;
        autoClickCost *= 2;
    }
}

clickIncreasePu.onclick = function(){
    if (clickIncreaseCost <= counter) {
        click = click > 5 ? click * 2 : ++click;
        counter -= clickIncreaseCost;
        clickIncreaseCost *= 2;
    }
}

function displayPowerUpsCosts(){
    displayedAutoClickCost.textContent = autoClickCost;
    displayedClickIncreaseCost.textContent = clickIncreaseCost;
}

function displayPowerUps(){
    if (counter < autoClickCost) {
        autoClickPu.style.backgroundColor = `#777777`;
    } else {
        autoClickPu.style.backgroundColor = `#333333`;
    }
    if (counter < clickIncreaseCost) {
        clickIncreasePu.style.backgroundColor = `#777777`;
    } else {
        clickIncreasePu.style.backgroundColor = `#333333`;
    }
    displayPowerUpsCosts();
}

setInterval(() => {
    counter += autoClick;
    displayCounter();
    displayPowerUps();
}, 1000);
