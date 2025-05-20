using EduSAFe.Models;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Quiz> Quizzes { get; set; }
    public DbSet<FlashCard> FlashCards { get; set; }
}