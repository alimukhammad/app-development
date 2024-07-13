let shape = document.querySelector('.shapeDiv');
let btnSquare = document.querySelector('.btnSquare');
let btnCircle = document.querySelector('.btnCircle');
let btnRectangle = document.querySelector('.btnRectangle');
let displayShape = document.querySelector('.shapeDiv p');

btnSquare.addEventListener('click', function(){
    console.log('Square');
    shape.classList = "square"
    displayShape.textContent = "square".toUpperCase();
});

btnRectangle.addEventListener('click', function(){
    console.log('Rectangle');
    shape.classList = "rectangle"
    displayShape.textContent = "rectangle".toUpperCase();
});

btnCircle.addEventListener('click', function(){
    console.log('Circle');
    shape.classList = "circle"
    displayShape.textContent = "circle".toUpperCase();
});

// dropdown Menu

let menuBtn = document.querySelector('.menuBtn');
let collapseMenu = document.querySelector('.collapseMenu');

menuBtn.addEventListener('click', function(){
    if(collapseMenu.style.display === "block"){
        collapseMenu.style.display = "none";
        return;
    }

    collapseMenu.style.display = "block";
});
