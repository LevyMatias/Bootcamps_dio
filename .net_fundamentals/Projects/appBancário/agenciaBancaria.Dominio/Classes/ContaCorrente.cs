using System;

namespace agenciaBancaria.Dominio.Classes
{
    public class ContaCorrente : ContaBancaria // ContaCorrente herdando de contaBancaria
    {
        public ContaCorrente (Cliente cliente, decimal limite) : base(cliente)
        {
            TaxaManutencao = 0.05M;
            Limite = limite;
        }

        public override void Sacar(decimal valor, string senha)
        {
            senha = Console.ReadLine();
            valor = decimal.Parse(Console.ReadLine());

            if (Senha != senha)
            {
                throw new Exception ("Senha invalida!");
            }

            if ((Saldo + Limite) < valor)
            {
                throw new Exception ("Saldo insuficiente!");
            }

            Senha = senha;
            Saldo -= valor;
        }
        public decimal Limite { get; private set; }
        public decimal TaxaManutencao { get; private set; }
    }
}