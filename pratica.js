//Métodos restaurante//
const calcularGorjeta = function() {
    if (this.conta < 50) {
        this.gorjeta = this.conta * 0.20; 
    } else if (this.conta >= 50 && this.conta < 200) {
        this.gorjeta = this.conta * 0.15;
    } else {
        this.gorjeta = this.conta * 0.10;
    }
    // return this.gorjeta;
}

const calcularTotal = function() { return this.conta + this.gorjeta; }

const toString = function() { return `${this.nome} - [Valor: R$ ${this.conta} | Gorjeta: R$ ${this.gorjeta} | Total: R$ ${this.calcularTotal()}]`; }
///////////////////////////

//Métodos restaurantes//
const gastoTotal = function(){
    let total = 'feijão';
    // for (let restaurante of this) {
    //     total += restaurante.calcularTotal();
    // }
    return total;
}

// const gastoTotal = function() {
//     return this.calcularTotal();
// };
///////////////////////////

//Pegando a quantidade de restaurantes//
let valorQuantidadeRestaurantes;
let flag = false;

do {
    valorQuantidadeRestaurantes = prompt(`Informer a quantidade de restaurantes visitados:`);
    if (parseInt(valorQuantidadeRestaurantes)) {
        valorQuantidadeRestaurantes = parseInt(valorQuantidadeRestaurantes);
        flag = true;
    } else {
        console.log('Informe a quantidade novamente!!');        
    }
} while (flag != true);

const quantidadeRestaurantes = valorQuantidadeRestaurantes;
///////////////////////////

//Pegando dados do restaurante, calculando gorjeta e total//
const restaurantes = new Array();

for (let i = 0; i < quantidadeRestaurantes; i++) { 
    const restaurante = {
        calcularGorjeta,
        calcularTotal,
        toString,
    };

    let valorConta;
    let nomeRestaurante;
    
    flag = false;
    do {
        nomeRestaurante = prompt(`Informe o nome do ${i+1}º restaurante:`);
        if (nomeRestaurante) {
            restaurante.nome = nomeRestaurante;
            flag = true;
        } else {
            console.log(`Informe o nome do ${i+1}º restaurante novamente:`);
        }
    } while (flag != true); 
    
    flag = false;
    do {
        valorConta = prompt(`Informe o valor da conta do restaurante (${restaurante.nome}):`);
        if (parseFloat(valorConta)) {
            restaurante.conta = parseFloat(valorConta);
            restaurante.calcularGorjeta();            
            flag = true;
        } else {
            console.log(`Informe o valor da conta do restaurante (${restaurante.nome}) novamente:`);
        }
    } while (flag != true);

    restaurantes[i] = restaurante;
}

restaurantes[quantidadeRestaurantes] = {gastoTotal};
console.log(restaurantes);
console.log(restaurantes.gastoTotal);

// for (const res of restaurantes) {
//     console.log(restaurantes.gastoTotal());
// }
///////////////////////////

///

///////////////////////////