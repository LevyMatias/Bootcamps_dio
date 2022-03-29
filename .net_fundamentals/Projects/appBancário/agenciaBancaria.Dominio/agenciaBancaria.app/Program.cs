using System;
using agenciaBancaria.Dominio.Classes;

namespace agenciaBancaria.Dominio
{
    class Program
    {
        static void Main(string[] args)
        {
            try 
            {   
                Endereco endereco = new Endereco ("Rua napoleao","07739210","caieiras","sao paulo");
                Cliente cliente = new Cliente ("levy", "48446120852", "568045038",endereco ); 
                ContaCorrente conta = new ContaCorrente(cliente,100);

                Console.WriteLine("Conta "+ conta.Situacao + ": "+ conta.NumeroConta + 
                "-" + conta.DigitoVerificador); 

                string senha = "";
                decimal valor = 0;
                
                conta.Abrir(senha);

                Console.WriteLine("Conta "+ conta.Situacao + ": "+ conta.NumeroConta + 
                "-" + conta.DigitoVerificador + " - " + conta.DataAbertura); 

                conta.Sacar(valor, senha);

                Console.WriteLine("Seu Saldo: "+ conta.Saldo);


            }

            catch (Exception ex)
            {
                Console.WriteLine (ex.Message);
            }


        }
    }
}
