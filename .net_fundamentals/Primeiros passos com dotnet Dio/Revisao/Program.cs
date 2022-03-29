using System;

namespace Revisao
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno[] alunos = new Aluno[5];
            int indiceAluno= 0;
            string opcaoUsuario = ObterOpcaoUsuario();

            while (opcaoUsuario != "s")
            {
                switch (opcaoUsuario)
                {
                    case "1":
                        Console.WriteLine("informe o nome do aluno: ");
                        Aluno aluno = new Aluno();
                        aluno.Name = Console.ReadLine();

                        Console.WriteLine("informe a nota do aluno: ");
                       if (decimal.TryParse(Console.ReadLine(), out decimal nota ))
                       {
                            aluno.Nota = nota;
                       }
                       else 
                       {
                           throw new ArgumentException("Voce deve inserir um numero!!!");
                       }
                        alunos[indiceAluno] = aluno;
                        indiceAluno++;
                        
                        break;

                    case "2":
                        foreach(var a in alunos)
                        {
                            if (!string.IsNullOrEmpty(a.Name))
                            {
                                Console.WriteLine($"Nome: {a.Name}  |  Nota: {a.Nota}");
                            }
                        }
                        break;

                    case "3":
                    
                        decimal notaTotal = 0;
                        var qntd_Aluno = 0;

                        for(int i=0; i < alunos.Length; i++)
                        {
                            if (!string.IsNullOrEmpty(alunos[i].Name))
                            {
                                notaTotal = notaTotal + alunos[i].Nota;
                                qntd_Aluno++;
                            }
                        }
                              var media = notaTotal / qntd_Aluno;
                              Conceito conceitoGeral;

                              if (media <= 2)
                              {
                                  conceitoGeral = Conceito.E;
                              }
                              else if (media < 4)
                              {
                                  conceitoGeral = Conceito.D;
                              }
                              else if (media <= 6)
                              {
                                  conceitoGeral = Conceito.C;
                              }
                              else if (media <= 8)
                              {
                                  conceitoGeral = Conceito.B;
                              }
                              else 
                              {
                                  conceitoGeral = Conceito.A;
                              }


                              Console.WriteLine($"A media da turma foi: {media.ToString("N1")}  CONCEITO GERAL: {conceitoGeral}");
                        break;

                    default:
                        throw new ArgumentOutOfRangeException();
                }
                opcaoUsuario = ObterOpcaoUsuario();
            }
        }
        private static string ObterOpcaoUsuario()
        {
            Console.WriteLine();
            Console.WriteLine("Informe a opcao desejada: ");
            Console.WriteLine("1 - inserir um aluno: ");
            Console.WriteLine("2 - listar alunos: ");
            Console.WriteLine("3 - Calcular media geral: ");
            Console.WriteLine("s - Sair ");

            string opcaoUsuario = Console.ReadLine();
            Console.WriteLine();
            return opcaoUsuario;
        }
    }
}
