using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace agenciaBancaria.Dominio.Classes
{
    public class ContaPoupanca : ContaBancaria //classe contaPoupanca herdando da classe contaBancaria
    {
        public ContaPoupanca (Cliente cliente) : base(cliente)
        {
            //0.30%
            PercentualRendimento = 0.003M;
        }

        public decimal PercentualRendimento { get; private set; }
    }
}