const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn-infinite");
const color = document.querySelector(".color");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const i = 1;


btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {

        hexColor = hexColor + hex[anyNumber()];
    };

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

})

function changeColor(selectedColor) {
    if (selectedColor === 'Red') {
        color.textContent='red';
        document.body.style.backgroundColor = 'red';
    } else if (selectedColor === 'Blue') {
        color.textContent='blue';
        document.body.style.backgroundColor = 'blue';
    } else if (selectedColor === 'rainbow') {
        color.textContent='rainbow';
    } else {
        color.textContent='random';
        document.body.style.backgroundColor = 'random';
    }
}

function anyNumber() {
    return Math.floor(Math.random() * hex.length);
}

window.setInterval(function(){
    
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i === colors.length){
        i=0;
    }
}, 5000);