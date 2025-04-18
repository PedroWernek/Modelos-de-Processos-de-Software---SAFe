using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EduSAFe.Model
{
    public class Answer
{
    [Key]
    public Guid Id { get; set; }
    [Required]
    public string Text { get; set; } = null!;
}
}