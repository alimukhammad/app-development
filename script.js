let shape = document.querySelector('.shapeDiv');
let btnSquare = document.querySelector('.btnSquare');
let btnCircle = document.querySelector('.btnCircle');
let btnRectangle = document.querySelector('.btnRectangle');


btnCircle.addEventListener('click', function(){
    console.log('Circle');
});

btnRectangle.addEventListener('click', function(){
    console.log('Rectangle');
});

btnSquare.addEventListener('click', function(){
    shape.classList = "square"
    console.log('Square');
});