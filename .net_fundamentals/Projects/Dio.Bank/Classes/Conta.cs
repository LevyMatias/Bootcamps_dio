using System;
using static System.Console;  /* Simplificando o uso do Console.Writeline e Console.ReadLine com a Classe
                                 static System.Console, omitindo a repeticao do "Console."*/
                                 //https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive
namespace Dio.Bank
{
    public class Conta
    {
        public Conta (TipoConta tipoConta, string nome, string cpf, double saldo, double credito) // Construtor
        {
            TipodeConta = tipoConta;
            Nome = nome;
            Cpf = cpf;
            Saldo = saldo;
            Credito = credito;
        }
        public bool Sacar (double saqueValor)
        {
            // validação de Saldo
            if (Saldo - saqueValor < (Credito*-1))
            {
                WriteLine("Seu Saldo não é suficiente!");
                return false;
            }
            Saldo -= saqueValor;
            WriteLine();
            WriteLine("{0} >> O seu saldo atual é de R$ {1}",Nome,Saldo);
            return true;
        }

        public void Depositar (double valorDepositado)
        {
            Saldo += valorDepositado;
            WriteLine();
            WriteLine("{0} >> O seu saldo atual é de R$ {1}",Nome,Saldo); 
        }

        public void TransferirPara (double valorTransferencia, Conta contaDestino)
        {
            if (Sacar(valorTransferencia))
            {
                contaDestino.Depositar(valorTransferencia);
            }
        }

        public override string ToString()
        {
            string retorna = "";
            retorna += "Tipo de Conta: " + TipodeConta + " | ";
            retorna += "Nome: " + Nome + " | ";
            retorna += "CPF: " + Convert.ToUInt64(Cpf).ToString(@"000\.000\.000\-00")+" | ";
            retorna += "Seu Saldo: R$ " + Saldo + " | ";
            retorna += "Credito: R$ " + Credito + " | ";
            return retorna;
        }
        //Propriedades
        private TipoConta TipodeConta{ get; set; }     
        private string Nome{ get ; set; }
        private string Cpf { get; set; }
        private double Saldo { get; set; }
        private double Credito { get; set; }

    }
}