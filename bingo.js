var fila;
var fruto;




var $texto = document.getElementById("texto");




function aleatorio(min, max) {
  
        return Math.floor(Math.random() * (max - min + 1)) + min;

}



var siguienteFicha = function() {

    fila = null;
    fruto = null;


    fila = aleatorio(1,5);
    fruto = aleatorio(1,12);


    //FILA

    if(fila == 1){fila = "B";}
    if(fila == 2){fila = "I";}
    if(fila == 3){fila = "N";}
    if(fila == 4){fila = "G";}
    if(fila == 5){fila = "O";}        


    //FRUTO

    if(fruto == 1){fruto = "amor";}
    if(fruto == 2){fruto = "alegria";}
    if(fruto == 3){fruto = "paz";}
    if(fruto == 4){fruto = "bondad";}
    if(fruto == 5){fruto = "paciencia";}
    if(fruto == 6){fruto = "longaminidad";}
    if(fruto == 7){fruto = "benignidad";}
    if(fruto == 8){fruto = "mansedumbre";}
    if(fruto == 9){fruto = "fidelidad";}
    if(fruto == 10){fruto = "castidad";}
    if(fruto == 11){fruto = "modestia";}
    if(fruto == 12){fruto = "templanza";}


    $texto.innerHTML = `${fila} - <img src="IMG/${fruto}.jpg" style="font-size:30pt;" alt="${fruto}" width="250" height="200"/><br>${fruto}`;
}


