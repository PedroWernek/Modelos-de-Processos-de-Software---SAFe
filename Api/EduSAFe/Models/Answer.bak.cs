using System.ComponentModel.DataAnnotations;

namespace EduSAFe.Models;

public class Answer
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(25, ErrorMessage = "Text cannot exceed 25 characters.")]
    [MinLength(3, ErrorMessage = "Text must be at least 3 characters long.")]
    public string? Text { get; set; }

    public bool IsCorrectAnswer { get; set; }
}