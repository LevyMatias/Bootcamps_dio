using System;

namespace DividindoXporY
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = Int32.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] line = Console.ReadLine().Split(" ");
                double x = double.Parse(line[0]);
                double y = double.Parse(line[1]);
                if (y == 0)
                {
                    Console.WriteLine("Impossivel fazer a divisão!");
                }
                else 
                {
                    double divisão = x / y;
                    Console.WriteLine(divisão.ToString("N1"));
                }
            }
        }
    }
}
 