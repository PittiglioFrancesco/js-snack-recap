// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// ex

let max = parseInt(prompt("Quanti elementi vuoi nel vettore?"))

let vet = [];
vet = randomGen(max);
console.log(vet);

var b = inputB();
var a = inputA();

let newVet = [];
newVet = riempi(vet, a, b);

document.getElementById("demo").innerHTML = "I numeri dell'array dalla posizione " + a + " alla posizione " + b + " sono: " + newVet + ". ";

// funzioni

function inputB (){
    do{
        if ((b <= 0) || (b > 100)) {
            alert("Devi inserire un numero compreso tra 1 a 100");
        }
        var n = parseInt(prompt("Inserisci il numero della posizione di fine(da 1 a 100)"));
    } while ((b <= 0) || (b > 100));

    return n;
}

function inputA (){
    if ((a > b)) {
        alert("La posizione di inizio deve essere minore di quella di fine")
    } else if (a <= 0) {
        alert("La posizione d'inizio deve essere maggiore di 0")
    }
    do{
        var n = parseInt(prompt("Inserisci il numero della posizione di fine(da 1 a 100)"));
    } while ((a > b) || (a <= 0));

    return n;
}

function randomGen(z){

    var array = [];

    for (let i = 0; i < z; i++){
        array.push(parseInt(Math.floor(Math.random() * 101)));
    }

    return array;
}

function riempi(j, x, y){

    var newArray = [];

    // for (var i = x - 1; i < y; i++) {
    //     newArray.push(j[i]); 
    // }

    j.forEach((item,index) => {
        if(index >= x && index <= y){
          newArray.push(item)
        }
      });

    return newArray;

}