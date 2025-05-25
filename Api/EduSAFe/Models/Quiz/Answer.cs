using System.ComponentModel.DataAnnotations;

namespace EduSAFe.Models;

public class Answer
{
  [Key]
  public int Id { get; set; }
  public string Description { get; set; } = null!;
  public bool IsCorrect { get; set; } = false;
}