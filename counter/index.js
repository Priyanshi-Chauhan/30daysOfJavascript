let count = document.querySelector("#count");
let c = 0;
let id;
let increasecount = () => {
    c ++;
    count.innerHTML = c ;
     
}
 

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

start.addEventListener('click', () => {
    // because if the counter is still running , and we click on start button
    if (id !== null) {             
        clearInterval(id);
    }
    id = setInterval(increasecount, 1000);
})

stop.addEventListener('click', () => {
    clearInterval(id);
})