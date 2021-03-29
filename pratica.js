//Métodos restaurante//
const calcularGorjeta = function() {
    if (this.conta < 50) {
        this.gorjeta = this.conta * 0.20; 
    } else if (this.conta >= 50 && this.conta < 200) {
        this.gorjeta = this.conta * 0.15;
    } else {
        this.gorjeta = this.conta * 0.10;
    }
    return this.gorjeta;
}

const calcularTotal = function() { return this.conta + this.gorjeta; }

const toString = function() { return `${this.nome} - [Valor: R$ ${this.conta} | Gorjeta: R$ ${this.gorjeta} | Total: R$ ${this.calcularTotal()}]`; }
///////////////////////////

//Métodos restaurantes//
const gastoTotal = function(){
    let total = 0;
    for (let restaurante of this) {
        total += restaurante.calcularTotal();
    }
    return total;
}

const medidaGastoTotal = function(){
    let media = 0;
    for (let restaurante of this) {
        media += restaurante.calcularTotal();
    }
    media /= quantidadeRestaurantes
    return media;
}

const maiorGastoTotal = function(){
    let maior = 0;
    let saida;
    for (let restaurante of this) {
        if (restaurante.calcularTotal() > maior) {
            saida = restaurante;
            maior = restaurante.calcularTotal();
        }
    }
    return saida;
}

const imprimeDetalhes = function(){ 
    console.log(`Restaurantes visitados no feriado: ${quantidadeRestaurantes}`);
    console.log(`Lista de gastos:`);
    for (let restaurante of this) {
        console.log(`   ${restaurante.toString()}`);
    }
    console.log(`Total gasto: ${this.gastoTotal()}`);
    console.log(`Média de gastos: R$ ${this.mediaGastoTotal()}`);
    console.log(`Restaurante com maior gasto total: ${this.maiorGastoTotal().nome} (R$ ${this.maiorGastoTotal().conta})`);
}
///////////////////////////

//Pegando a quantidade de restaurantes//
let valorQuantidadeRestaurantes;
let flag = false;

do {
    valorQuantidadeRestaurantes = prompt(`Informe a quantidade de restaurantes visitados:`);
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
///////////////////////////

//Adicionanado métodos ao Array e mostrando os dados//
restaurantes.gastoTotal = gastoTotal;
restaurantes.mediaGastoTotal = medidaGastoTotal;
restaurantes.maiorGastoTotal = maiorGastoTotal;
restaurantes.imprimeDetalhes = imprimeDetalhes;
    
restaurantes.imprimeDetalhes();
///////////////////////////