class contaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(s){
        this._saldo = s;
    }

    sacar(qntd){
        if (qntd > this._saldo) {
			return console.log('saldo insuficiente!');
		}
        this._saldo -= qntd;
        return this._saldo;
    }
    depositar(qntd){
        this._saldo += qntd;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia,numero,cartaoCredito){
    super(agencia,numero)
        this.tipo = 'contaCorrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'contaPoupança';
	}
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

    sacar(qntd){
        if(qntd >= 500){ 
            return console.log('Saque negado! O limite para universitarios é 500');
        }
        else if(qntd > this._saldo){
            return console.log('Saldo insuficiente!');
        }
        this._saldo -= qntd;
        return this._saldo;
    }
}

const Conta = new contaCorrente(1, 155, true);
const Conta2 = new contaUniversitaria(2, 254);
const Conta3 = new contaPoupanca(3, 314);