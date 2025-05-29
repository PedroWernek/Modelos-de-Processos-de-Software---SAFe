using EduSAFe.Data;
using EduSAFe.Models;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Seed;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using var context = new AppDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>());

        if (!context.Quizzes.Any())
        {
            var quiz1 = new Quiz
            {
                XP = 50,
                MinCorrectAnswers = 7,
                IsInteractiveStory = false,
                Questions = new List<Question>
                {
                    new Question
                    {
                        Description = "Qual é a principal função do SAFe (Scaled Agile Framework)?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Organizar equipes pequenas usando Scrum." },
                            new Answer { Description = "Gerenciar projetos de uma única equipe de forma tradicional." },
                            new Answer { Description = "Ajudar grandes empresas a aplicar métodos ágeis em larga escala.", IsCorrect = true },
                            new Answer { Description = "Focar apenas na entrega final de um produto." }
                        }
                    },
                    new Question
                    {
                        Description = "Quem é o criador do SAFe e quando foi lançada sua primeira versão?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Ken Schwaber, em 2005." },
                            new Answer { Description = "Jeff Sutherland, em 2001." },
                            new Answer { Description = "Dean Leffingwell, em 2011.", IsCorrect = true },
                            new Answer { Description = "Martin Fowler, em 2015." }
                        }
                    },
                    new Question
                    {
                        Description = "Qual das opções abaixo não é um benefício do SAFe?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Entregas mais rápidas e frequentes." },
                            new Answer { Description = "Maior alinhamento entre as equipes e os objetivos da empresa." },
                            new Answer { Description = "Aumento da burocracia e da papelada.", IsCorrect = true },
                            new Answer { Description = "Melhoria contínua da qualidade do produto." }
                        }
                    },
                    new Question
                    {
                        Description = "Em qual cenário o uso do SAFe é mais indicado?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Empresas com menos de 10 funcionários." },
                            new Answer { Description = "Projetos com apenas uma equipe envolvida." },
                            new Answer { Description = "Empresas grandes, com muitos times trabalhando em um produto complexo.", IsCorrect = true },
                            new Answer { Description = "Projetos de escopo fixo e sem mudanças." }
                        }
                    },
                    new Question
                    {
                        Description = "No contexto do SAFe, o que significa ser ágil?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Planejar tudo com antecedência e seguir um cronograma rígido." },
                            new Answer { Description = "Ser flexível, adaptar-se a mudanças e entregar valor constantemente.", IsCorrect = true },
                            new Answer { Description = "Trabalhar de forma isolada, sem colaboração entre equipes." },
                            new Answer { Description = "Focar apenas na documentação detalhada." }
                        }
                    },
                    new Question
                    {
                        Description = "Qual é a principal diferença entre Scrum e SAFe?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Ambos são feitos para empresas enormes." },
                            new Answer { Description = "Scrum é para equipes pequenas; SAFe é para empresas grandes que usam ideias ágeis.", IsCorrect = true },
                            new Answer { Description = "Scrum é um método ágil; SAFe é um método tradicional." },
                            new Answer { Description = "SAFe é uma versão simplificada do Scrum." }
                        }
                    },
                    new Question
                    {
                        Description = "Por que o SAFe foi criado?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Para complicar o trabalho de grandes empresas." },
                            new Answer { Description = "Para que times pequenos funcionem isoladamente." },
                            new Answer { Description = "Para organizar a confusão ao aplicar métodos ágeis em várias equipes.", IsCorrect = true },
                            new Answer { Description = "Para substituir todos os outros métodos de gestão." }
                        }
                    },
                    new Question
                    {
                        Description = "O que significa dizer que o SAFe coloca 'todos na mesma página'?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Que todas as equipes leem o mesmo livro." },
                            new Answer { Description = "Que as equipes trabalham com os mesmos objetivos, evitando retrabalho.", IsCorrect = true },
                            new Answer { Description = "Que a comunicação é feita por meio de muitos documentos." },
                            new Answer { Description = "Que cada equipe trabalha com objetivos próprios e independentes." }
                        }
                    },
                    new Question
                    {
                        Description = "A metáfora da empresa como uma 'grande orquestra' no SAFe ilustra:",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "A necessidade de cada músico (time) tocar sozinho." },
                            new Answer { Description = "A importância de ter uma partitura e um maestro (o SAFe) para coordenar os times.", IsCorrect = true },
                            new Answer { Description = "Como seguir um roteiro rígido sem adaptações." },
                            new Answer { Description = "Que o SAFe serve apenas para empresas de música." }
                        }
                    },
                    new Question
                    {
                        Description = "Se uma empresa como Amazon ou Google quer adotar métodos ágeis, qual modelo é mais indicado?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Scrum para cada equipe isoladamente." },
                            new Answer { Description = "O modelo cascata de desenvolvimento." },
                            new Answer { Description = "O SAFe (Scaled Agile Framework).", IsCorrect = true },
                            new Answer { Description = "Gestão tradicional de projetos." }
                        }
                    }
                }
            };

            var quiz2 = new Quiz
            {
                XP = 150,
                MinCorrectAnswers = 7,
                IsInteractiveStory = true,
                Questions = new List<Question>
                {
                    new Question
                    {
                        Description = "A ConexaCorp está completamente desorganizada. A diretoria quer implantar SAFe imediatamente. O que você faz?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Inicia o PI Planning com todos os times já na próxima semana." },
                            new Answer { Description = "Realiza um workshop de Leading SAFe com os principais stakeholders.", IsCorrect = true }
                        }
                    },
                    new Question
                    {
                        Description = "Para estruturar os ARTs, você precisa entender como a empresa entrega valor. O que faz?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Mapeia os Value Streams com líderes de negócio e tecnologia.", IsCorrect = true },
                            new Answer { Description = "Agrupa os times por afinidade técnica (front, back, QA)." }
                        }
                    },
                    new Question
                    {
                        Description = "Você tem três Value Streams identificados. Como montar os ARTs?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Monta os ARTs com times que atuam em cada Value Stream.", IsCorrect = true },
                            new Answer { Description = "Junta todos os times num único ART para facilitar gestão." }
                        }
                    },
                    new Question
                    {
                        Description = "Os gerentes estão inseguros com a nova estrutura. Como conduzir?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Explica os novos papéis no SAFe, como RTE, Product Manager e System Architect.", IsCorrect = true },
                            new Answer { Description = "Mantém os cargos antigos e ajusta o SAFe por fora." }
                        }
                    },
                    new Question
                    {
                        Description = "O primeiro PI Planning chegou. O que fazer na abertura?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Compartilha o Business Context e a visão do produto.", IsCorrect = true },
                            new Answer { Description = "Começa direto com os times planejando suas Sprints." }
                        }
                    },
                    new Question
                    {
                        Description = "Você tem mais Features do que capacidade. Como priorizar?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Usa WSJF (Weighted Shortest Job First).", IsCorrect = true },
                            new Answer { Description = "Escolhe as mais pedidas pelos times técnicos." }
                        }
                    },
                    new Question
                    {
                        Description = "Durante o PI Planning, surgem muitos riscos. O que você faz?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Conduz a cerimônia ROAM (Resolve, Own, Accept, Mitigate).", IsCorrect = true },
                            new Answer { Description = "Pede que cada time resolva seus próprios riscos." }
                        }
                    },
                    new Question
                    {
                        Description = "No meio do PI, um time está atrasado. O que fazer?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Leva o problema para o Scrum of Scrums e busca apoio dos outros times.", IsCorrect = true },
                            new Answer { Description = "Pressiona o time para correr e compensar na entrega." }
                        }
                    },
                    new Question
                    {
                        Description = "Você quer avaliar a efetividade da transformação. O que acompanha?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Métricas como Lead Time, Velocity e alinhamento com OKRs.", IsCorrect = true },
                            new Answer { Description = "Apenas se as entregas estão 'dentro do prazo'." }
                        }
                    },
                    new Question
                    {
                        Description = "A empresa quer incluir novos projetos. Como garantir alinhamento com SAFe?",
                        Answers = new List<Answer>
                        {
                            new Answer { Description = "Passa os novos projetos pelo Lean Portfolio Management.", IsCorrect = true },
                            new Answer { Description = "Começa os projetos assim que aprovados pela diretoria." }
                        }
                    }
                }
            };

            context.Quizzes.AddRange(quiz1, quiz2);
            context.SaveChanges();

            context.FlashCards.AddRange(
                new FlashCard { LessonId = quiz1.Id, Name = "O que é o SAFe?", Description = "O SAFe ajuda grandes empresas a aplicar métodos ágeis de forma coordenada entre vários times." },
                new FlashCard { LessonId = quiz1.Id, Name = "SAFe vs. Scrum", Description = "Scrum é para equipes pequenas; SAFe coordena equipes em larga escala." },
                new FlashCard { LessonId = quiz1.Id, Name = "Quando usar SAFe", Description = "SAFe é ideal para empresas com múltiplos times e produtos complexos." },
                new FlashCard { LessonId = quiz1.Id, Name = "Ser ágil no SAFe", Description = "Ser ágil é adaptar-se, colaborar e entregar valor constantemente." },
                new FlashCard { LessonId = quiz1.Id, Name = "SAFe como orquestra", Description = "No SAFe, os times trabalham juntos como músicos seguindo uma partitura comum." },

                new FlashCard { LessonId = quiz2.Id, Name = "Começando a transformação", Description = "Realize workshops como o Leading SAFe para alinhar lideranças antes de implantar." },
                new FlashCard { LessonId = quiz2.Id, Name = "Value Streams", Description = "Mapeie fluxos de valor antes de montar os ARTs." },
                new FlashCard { LessonId = quiz2.Id, Name = "ARTs bem definidos", Description = "Monte ARTs com base nos Value Streams para alinhamento real." },
                new FlashCard { LessonId = quiz2.Id, Name = "Cerimônias SAFe", Description = "O PI Planning e o Scrum of Scrums garantem cadência e colaboração entre os times." },
                new FlashCard { LessonId = quiz2.Id, Name = "Gestão estratégica", Description = "Use Lean Portfolio Management para priorizar investimentos com base em valor." }
            );

            context.SaveChanges();
        }

        if (!context.Narrativas.Any())
        {
            var narrativa = new Narrativa
            {
                XP = 100,
                Texto = @"A TechNova crescia rápido. Novos produtos surgiam todo mês. Mas os times viviam em conflito. Entregas atrasavam. Retrabalho era constante.
        O CEO chamou um especialista em agilidade. Ele sugeriu SAFe.

        Primeiro, mapearam os Value Streams — os fluxos de valor, da ideia até o cliente. Viram que muitos times atuavam no mesmo fluxo, mas sem coordenação.

        O especialista criou três Agile Release Trains (ARTs). Cada ART reunia times que trabalhavam juntos num mesmo produto. Um ART é como um trem: todos embarcam juntos, seguem a mesma rota e entregam valor no mesmo ritmo.

        Para começar, fizeram o primeiro PI Planning — um evento de dois dias, com todos os times do ART. Planejaram os próximos 10 sprints juntos. Alinharam dependências. Identificaram riscos. Deram nome ao objetivo comum: “Melhorar a jornada do cliente em 90 dias.”

        No dia a dia, líderes dos times se reuniam no Scrum of Scrums. Era um encontro rápido, focado em resolver impedimentos entre equipes. Se um time travava, os outros ajudavam.

        Ao nível estratégico, o especialista implantou o Lean Portfolio Management. Eles passaram a priorizar os investimentos com base em valor para o negócio, não só por urgência. Acabou a corrida por recursos. Tudo passou a ser alinhado com os objetivos da empresa.

        Três meses depois, os resultados apareceram. Entregas sincronizadas. Feedback do cliente mais rápido. Engajamento alto entre os times.

        A TechNova não virou ágil da noite para o dia. Mas com SAFe, encontrou ritmo, foco e alinhamento."
            };

            context.Narrativas.Add(narrativa);
            context.SaveChanges();

            var flashcardsNarrativa = new List<FlashCard>
            {
                new FlashCard { LessonId = narrativa.Id, Name = "O que são ARTs?", Description = "Trens ágeis que coordenam vários times em um mesmo produto." },
                new FlashCard { LessonId = narrativa.Id, Name = "PI Planning", Description = "Evento para planejamento conjunto de 10 sprints." },
                new FlashCard { LessonId = narrativa.Id, Name = "Scrum of Scrums", Description = "Reuniões para resolver impedimentos entre times." },
                new FlashCard { LessonId = narrativa.Id, Name = "Lean Portfolio Management", Description = "Priorização de investimentos com base em valor." },
                new FlashCard { LessonId = narrativa.Id, Name = "Resultados do SAFe", Description = "Entregas sincronizadas e times mais engajados." }
            };

            context.FlashCards.AddRange(flashcardsNarrativa);
            context.SaveChanges();
        }
    }
}