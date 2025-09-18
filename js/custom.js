const screen = document.getElementById('calc_screen');
const calculator = document.getElementById('calc_keys');

let expression = "";

calculator.addEventListener('click', (e) => {
    const key = e.target.innerText;

    if(!key) return;

    if(key === "C"){
        expression = "";
        screen.innerText = "0";
    }
    else if(key === "="){
        const result = eval(expression.replace(/÷/g, "/").replace(/x/g, "*"));
        screen.innerText = result;
        expression = result.toString();
    }
    else{
        expression += key;
        screen.innerText = expression
    }
});