/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
Crie seus próprios objetos para esta atividade! */

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.firstName} terá ${
		this.idade + anos
	} anos de idade.`;
}
const person = {
    firstName:"John",
    idade: 25,
}

console.log(calculaIdade.apply(person, [10]));

const carro = {
    firstName:"Toyota",
    ano: 2019,
    auto: function () {
        return `${this.firstName} é do ano ${this.ano}`
    }
}
console.log("\n"+ carro.auto.call(carro));