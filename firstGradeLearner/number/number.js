let btn = document.querySelector('.backBtn');

btn.addEventListener('click', function() {
    window.location.href = '../index.html';
});


let num1 = document.querySelector('#num1');

num1.addEventListener('click', function() {

    let active = this.classList.toggle('active');
    
    if(active) {
        this.textContent = '';
        this.textContent = '<image src="../images/1.jpg" alt="1">';
    } else {    
        this.textContent = '1';
    }
});