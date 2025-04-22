using System.ComponentModel.DataAnnotations;
using EduSAFe.Enums;
using EduSAFe.Interfaces;

namespace EduSAFe.Model;

public class Question : IEntity
{
    [Key]
    public Guid Id { get; set; }
    [Required]
    public string Text { get; set; } = null!;
    [Required]
    public List<Answer> Answers { get; set; } = [];
    [Required]
    public int CorrectAnswerIndex { get; set; } // ? isso não ficaria melhor em uma classe chamada lesson ou algo assim? que teria isso e uma lista de questions?
    [Required]
    public QuestionType Type { get; set; }
}
