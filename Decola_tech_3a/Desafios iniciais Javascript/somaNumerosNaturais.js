/* A sua tarefa neste problema é calcular a soma dos números naturais que 
estão presentes em um determinado intervalo [A, B] inclusive.
Por exemplo, a soma dos números naturais no intervalo [2, 5] é 14 = (2+3+4+5). */

let a = parseInt(gets());
let b = parseInt(gets());
let soma = 0;
for(let i = a;i <= b; i++){
	soma+= i;
}
print(soma);