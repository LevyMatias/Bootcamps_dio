// minha solucao
function alunosAprovado(arr, media){
    var aprovados = [];
    for(var i = 0; i<arr.length; i++){
        if(arr[i] >= media){
            aprovados.push(arr[i]);
        }
    }
    return aprovados;
}
console.log(alunosAprovado([5,7,8,4,6,9,2],7));

// solucao do professor
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));