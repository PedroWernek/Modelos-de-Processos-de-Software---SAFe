using Microsoft.EntityFrameworkCore;

namespace EduSAFe.DTOs;

[Keyless]
public class UserLessonDTO
{
    public int LessonId { get; set; }
    public bool IsSuccess { get; set; } = false;
}