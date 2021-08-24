var buttons = document.querySelectorAll('.btn')
const value = document.querySelector('span')
var count = 0;
buttons .forEach(function(button){
    button.addEventListener('click', ()=>{
    if(button.classList.contains('Decrease')){
        count--;
        value.textContent = count
    }
    else if(button.classList.contains('Increase')){
        count++;
        value.textContent = count
    }
    else{
        count = 0;
        value.textContent = count
    }
})
})
