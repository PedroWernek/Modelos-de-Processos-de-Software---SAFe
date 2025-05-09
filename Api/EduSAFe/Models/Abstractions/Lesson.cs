namespace EduSAFe.Models.Abstractions;

public abstract class Lesson
{
    public int Id { get; set; }
    public virtual int XP { get; set; }
    public List<FlashCard> FlashCards { get; set; } = [];
}