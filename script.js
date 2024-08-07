const gridContainer = document.querySelector("#grid-container")
const changeBtn = document.querySelector("#change-btn")
changeBtn.addEventListener('click', () => {
    const numSquares = prompt("Enter the number of squares. Min: 1 Max: 100", "16")
    if (!Number.isInteger(Number(numSquares))) {
        alert("Please enter an integer.")
        return
    }
    else if (numSquares < 1) {
        alert("Please enter a higher integer.")
        return
    }
    else if (numSquares > 100) {
        alert("Please enter a lower integer.")
        return
    }
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    createSquares(Number(numSquares))
})

function createSquares(numSquares) {
    const BORDERWIDTH = 1
    const side = (gridContainer.clientWidth / numSquares) - BORDERWIDTH
    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
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
            const squareBorder = initSquareBorder(side + BORDERWIDTH)
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
    squareBorder.style.width = side + "px"
    squareBorder.style.height = side + 1 + "px"
    return squareBorder
}

createSquares(16)