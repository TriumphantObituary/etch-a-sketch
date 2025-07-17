initialiseGrid(100);

function initialiseGrid(quantity) {
    const height = 800 / quantity;
    const width = 800 / quantity;
    const outer = document.querySelector(".outer-container");
    for (let i = 0; i < quantity; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        outer.appendChild(container);
        for (let j = 0; j < quantity; j++) {
            const square = document.createElement("div");
            square.style.cssText = "height: " + height + "px; width: " + width + "px;";
            square.addEventListener("mouseover", paint);
            container.appendChild(square);
        }
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