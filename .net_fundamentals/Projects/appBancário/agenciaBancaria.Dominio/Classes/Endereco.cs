using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace agenciaBancaria.Dominio.Classes
{
    public class Endereco
    {
        public Endereco (string logradouro, string cep, string cidade, string estado)
        {
            Logradouro = logradouro.StringVazia();

            Cidade = cidade.StringVazia();

            Estado = estado.StringVazia();

            Cep = cep.StringVazia();
        }
        public string Logradouro { get; private set; }
        public string Cep { get; private set; }
        public string Cidade { get; private set; }
        public string Estado { get; private set; }
    }
}