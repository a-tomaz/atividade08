//Métodos restaurante//
const calcularGorjeta = function() {
    console.log('this conta = ', this.conta);
    if (this.conta < 50) {
        this.gorjeta = this.conta * 0.20; 
    } else if (this.conta >= 50 && this.conta < 200) {
        this.gorjeta = this.conta * 0.15;
    } else {
        this.gorjeta = this.conta * 0.10;
    }
    console.log('this gorjeta = ', this.gorjeta);
    return this.gorjeta;
}
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
    };

    let valorConta;
    let nomeRestaurante;
    
    flag = false;
    do {
        nomeRestaurante = prompt(`Informe o nome do ${i+1}º restaurante:`);
        if (nomeRestaurante) {
            restaurante.nome = nomeRestaurante;
            console.log(`${restaurante.nome}: nome não null`);
            flag = true;
        } else {
            console.log(`Informe o nome do ${i+1}º restaurante novamente:`);
        }
    } while (flag != true); 
    
    flag = false;
    do {
        valorConta = prompt(`Informe o valor do restaurante (${restaurante.nome}):`);
        if (parseFloat(valorConta)) {
            restaurante.conta = parseFloat(valorConta);
            restaurante.calcularGorjeta();
            flag = true;
        } else {
            console.log(`Informe o valor do restaurante (${restaurante.nome}) novamente:`);
        }
    } while (flag != true);

    restaurantes[i] = restaurante;
}

for (const res of restaurantes) {
    console.log('------------------------------');
    console.log("saida restaurantes uhlala!! = ", res);
    console.log('------------------------------');
}
///////////////////////////

///

///////////////////////////