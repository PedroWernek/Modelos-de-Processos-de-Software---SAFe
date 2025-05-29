namespace EduSAFe.Models;

public class Question
{
    public int Id { get; set; }
    public string Description { get; set; } = null!;
    public List<Answer> Answers { get; set; } = [];
}
