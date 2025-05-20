using System.ComponentModel.DataAnnotations;

namespace EduSAFe.Models;

public class FlashCard
{
    [Required]
    [Key]
    public int Id { get; set; }
    public int LessonId { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
}