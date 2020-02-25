
const calculator__output= document.querySelector(".calculator__output");
calculator__output.value = "42"

const calculator__btn = document.querySelectorAll(".calculator__input");
calculator__btn.forEach(function(calculator__btn){
    calculator__btn.addEventListener("click",function(){
        calculator__output.value = calculator__btn.value
    }
}

