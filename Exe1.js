function calcula(){
let i
let vet = []
let pares = []
let impares = []
//leitura de dados//

for (i = 0; i < 6; i++) {
    vet.push(Number(prompt("Informe um numero")))
}
//verifica pares e impares//

for (i = 0; i < 6; i++) {
    if (vet[i] % 2 == 0) {
        pares.push(vet[i]);
    }

    else {//impar
        impares.push(vet[i]);
    }
}

alert(pares + " - " + pares.length)
alert(impares + " - " + impares.length)
}