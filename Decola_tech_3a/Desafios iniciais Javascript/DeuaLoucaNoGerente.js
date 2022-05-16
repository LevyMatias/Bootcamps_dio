/* Faça um algoritmo que leia o desconto e o preço de um 
produto e e mostre o seu novo preço com esse desconto. */

let input = gets();
let desconto = parseInt(input);

input = gets();
let precoAntigo = parseInt(input);
let precoDescontado = precoAntigo - (precoAntigo * desconto) / 100;

print(precoDescontado);