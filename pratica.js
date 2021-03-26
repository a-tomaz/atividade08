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
let r = {};

const restaurantes = new Array();

for (let i = 0; i < quantidade; i++) {
    let nome;
    
    flag = false;
    do {
        nome = prompt(`Informe o nome do ${i+1}º restaurante:`);
        if (nome) {
            console.log(`${nome}: nome não null`);
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
            flag = true;
        } else {
            console.log(`Informe o valor do restaurante (${nome}) novamente:`);
        }
    } while (flag != true);

    r.nome = nome;
    r.valor = valor;
    
    console.log("saida r = ", r);
    restaurantes[i] = r;
}

for (const res of restaurantes) {
    console.log(res);
}
///////////////////////////