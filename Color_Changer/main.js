const colors = [0 , 1, 2, 3, 4 ,5 , 6 , 7,"A", "B", "C", "D", "F"]

const btn = document.querySelector('.btn')
const color = document.querySelector('.color')


setIntervalx(()=>{
    btn.addEventListener('click', function(){
        let hexxolor = "#"
        let abdo = randomize()
    
        for(let i = 0; i<6 ; i++){
            hexxolor += colors[randomize()]
    
        }
        document.body.style.backgroundColor = hexxolor
        color.style.backgroundColor = hexxolor
        color.textContent = hexxolor;
        
    })

},1000)



function randomize() {
   return Math.floor(Math.random()*colors.length)
}