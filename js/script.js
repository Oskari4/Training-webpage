let value_1 = 0;
let value_2 = 25.2;
let oma_muutuuja_1 = "galleria";
let oma_muuttuja_2 = 'c';

let galleria_elementti = document.getElementById("image_gallery");

const animatedElement = document.getElementById("animatedElement");
const clickCountElement = document.getElementById("clickCount")
let clickCount = 0;

animatedElement.addEventListener('click', function() {
    
    clickCount++;

    
    clickCountElement.innerText = clickCount;

    
    if (clickCount % 2 === 1) {
        animatedElement.style.backgroundColor = 'red';
    } else {
        animatedElement.style.backgroundColor = 'blue';
    }
});


