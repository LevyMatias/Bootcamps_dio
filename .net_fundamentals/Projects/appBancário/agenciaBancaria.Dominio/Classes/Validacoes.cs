using System;

namespace agenciaBancaria.Dominio.Classes
{
    public static class Validacoes
    {
        public static string StringVazia(this string texto) // Método de extensão caso alguma variável do tipo string do construtor estiver vazia ela sera chamada
        {
            return string.IsNullOrWhiteSpace(texto) ?
            throw new Exception("deve ter um nome") : texto;
        }
    }
}