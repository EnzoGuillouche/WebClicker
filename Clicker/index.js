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
let click = 1;
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
const autoClickPu = document.getElementById(`auto-click`);
const clickIncreasePu = document.getElementById(`click-increase`);

autoClickPu.onclick = function(){
    autoClick = autoClick > 5 ? autoClick * 2 : ++autoClick;
}

clickIncreasePu.onclick = function(){
    click = click > 5 ? click * 2 : ++click;
}

setInterval(() => {
    counter += autoClick;
    displayCounter();
}, 1000);
