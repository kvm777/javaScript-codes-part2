const gameBoard = document.body.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.body.querySelector("#scoreText");
// const startBtn = document.body.querySelector("#start");
const resetBtn = document.body.querySelector("#reset");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackGround = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 20;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0 ;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize *4, y:0},
    {x:unitSize *3, y:0},
    {x:unitSize *2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0},
]



window.addEventListener("keydown", changeDirection);

// startBtn.addEventListener("click", gameStart)

resetBtn.addEventListener("click", resetGame)

// for(let i=0; i<=gameBoard.width-unitSize; i+=unitSize){
//     for(let j=0; j<=gameBoard.height-unitSize; j+=unitSize){
//         ctx.strokeRect(i,j, unitSize, unitSize);
//     }
// }
gameStart()

function gameStart(){
    
    running = true;
    scoreText.textContent = score;
    createFood(); 
    drawFood();
    nextTick();
    
}

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 100)
    }
    else{
        displayGameOver();
    }
}

function createFood(){
    function randomFood(min,max){
        let randomNum = Math.round((Math.random() * (max-min) + min)/unitSize)*unitSize;
        return randomNum;
    }
    foodX = randomFood(0, gameWidth-unitSize)
    foodY = randomFood(0, gameHeight-unitSize)
    //console.log(foodX,foodY)
}

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize)
}

function clearBoard(){
    ctx.fillStyle = boardBackGround;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.fillStroke = snakeBorder;
    //creating the snake...with stroke
    snake.forEach(snakePart =>{
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};

function moveSnake(){
    const head = { x: snake[0].x + xVelocity,
                   y: snake[0].y + yVelocity}
    
    //adding new element at the start of snake array
    snake.unshift(head)

    //food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score+=1;
        scoreText.textContent = score;
        createFood();
    }
    else{
        snake.pop()
    }
};

function changeDirection(event){
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);

    switch(true){
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;

        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;

        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0 ;
            break;

        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;

    }
    
};

function checkGameOver(){
    switch(true){
        case(snake[0].x <0 || snake[0].x>gameWidth):
            running = false;
            break;
        case(snake[0].y<0  || snake[0].y > gameHeight):
            running = false;
    }
    for(let i=1; i<snake.length;i+=1){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            running=false;
        }
    }
};

function displayGameOver(){
    ctx.font = "50px MV Boli"
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", gameWidth/2, gameHeight/2);
    running =false;
};

function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize *4, y:0},
        {x:unitSize *3, y:0},
        {x:unitSize *2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0},
    ]
    //scoreText.textContent = score;
    gameStart();
};