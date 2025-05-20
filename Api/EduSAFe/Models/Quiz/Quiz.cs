using EduSAFe.Models.Abstractions;

namespace EduSAFe.Models;

public class Quiz : Lesson
{
    public override int XP { get; set; } = 50;
    public int MinCorrectAnswers { get; set; }
    public List<Question> Questions { get; set; } = [];
}