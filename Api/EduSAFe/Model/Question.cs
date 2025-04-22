using System.ComponentModel.DataAnnotations;
using EduSAFe.Enums;
using EduSAFe.Interfaces;

namespace EduSAFe.Model;

public class Question : IEntity
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    [MaxLength(25, ErrorMessage = "Text cannot exceed 25 characters.")]
    [MinLength(3, ErrorMessage = "Text must be at least 3 characters long.")]
    public string Text { get; set; } = null!;
    [Required]
    public List<Answer> Answers { get; set; } = [];

    [Required]
    [MaxLength(3, ErrorMessage = "Text cannot exceed 3 characters.")]
    [MinLength(1, ErrorMessage = "Text must be at least 1 characters long.")]
    public int CorrectAnswerIndex { get; set; } // ? isso não ficaria melhor em uma classe chamada lesson ou algo assim? que teria isso e uma lista de questions?
    [Required]
    public QuestionType Type { get; set; }
}
