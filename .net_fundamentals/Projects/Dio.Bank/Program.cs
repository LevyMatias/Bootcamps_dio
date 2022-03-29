using System;
using System.Collections.Generic;
using static System.Console;  /* Simplificando o uso do Console.Writeline e Console.ReadLine com a Classe
                                 static System.Console, omitindo a repeticao do "Console."
                                 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive */

namespace Dio.Bank
{
    class Program
    {
        static List<Conta> listContas = new List<Conta>();
        static void Main(string[] args)
        {
           string opcaoUsuario = ObterOpcaoUsuario();

			while (opcaoUsuario.ToUpper() != "X")
			{
				switch (opcaoUsuario)
				{
					case "1":
						InserirConta();
						break;
					case "2":
						ListarContas();
						break;
					case "3":
					    Transferir();
						break;
					case "4":
						Sacar();
						break;
					case "5":
						Depositar();
						break;
                    case "C":
						Console.Clear();
						break;

					default:
						throw new ArgumentOutOfRangeException();
				}

				opcaoUsuario = ObterOpcaoUsuario();
			}
			
			WriteLine("Obrigado por utilizar nossos serviços.");
			ReadLine();
        }

        private static void InserirConta()
        {           
            WriteLine("Insira sua conta: ");
            WriteLine();
            
            Write("Tecle 1 para conta fisica ou 2 para conta jurídica: ");
            int inputTipoConta = int.Parse(ReadLine());
            WriteLine();

            Write("Digite o nome do responsavel: ");
            string inputNome = ReadLine();
            WriteLine();

            Write("Digite seu CPF: ");
            string inputCpf = ReadLine();
            WriteLine();

            Write("Saldo inicial: ");
            double inputSaldo = double.Parse(ReadLine());
            WriteLine();

            Write("Credito: ");
            double inputCredito = double.Parse(ReadLine());

            Conta novaConta = new Conta (tipoConta: (TipoConta)inputTipoConta,
                                            nome: inputNome, saldo: inputSaldo,
                                            credito: inputCredito, cpf: inputCpf);
            listContas.Add(novaConta);
        }

        private static void ListarContas()
        {
            if (listContas.Count == 0)
            {
                WriteLine("Não ha conta cadastrada!");
                return;
            }
            for(int i = 0; i < listContas.Count; i++)
            {
                Conta conta = listContas[i];
                Write("#{0} - ", i);
                WriteLine(conta);
                WriteLine();
            }
        }

        private static void Transferir()
        {
            Write("Digite o numero da conta de origem: ");
            int indiceContaOrigem = int.Parse(ReadLine());
            WriteLine();

            Write("Digite um numero de conta para transferencia: ");
            int indiceContaDestino = int.Parse(ReadLine());
            WriteLine();

            Write("Insira um valor a ser transferido: ");
            double valorTransferencia = double.Parse(ReadLine());

            listContas[indiceContaOrigem].TransferirPara(valorTransferencia, listContas[indiceContaDestino]);
        }
        private static void Sacar()
        {
            
            Write("Digite um numero de conta: ");
            int indiceConta = int.Parse(ReadLine());
            WriteLine();

            Write("Insira sua senha: ");
            string inputSenha = ReadLine();

            WriteLine();

            Write("Insira o valor do saque: ");
            double valorSaque = double.Parse(ReadLine());

            listContas[indiceConta].Sacar(valorSaque);
        }
        private static void Depositar()
        {
            Write("Digite um numero de conta: ");
            int indiceConta = int.Parse(ReadLine());
            WriteLine();

            Write("Insira o valor de Deposito: ");
            double valorDepositado = double.Parse(ReadLine());

            listContas[indiceConta].Depositar(valorDepositado);
        }

        private static string ObterOpcaoUsuario()
        {
            WriteLine();
            WriteLine(">>>>>>>>>>>>>>>>>> | DIO BANK | <<<<<<<<<<<<<<<<<");
            WriteLine();
            WriteLine("Informe a opção desejada: ");
            WriteLine();

            WriteLine("1- Inserir um nova conta");
            WriteLine("2- Listar contas");
            WriteLine("3- Transferir");
            WriteLine("4- Sacar");
            WriteLine("5- Depositar");
            WriteLine("C- Limpar Tela");
            WriteLine("X- Sair");
            WriteLine();

            string opcaoUsuario = ReadLine().ToUpper();
            WriteLine();
            return opcaoUsuario;
        }
    }
}
