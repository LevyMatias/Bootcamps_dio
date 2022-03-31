using System;

namespace competiçãoCoxinha
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] spacing = Console.ReadLine().Split(" ");
            double qtdCoxinha = double.Parse(spacing[0]);
            double qtdPessoas = double.Parse(spacing[1]);
            double media = (qtdCoxinha / qtdPessoas);

            Console.WriteLine(media.ToString("N2"));
        }
    }
}
