$('#calcular').on('click', function (e) {
    e.preventDefault();

    var metros = $('#metros').val();
    metros = metros.replace(',', '.');

    var valor = '';
    var preco = $('#preco');

    $('input:radio[name=tipoPintura]').each(function () {
        if ($(this).is(':checked')) {
            valor = parseInt($(this).val());

            if (valor == 36) {
                calculaCasaNova(metros, preco);
            }
            if (valor == 21) {
                calcularRepintura(metros, preco);
            }
            if (valor == 5) {
                calcularTextura(metros, preco);
            }
            if (valor == 8) {
                calcularGrafiato(metros, preco);
            }
            if (valor == 12) {
                calcularMassaCorrida(metros, preco);
            }
            if (valor == 18) {
                calcularMassaAcrilica(metros, preco);
            }
        }
    });

});

function calculaCasaNova(metros, preco) {
    if (metros >= 35 && metros <= 80) {
        metros *= 35.7;
    } else if (metros > 80 && metros <= 90) {
        metros *= 44.44;
    } else if (metros > 90) {
        metros *= 45;
    } else {
        metros = 'Mínimo 35 metros!';
    }
    imprimirPreco(metros, preco);
}

function calcularRepintura(metros, preco) {
    if (metros < 35) {
        metros = 'Mínimo 35 metros!';
    } else {
        metros *= 22;
    }
    imprimirPreco(metros, preco);
}

function calcularMassaCorrida(metros, preco) {
    if (metros < 35) {
        metros = 'Mínimo 35 metros!';
    } else {
        metros *= 12;
    }
    imprimirPreco(metros, preco);
}

function calcularMassaAcrilica(metros, preco) {
    if (metros < 35) {
        metros = 'Mínimo 35 metros!';
    } else {
        metros *= 18;
    }
    imprimirPreco(metros, preco);
}

function calcularTextura(metros, preco) {
    if (metros < 35) {
        metros = 'Mínimo 35 metros!';
    } else {
        metros *= 5;
    }
    imprimirPreco(metros, preco);
}

function calcularGrafiato(metros, preco) {
    if (metros < 35) {
        metros = 'Mínimo 35 metros!';
    } else {
        metros *= 8;
    }
    imprimirPreco(metros, preco);
}

function imprimirPreco(metros, preco) {

    if (metros === 'Mínimo 35 metros!') {
        preco.text(metros);
    } else {
        preco.text(metros.toFixed(2) + ' reais');
    }
}