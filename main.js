//console.log(document)

let playingField = document.getElementById("playing-field")
let  down = document.getElementById("down")
let  up = document.getElementById("up")
let  right = document.getElementById("right")
let  left = document.getElementById("left")
let ball = document.getElementById("block")

const moveDown = function(){
    let top = parseInt(ball.style.top) || 0
    top += 15
     ball.style.top = top + "px"
}
const moveUp = function(){
    let top = parseInt(ball.style.top) || 0
    top -= 15
     ball.style.top = top + "px"
}


const moveLeft = function(){
    let left = parseInt(ball.style.left) || 0
    left -= 15
        ball.style.left = left + "px"
}

const moveRight = function(){
    let left = parseInt(ball.style.left) || 0 
    left += 15
        ball.style.left = left + "px"
}
//  moveRight()
// console.log(playingField.innerHTML)
//down.innerHTML = ("<button>Hit me</button>")
//console.log(down.innerHTML)
// console.log(playingField)
// console.log(down)