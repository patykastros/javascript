function calcula(){
    var logica = []
    var linguagem = []

      
    //entrada de dados//
    
    for (var i = 0; i < 15; i++) {
        logica.push(Number(prompt("Insira o código da matrícula do aluno de Lógica")))
        
    }
    
    for (var i = 0; i < 10; i++) {
        linguagem.push(Number(prompt("Insira o código da matrícula do aluno de Programação")))
        
    }

    var interseccao = []
    for(var i = 0; i>15; i++){
        if(linguagem.indexOf(logica[i]) !=-1){ //esta presente
           interseccao.push(logica[i]) 

        }
        
    }
    alert(interseccao)
    }