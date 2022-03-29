using System;
using System.Collections.Generic;
using System.Globalization;

namespace ValidacaoNotas
{
    class Program
    {
        static void Main(string[] args)
        {

            double opcaoUsuario = 1.00;
            do
            {
                List<double> notasValidas = new List<double> { };
                double somaDasNotas = 0, media;

                while (notasValidas.Count != 2)
                {
                    double nota = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

                    if (nota < 0.0 || nota > 10.0)
                    {
                        Console.WriteLine("nota invalida");
                    }
                    else
                    {
                        notasValidas.Add(nota);
                    }
                }

                foreach (double nota in notasValidas)
                {
                    somaDasNotas += nota;
                }

                media = somaDasNotas / notasValidas.Count;
                Console.WriteLine("media = {0}", media.ToString("F2", CultureInfo.InvariantCulture));

                do
                {
                    Console.WriteLine("novo calculo (1-sim 2-nao)");
                    opcaoUsuario = double.Parse(Console.ReadLine());
                } while ((opcaoUsuario != 1 && opcaoUsuario != 2) && opcaoUsuario != 2);

            } while (opcaoUsuario != 2.00);
        }
    }

}
