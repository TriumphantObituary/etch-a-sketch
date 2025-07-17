initialiseGrid(16, 16);

function initialiseGrid(height, width) {
    const outer = document.querySelector(".outer-container");
    /*outer.setAttribute("style", "width: calc(16 * 20px);");*/
    for (let i = 0; i < height; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        outer.appendChild(container);
        for (let j = 0; j < width; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
}