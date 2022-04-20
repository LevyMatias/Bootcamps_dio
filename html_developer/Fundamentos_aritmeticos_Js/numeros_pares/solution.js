/*Crie um programa que leia um número e mostre os 
números pares até esse número, inclusive ele mesmo.*/ 

let n = parseInt(gets());

for (let i = 0; i<=n ; i++) {
  if(i % 2 == 0){
     console.log(i);
  }
}