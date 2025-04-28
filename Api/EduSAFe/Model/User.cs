using System.ComponentModel.DataAnnotations;
using EduSAFe.Interfaces;

namespace EduSAFe.Model;

// sim, implementa a ientity, mas por quê?
public class User : IEntity
{
    [Key]
    public int Id { get; set; }

    // misturando inglês e ptbr, não é melhor a gente definir um idioma só para seguir?
    [Required]
    [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
    [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Name can only contain letters and spaces.")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
    public string? Name { get; set; }

    [Required]
    [MaxLength(25, ErrorMessage = "Email cannot exceed 20 characters.")]
    [MinLength(5, ErrorMessage = "Email must be at least 5 characters long.")]
    public string? Email { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "Password cannot exceed 100 characters.")]
    [MinLength(6, ErrorMessage = "Password must be at least 6 characters long.")]
    public string? Password { get; set; }
}