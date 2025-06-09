using System.ComponentModel.DataAnnotations;
using EduSAFe.Enums;
using EduSAFe.Models.Abstractions;

namespace EduSAFe.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
    [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Name can only contain letters and spaces.")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
    public string? Name { get; set; }

    [Required]
    [MaxLength(25, ErrorMessage = "Email cannot exceed 20 characters.")]
    [MinLength(5, ErrorMessage = "Email must be at least 5 characters long.")]
    public string Email { get; set; } = null!;

    [Required]
    [StringLength(100, ErrorMessage = "Password cannot exceed 100 characters.")]
    [MinLength(6, ErrorMessage = "Password must be at least 6 characters long.")]
    public string Password { get; set; } = null!;

    public int XP { get; set; }
    public int Level { get; set; } = 1; // ana: após finalizar um módulo, chama a função de recalcular Level
    public List<FlashCard> FlashCards { get; set; } = [];
    public List<Lesson> UserLessons { get; set; } = [];
    public Role Role { get; set; } = Role.User;

    // ana: como é uma função muito básica de somente cálculo da propriedade Level, ela pode ficar aqui!
    public void CalculateLevel(int XP)
    {
        Level = XP / 100;
    }
}