function calcula(){

//declaração de variáveis//    

    var nomes = []
    var vendas = []
    var comissoes = []

//entrada de dados//
    for (var i = 0;i<5;i++){
        nomes.push(prompt("Informe o nome: "))
        vendas.push(Number(prompt("Informe a venda: ")))
        comissoes.push(Number(prompt("Informe a comissão: ")))
    }

//processamento//
    var receber = []
    for (var i = 0; i<5; i++){
        receber.push(vendas[i] * comissoes[i]/100)
    }
    alert(nome + "\n" + receber)
    alert(nome + "\n" + vendas)

    var maior = receber[0]
    var menor = receber[0]
    var nomeMaior, nomeMenor

    for(var i = 0;i<5; i++){
        if(receber[i] > maior){
            maior = receber[i]
            nomeMaior = nomes[i]
        }

        if( receber[i] < menor){
            menor = receber[i]
            nomeMenor = nome[i]
        }
    }
    alert("Maior valor " + nomeMaior + "-" + maior)
    alert("Menor valor " + nomeMenor + "-" + menor)

}

