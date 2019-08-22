function calcula(){

    var codigos = [] //vetor de codigos
    var estoque = [] //vetor de estoque
    var i

    // entrada de dados
    for(i=0;i<10;i++){
        codigos.push(Number(prompt("Informe o código de produto")));
        estoque.push(Number(prompt("Informe a quantidade do produto")));
    }

    // processamento
    var cliente = Number(prompt('Informe o código do cliente'));
    while (cliente != 0){
        var codProduto = Number(prompt("Informe o código do produto"));
        var qtdProduto = Number(prompt("Informe a quantidade do produto"));
    }
        // retorna posição no vetor
        var auxIndice = codigos.indexOf(codProduto)
        if (auxIndice == -1){ //nao existe
            alert("Produto não existe")
        }
    else {
        // tem em estoque
        if(estoque[auxIndice] - qtdProduto >=0){
            estoque[auxIndice] = estoque[auxIndice] - qtdProduto
            alert ("Produto comprado com sucesso")
        }
        else {
        alert("Não tem estoque")
    }    
    }    
        cliente = Number(prompt("Informe um novo código do cliente. Digite 0 para encerrar"));

    //saída de dados 
    alert("Estoque atualizado " + estoque)
    }
