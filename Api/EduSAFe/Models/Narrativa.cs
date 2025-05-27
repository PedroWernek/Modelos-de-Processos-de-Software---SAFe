using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EduSAFe.Models
{
    public class Narrativa
    {
        [Key]
        public int Id { get; set; }
        public string? Texto { get; set; }
        
    }
}