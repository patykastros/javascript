function calcula(){
    let i
    let vet = []
    let m2 = []
    let m3 = []
    let m2m3 = []
    
    //leitura de dados//
    
    for (i=0; i<7; i++) {
        vet.push(Number(prompt("Informe um numero")))
    }
  
    
    for (i=0; i<7; i++) { //multiplo de 2
        if (vet[i] % 2 == 0) {
            m2.push(vet[i]);
        }

        if (vet[i] % 3 == 0) { //multiplo de 3
            m3.push(vet[i]);
        }

        if ((vet[i] % 2 == 0) && (vet[i] % 3 == 0)){ //multiplo de 2 e 3
            m2m3.push(vet[i]);
        }

       
    }
    
    alert(m2 + " - " + m2.length + " Multiplos de 2")
    alert(m3 + " - " + m3.length + " Multiplos de 3")
    alert(m2m3 + " - " + m2m3.length + " Multiplos de 2 e de 3")
  
    }