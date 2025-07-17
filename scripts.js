initialiseGrid(100);

function initialiseGrid(quantity) {
    const height = 800 / quantity;
    const width = 800 / quantity;
    const outer = document.querySelector(".outer-container");
    /*outer.setAttribute("style", "width: calc(16 * 20px);");*/
    for (let i = 0; i < quantity; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        outer.appendChild(container);
        for (let j = 0; j < quantity; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = "height: " + height + "px; width: " + width + "px;";
            container.appendChild(square);
        }
    }
}