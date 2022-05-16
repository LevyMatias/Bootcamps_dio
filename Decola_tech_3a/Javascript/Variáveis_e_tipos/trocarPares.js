/* Troque todos os elementos pares e diferentes de zero de 
um array pelo número 0. Se o array for vazio, retorne -1. */

// solucao do professor
function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
            
		}
	}
	console.log(array);
}
substituiNumerosPares([2, 0, 3, 5]);

// minha solucao do algoritmo
function trocarPares(){
    var arr = [false];
    if(!arr.length){
        return -1;
    } 

    for(var i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0 && arr[i] !== 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(trocarPares());