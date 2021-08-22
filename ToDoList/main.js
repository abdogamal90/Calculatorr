const but = document.querySelector('#enter')
const input = document.querySelector('#userInput')
ul = document.querySelector('ul')
lis = document.getElementsByTagName('li')

function crt(){
    if(input.value == ""){
        alert("please enter something")
    }
    else{
        var li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ""
    li.addEventListener('click',()=>{
        li.classList.toggle('done')
    })
    li.addEventListener('mouseover',()=>{
        li.style = "transform:scale(0.9); transition:0.2s;"
    })
    li.addEventListener('mouseout',()=>{
        li.style = "transform:scale(1); transition:0.2s;"
    })
    const dbtn = document.createElement('button')
    dbtn.appendChild(document.createTextNode('X'))
    li.appendChild(dbtn)
    function DeleteListItem(){
        li.classList.add('delete')
    }
    dbtn.addEventListener('click',DeleteListItem)

    }
    
    
}
but.addEventListener('click',crt)
function timeer() {
    const today = new Date()
const hour = today.getHours()%12
const minutes = today.getMinutes()
const seconds = today.getSeconds()
const par = document.querySelector('#first')
if(minutes<10){
    minutes = "0" + minutes
}
if(seconds<10){
    seconds =="0" + seconds
}
par.innerHTML =`${hour}:${minutes}:${seconds}`

    
}
window.setInterval(timeer,1000)
