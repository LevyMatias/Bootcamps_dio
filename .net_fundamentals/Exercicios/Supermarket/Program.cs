using System;
using System.Collections.Generic;

namespace Supermarket
{
    class Program
    {
        static void Main(string[] args)
        {
            int limit = int.Parse(Console.ReadLine());
            List<string> list = new List<string>();

            for (int i = 0; i < limit; i++)
            {
                if (i > 100) return;
                string[] line = Console.ReadLine().Split(" ");

                for (int item = 0; item < line.Length; item++)
                {
                    if (item > 1000) return;
                    if (!list.Contains(line[item]))
                    {
                        list.Add(line[item]);
                    }
                }

                list.Sort();
                Console.WriteLine(string.Join(" ", list));
                list.Clear();
            }
        }
    }
}
