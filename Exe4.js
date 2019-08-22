function calcula(){
    let i
    let vet = []
    let igual30 = []
  

   //leitura de dados 
    
    for (i=0; i<15; i++) {
        vet.push(Number(prompt("Informe um numero")))
    }
 
    
    for (i=0; i<15; i++) { //igual a 30
        if (vet[i]  == 30) {
            igual30.push(i);
           
        }

        
    }
    alert(igual30)
    
  
    }