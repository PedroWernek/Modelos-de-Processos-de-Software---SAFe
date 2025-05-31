using EduSAFe.Models.Abstractions;

namespace EduSAFe.Models;

public class Quiz : Lesson
{
    public int MinCorrectAnswers { get; set; }
    public bool IsInteractiveStory { get; set; }
    public List<Question> Questions { get; set; } = [];
}