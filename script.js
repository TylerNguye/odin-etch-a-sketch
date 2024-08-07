const gridContainer = document.querySelector("#grid-container")

function createSquares() {
    const side = gridContainer.clientWidth / 16
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div")
            initSquareAttributes(square, side)
            square.addEventListener('mouseenter', () => {
                if (square.classList.contains("paintable")) {
                    const opacity = Math.min(Number(square.style.opacity) + 0.1, 1)
                    console.log("Opacity: " + opacity)
                    square.style.opacity = opacity
                    console.log("New: " + square.style.opacity)
                }
                square.classList.remove("paintable")
            })
            square.addEventListener('mouseleave', () => {
                square.classList.add("paintable")
            })
            const squareBorder = initSquareBorder(side)
            squareBorder.appendChild(square)
            gridContainer.appendChild(squareBorder)
        }
    }
}

function initSquareAttributes(square, side) {
    square.classList.add("square")
    square.classList.add("paintable")
    square.style.opacity = 0.01
    square.style.width = side + "px"
    square.style.height = side + "px"
}

function initSquareBorder(side) {
    const squareBorder = document.createElement("div")
    squareBorder.classList.add("square-border")
    squareBorder.style.width = side + 1 + "px"
    squareBorder.style.height = side + 1 + "px"
    return squareBorder
}

createSquares()