/* Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar) */

// solução do professor
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');

// solução do professor
function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');

// minha solucao do algoritmo
function revert(s,s1) {
    var reverseWord = s1.split('').reverse('').join('');
    if(s === reverseWord){
        console.log(reverseWord); // palavra invertida
        return `${s1}, é um palindromo de ${s}!`;
    }
    else{
        return false;
    }
}
console.log(revert("amor","roma")); 