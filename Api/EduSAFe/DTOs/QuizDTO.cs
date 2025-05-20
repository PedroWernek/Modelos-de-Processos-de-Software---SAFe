namespace EduSAFe.DTOs;

public class QuizDTO
{
    public int Id { get; set; }
    public int XP { get; set; } = 50;
    public int MinCorrectAnswers { get; set; }
    public List<QuestionDTO> Questions { get; set; } = new();
}

public class QuestionDTO
{
    public int Id { get; set; }
    public string Description { get; set; } = string.Empty;
    public List<string> ShuffledAnswers { get; set; } = new();
}

public class AnswerSubmissionDTO
{
    public int QuestionId { get; set; }
    public string SelectedAnswer { get; set; } = string.Empty;
}