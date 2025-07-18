initialiseGrid(16);

function initialiseGrid(size) {
    const height = 800 / size;
    const width = 800 / size;
    const outer = document.querySelector(".outer-container");
    for (let i = 0; i < size; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        outer.appendChild(container);
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.style.cssText = "height: " + height + "px; width: " + width + "px;";
            square.addEventListener("mouseover", paint);
            container.appendChild(square);
        }
    }
}

function resize() {
    let size = prompt("Please enter a number between 2 and 100.");
    if (!isNaN(size) && size >= 2 && size <= 100) {
        const outer = document.querySelector(".outer-container");
        while (outer.firstChild) {
            outer.removeChild(outer.firstChild);
        }
        initialiseGrid(Math.floor(size));
    }
    else if (size !== null) {
        alert("Please enter a number between 2 and 100.");
    }
}

function paint() {
    if (!this.style.backgroundColor) {
        assignColor(this);
    }
    else {
        darkenColor(this);
    }
    
}

function assignColor(square) {
    square.style.backgroundColor = generateColor();
    square.style.opacity = "0.1";
}

function darkenColor(square) {
    if (square.style.opacity < 1) {
        square.style.opacity = parseFloat(square.style.opacity) + 0.1;
    }
}

function generateColor() {
    return rgb(getRandomInt(256), getRandomInt(256), getRandomInt(256));
}

function rgb(r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b +")";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}