using System.ComponentModel.DataAnnotations;

namespace EduSAFe.Models;

public class Question
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string Description { get; set; } = null!;
    [Required]
    public List<Answer> Answers { get; set; } = [];
}
