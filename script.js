var bingo = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27
];
function GenerarCarton() {
    for (var i = 0; i < bingo.length; i++) {
        var cuadro = document.createElement('div');
        var carton = document.getElementById('carton');
        carton.appendChild(cuadro);
        aplicarTexto(cuadro, i);
    }
}
function aplicarTexto(cuadro, i) {
    var texto = document.createElement('p');
    cuadro.appendChild(texto);
    var num = i + 1;
    var numString = document.createTextNode(num);
    texto.appendChild(numString);
    aplicarEstilo(cuadro, i, num);
}
function aplicarEstilo(cuadro, i, num) {
    cuadro.classList.add('cuadro');
    bingo[i] = cuadro;
    var numeroString = num.toString();
    var idCuadro = 'cuadro' + numeroString;
    cuadro.setAttribute('id', idCuadro);
}
GenerarCarton();
