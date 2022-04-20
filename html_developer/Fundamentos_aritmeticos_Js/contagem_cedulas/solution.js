/* Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis 
(cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 
100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias. */

let n = parseInt(gets());
let quantidadeNotas = 0;
let cedulas = [100,50,20,10,5,2,1];

function contaNotas(valor){
  quantidadeNotas = parseInt(n/valor);

  n -= quantidadeNotas * valor;

  console.log(`${quantidadeNotas} nota(s) de R$ ${valor},00`);
}
console.log(n);

for(let cedula in cedulas){
    contaNotas(cedulas[cedula]);
}