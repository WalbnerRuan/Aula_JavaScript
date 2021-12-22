//var lista = ["maca", "pera", "uva"];
//lista.push = ("salada mista");
//console.log(lista);
///*Alert("Bem vindo " + NOME + ", " + idade1 + ", " + idade2);*/

//ax + b = 0;

//f(1) = a.1 + b;

//var  preco = 2;
//var desconto = 0.2;
//const PRECO = 2;

//var total = PRECO - desconto;

//preco = preco - desconto;


//function soma(a, b) {
//    return a + b; //
//}

//soma(3, 5);


function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++); {
        if(array[i] % 2 === 0){
            evenNums.push(array[i])
        }
    }
    console.log(evenNums);
}

let array = [1, 2, 3, 5, 6, 8];

returnEvenValues(array);
