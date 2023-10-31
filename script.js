var display = document.getElementById('display');

function adicionar(val) {
    display.value += val;
}

function LimparDisplay() {
    display.value = '';
}

function calcular() {
    display.value = eval(display.value);
}