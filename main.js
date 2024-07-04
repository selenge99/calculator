const btns = document.getElementsByClassName("too");
const btnsOperator = document.getElementsByClassName("operator");
const equal = document.getElementsByClassName('equal')[0];
const display = document.getElementsByClassName('display')[0];


let operator = ""
let a =0;

for ( let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', ()=> {
        display.textContent += btns[i].textContent
    })
}

for ( let i = 0; i < btnsOperator.length; i++){
    btnsOperator[i].addEventListener('click', ()=> {
     operator = btnsOperator[i].textContent;
     a = display.textContent;
     display.textContent = "";
    })
}

equal.addEventListener("click", ()=>{
    let result =0
    if(operator === "+"){
        result = Number(a) + Number(display.textContent);
    } else if (operator === "-"){
        result = Number(a) - Number(display.textContent);
    } else if ( operator === "*"){
        result = Number(a) * Number(display.textContent);
    } else if (operator === "/"){
        result = Number(a) / Number(display.textContent);
    }

    display.textContent = result;
});





