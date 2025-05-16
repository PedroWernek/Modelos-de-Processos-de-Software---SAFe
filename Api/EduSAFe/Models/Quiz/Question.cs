using System.ComponentModel.DataAnnotations;

namespace EduSAFe.Models;

public class Question
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string Description { get; set; } = null!;
    [Required]
    public string CorrectAnswer { get; set; } = null!;
    [Required]
    public List<string> IncorrectAnswers { get; set; } = [];
}
