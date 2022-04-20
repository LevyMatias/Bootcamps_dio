/*Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, 
devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.*/ 

let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {
  var valorInformadoPeloUsuario = gets();  
  if (valorInformadoPeloUsuario > 0){
    quantidadePositivos++;
  }
}
console.log("valores positivos: " + quantidadePositivos);