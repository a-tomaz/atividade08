// Prática 6

function calculaGorjeta(total) {
    if (total < 50) {
        return total * 0.20;
    } else if (total >= 50 && total < 200) {
        return total * 0.15;
    } else {
        return total * 0.10;
    }
}

let imprimeDetalhes = (restaurante, valor, gorjeta) => console.log(`${restaurante} - [Valor: R$ ${valor} | Gorjeta: R$ ${gorjeta} | Total: R$ ${valor + gorjeta}]`);

function recebeDetalhes(restaurantes, valores, gorj){
    let cont = 0;
    while (cont < 3) {
        console.log(imprimeDetalhes(restaurantes[cont], valores[cont], gorj[cont]));
        cont++;
    }
}

const nomesRestaurante = new Array;
const valoresTotais = new Array;
const gorjetas = new Array;

let i = 0;
while (i < 3) {
    nomesRestaurante[i] = prompt(`Informe o nome do ${i+1}º restaurante:`);
    console.log(nomesRestaurante[i]);
    i++;
}

i = 0;
let flag = false;
while (i < 3) {
    do {
        let valor = prompt(`Informe o valor total do ${i+1}º restaurante [${nomesRestaurante[i]}]:`);
        if (parseFloat(valor)) {
            valoresTotais[i] = parseFloat(valor);
            flag = true;
        } else {
            console.log('Informe o valor novamente!!');        
        }
    } while (flag != true);
    flag = false;
    console.log(valoresTotais[i]);
    i++;
}

i = 0;
while (i < 3) {
    gorjetas[i] = calculaGorjeta(valoresTotais[i]);
    console.log(calculaGorjeta(valoresTotais[i]));
    i++;
}

recebeDetalhes(nomesRestaurante, valoresTotais, gorjetas);

