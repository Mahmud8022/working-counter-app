let counter = 0;

function increaaseCounter() {
    counter++;
    displayCounter();
}

function decreaseCounter() {
    if (counter > 0) {
        counter--;
         displayCounter()

    }
}

function displayCounter() {
    document.getElementById("counterDisplay").innerText = counter;
}

// Page load হলে run হবে
displayCounter();