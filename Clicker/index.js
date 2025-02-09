// THEME
let currentTheme = localStorage.getItem("theme") || "white"; 

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

let counter = localStorage.getItem("counter");
const displayedCounter = document.getElementById(`counter`);
const increase = document.getElementById(`increase`);

function displayCounter(){
    localStorage.setItem("counter", counter);
    displayedCounter.textContent = counter;
}

displayCounter();

increase.onclick = function(){
    counter++;
    displayCounter();
}

// SIDEBAR

const sidebar = document.getElementById("sidebar");

document.addEventListener("mousemove", (event) => {
    if (event.clientX < 50){
        sidebar.classList.add("active");
    } else {
        sidebar.classList.remove("active");
    }
});
