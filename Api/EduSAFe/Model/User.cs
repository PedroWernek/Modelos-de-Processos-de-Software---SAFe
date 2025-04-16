using System.ComponentModel.DataAnnotations;
using EduSAFe.Interfaces;

namespace EduSAFe.Model;

public class User : IEntity
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
    [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Name can only contain letters and spaces.")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
    public string Name { get; set; } = null!;

    [Required]
    public string? Email { get; set; } = null!;

    [Required]
    [StringLength(100, ErrorMessage = "Password cannot exceed 100 characters.")]
    [MinLength(6, ErrorMessage = "Password must be at least 6 characters long.")]
    public string? Password { get; set; } = null!;

}