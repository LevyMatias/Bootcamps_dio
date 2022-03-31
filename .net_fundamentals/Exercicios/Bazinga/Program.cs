using System;

namespace Bazinga
{
    class Program
    {
        static void Main(string[] args)
        {
             int qtdTeste = int.Parse(Console.ReadLine());
             string[] personagens = {"pedra", "papel", "tesoura", "lagarto", "spock"};
            string v1, v2;
            for (int i = 1; i <= qtdTeste ; i++)
            {
                string[] valores = Console.ReadLine().Split(" ");
                v1 = valores[0];
                v2 = valores[1];
                if (v1 == personagens[0] && v2 == personagens[2] || v1 == personagens[0] && v2 == personagens[3] ||
                v1 == personagens[1] && v2 == personagens[0] || v1 == personagens[1] && v2 == personagens[4] ||
                v1 == personagens[2] && v2 == personagens[1] || v1 == personagens[2] && v2 == personagens[3] ||
                v1 == personagens[3] && v2 == personagens[4] || v1 == personagens[3] && v2 == personagens[1] ||
                v1 == personagens[4] && v2 == personagens[2] || v1 == personagens[4] && v2 == personagens[0])
                {
                    Console.WriteLine($"Caso #{i}: Bazinga!");  
                }

                else if (v1 == v2)
                {
                    Console.WriteLine($"Caso #{i}: De novo!");
                }
                else 
                {
                    Console.WriteLine($"Caso #{i}: Raj trapaceou!");

                }
            }

        }
    }
}
