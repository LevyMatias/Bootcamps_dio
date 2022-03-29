using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace agenciaBancaria.Dominio.Classes
{
    public class Cliente
    {
        public Cliente(string nome, string cpf, string rg, Endereco endereco) // Método construtor
        {
            Nome = nome.StringVazia(); //Propriedade (atributo) Nome recebe a variável nome, se caso for vazia ele retorna o método StringVazia

            Cpf = cpf.StringVazia();

            Rg = rg.StringVazia();

            Endereco = endereco ?? throw new Exception ("Deve ser informado!");
        }

        // Propriedades (atributos)
        public string Nome { get; private set; }
        public string Cpf { get; private set; }
        public string Rg { get; private set; }

        public Endereco Endereco { get; private set; }

    }
}