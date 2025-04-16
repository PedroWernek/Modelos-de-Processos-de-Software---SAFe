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
    public List<string> Answers { get; set; } = [];
    [Required]
    public int CorrectAnswerIndex { get; set; }
    [Required]
    public QuestionType Type { get; set; }
}
