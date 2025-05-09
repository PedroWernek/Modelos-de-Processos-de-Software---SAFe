using System.ComponentModel.DataAnnotations;

namespace EduSAFe.Models;

public class Answer
{
    [Required]
    public string Description { get; set; } = null!;
    public bool IsCorrectAnswer { get; set; }
}