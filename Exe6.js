function calcula(){

var menor_valor = []
var vendas_total = []
var maior_valor = []
var vendedor = []
var comissao = []
var valor = []
var vendas_total1 = []

//inserir os dados de cada vendedor//

for(i=0;i<10;i++){
    vendedor.push(prompt("Informe o nome do vendedor: "))
    vendas_total.push(prompt("Informe o total de vendas: "))
    comissao.push(prompt("Informe o percentual de comissão: "))
}
for(i=0;i<10;i++){
    alert(vendedor[i] + "R$" + vendas_total[i]  *  comissao[i]/100)
    alert(valor[i] = vendas_total[i] * comissao[i] /100)
}
for(i=0;i<10;i++){
    vendas_total1 = vendas_total1 + vendas_total[i]
    alert(vendas_total1)
}    

var maior_valor = valor[i];
var menor_valor = valor[i];
var maiorvenda = vendedor[i];
var menorvenda = vendedor[i];

for (i=0;i<3;i++){
    if (valor[i] > maior_valor){
        maior_valor = valor [i];
        maiorvenda = vendedor[i];
    }

    if (valor[i] < menor_valor){
        menor_valor = valor[i];
        menorvenda = vendedor [i]
    }

alert("O maior valor e nome de vendedor: " + "R$" + maior_valor + "-----" + maiorvenda)
alert("O menor valor e nome de vendedor: " + "R$" + menor_valor + "-----" + menorvenda)
alert("O total das vendas é: " + vendas_total1)



}




}