let shape = document.querySelector('.shapeDiv');
let btnSquare = document.querySelector('.btnSquare');
let btnCircle = document.querySelector('.btnCircle');
let btnRectangle = document.querySelector('.btnRectangle');
let displayShape = document.querySelector('.shapeDiv p');

btnSquare.addEventListener('click', function(){
    shape.classList = "square"
    displayShape.textContent = "square".toUpperCase();
    console.log('Square');
});

btnRectangle.addEventListener('click', function(){
    shape.classList = "rectangle"
    displayShape.textContent = "rectangle".toUpperCase();
    console.log('Rectangle');
});

btnCircle.addEventListener('click', function(){
    shape.classList = "circle"
    displayShape.textContent = "circle".toUpperCase();
    console.log('Circle');
});

