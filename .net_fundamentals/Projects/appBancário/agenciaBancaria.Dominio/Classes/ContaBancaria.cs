using System;
using System.Text.RegularExpressions;

namespace agenciaBancaria.Dominio.Classes
{
    public abstract class ContaBancaria
    {
        public ContaBancaria (Cliente cliente)
        {
            Random random = new Random();
            NumeroConta = random.Next(1000,40000);
            DigitoVerificador = random.Next(0,80);

            Situacao = SituacaoConta.Criada;
            Cliente = cliente ?? throw new Exception ("O cliente deve ser informado!");
        }

        public void Abrir(string senha)
        {
            SetarSenha(senha);

            Situacao = SituacaoConta.Aberta;
            DataAbertura = DateTime.Now;
        }

        private void SetarSenha (string senha)
        {
            senha = Console.ReadLine();

            // Minimo de 8 caracteres, pelo menos uma letra e um numero
            if (!Regex.IsMatch(senha, @"^(?=.*?[a-z])(?=.*?[0-9]).{8,}$"))
            {
                throw new Exception ("Senha invalida!");
            }
            Senha = senha;
        }

        public virtual void Sacar(decimal valor, string senha)
        {
            senha = Console.ReadLine();
            valor = Convert.ToInt32(Console.ReadLine());

            if (Senha != senha)
            {
                throw new Exception ("Senha invalida!");
            }

            if (Saldo < valor)
            {
                throw new Exception ("Saldo insuficiente!");
            }

            Senha = senha;
            Saldo -= valor;
        }

        //propriedades
        public int NumeroConta { get; init; }
        public int DigitoVerificador { get; init; }
        public decimal Saldo { get; protected set; }
        public DateTime? DataAbertura { get; private set; } /* O interrogacao depois do tipo,
                                                             significa que ele pode receber "null" como valor.
                                                             referencia: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types?WT.mc_id=DOP-MVP-5002397 */
        public DateTime? DataEncerramento { get; private set; }
        public SituacaoConta Situacao { get; private set; }
        public String Senha { get; protected set; }
        public Cliente Cliente { get; init; }
    }
}