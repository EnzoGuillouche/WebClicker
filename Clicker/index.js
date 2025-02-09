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
