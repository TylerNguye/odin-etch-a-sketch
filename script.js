const gridContainer = document.querySelector("#grid-container")

function createSquares() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            square.classList.addEventListener('mouseenter', () => {
                square.style.opacity = 1
            })
            // square.classList.addEventListener('mouseleave', )
            gridContainer.appendChild(square)
        }
    }
}

createSquares()