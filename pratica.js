//Pegando a quantidade de restaurantes//
let v;
let flag = false;
do {
    v = prompt(`Informer a quantidade de restaurantes visitados:`);
    if (parseInt(v)) {
        v = parseInt(v);
        flag = true;
    } else {
        console.log('Informe a quantidade novamente!!');        
    }
} while (flag != true);
const quantidade = v;
///////////////////////////

//Pegando dados do restaurante//
let restaurante = {};

let restaurantes = new Array;

// flag = false;
for (let i = 0; i < quantidade; i++) {
    let nome;
    
    flag = false;
    do {
        nome = prompt(`Informe o nome do ${i+1}º restaurante:`);
        if (nome) {
            console.log(`${nome}: nome não null`);
            restaurante.nome = nome;
            flag = true;
        } else {
            console.log(`Informe o nome do ${i+1}º restaurante novamente:`);
        }
    } while (flag != true);
    
    let valor;
    
    flag = false;
    do {
        valor = prompt(`Informe o valor do restaurante (${nome}):`);
        if (parseFloat(valor)) {
            valor = parseFloat(valor);
            console.log(`${valor}: valor válido`);
            restaurante.valor = valor;
            flag = true;
        } else {
            console.log(`Informe o valor do restaurante (${nome}) novamente:`);
        }
    } while (flag != true);

    console.log(restaurante);
    // restaurantes.push(restaurante);
}

for (const res of restaurantes) {
    console.log(res);
}
///////////////////////////