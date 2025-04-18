using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EduSAFe.Enums;
using EduSAFe.Model;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) {}

        // Propriedade do tipo DbSet<Personagem>, que representa a tabela "Personagens" no banco de dados.
        // O DbSet permite realizar operações como inserção, consulta, atualização e remoção de registros.
        public DbSet<User> User {get; set;} 
        public DbSet<Question> Question {get; set;} 
        public DbSet<Answer> Answer {get; set;}
    }
}