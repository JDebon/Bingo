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
        cuadro.classList.add('cuadro');
        bingo[i] = cuadro;
        var num = i + 1;
        var numeroString = num.toString();
        var idCuadro = 'cuadro' + numeroString;
        cuadro.setAttribute('id', idCuadro);
    }
}
GenerarCarton();
