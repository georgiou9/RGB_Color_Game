
let numberOfSquares = 6
let colors = []
let pickedColor

// selectors
let squares = document.querySelectorAll(".square")
let colorDisplay = document.querySelector(".rgbValue")
let messageDisplay = document.querySelector(".message")
let h1 = document.querySelector("h1")
let resetButton = document.querySelector(".reset")
let modeButtons = document.querySelectorAll(".mode")

init()

function init() {
    // mode buttons and event listeners initialization 
    setupModeButtons()
    // colored squares initialization
    newFunction();
    colorDisplay.textContent = pickedColor
    reset()
}


function newFunction() {
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to square
        squares[i].addEventListener("click", () => {
            // grab color of clicked square
            let clickedColor = squares[i].style.backgroundColor;
            // compare clickedColor to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else {
                squares[i].style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares)
    // pick a new random color from array
    pickedColor = pickColor()
    // change color display to match picked color
    colorDisplay.textContent = pickedColor
    // change squares' colors
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
    h1.style.background = "steelblue"
    messageDisplay.textContent = ""
    resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click", () => {
    reset()
})

function pickColor() {
    let random = Math.floor(Math.random() * colors.length + 1)
    return colors[random]
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
    let colorArray = []
    for (let i = 0; i < num; i++) {
        // get a random color and push it into the Array
        colorArray.push(randomColor())
    }

    return colorArray
}

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random()* 256)
    return `rgb(${red}, ${green}, ${blue})`
}