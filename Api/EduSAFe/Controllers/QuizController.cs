using EduSAFe.Data;
using EduSAFe.DTOs;
using EduSAFe.Enums;
using EduSAFe.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers;

[Authorize(Roles = "Owner,User")]
[ApiController]
[Route("api/quizzes")]
public class QuizController : ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public QuizController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<IActionResult> AddQuiz([FromBody] Quiz quiz)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _appDbContext.Quizzes.Add(quiz);
        await _appDbContext.SaveChangesAsync();

        return Created("Quiz criado com sucesso.", quiz);
    }

    [HttpPut("questions/{quizId}")]
    public async Task<IActionResult> AddQuestions(int quizId, [FromBody] List<Question> questions)
    {
        var quiz = await _appDbContext.Quizzes.FindAsync(quizId);
        if (quiz is null)
        {
            return NotFound("Quiz não encontrado.");
        }

        quiz.Questions.AddRange(questions);

        _appDbContext.Update(quiz);
        await _appDbContext.SaveChangesAsync();

        return Ok(quiz);
    }

    [HttpGet("quizzes")]
    public async Task<ActionResult<IEnumerable<Question>>> GetQuizzes()
    {
        var quizzes = await _appDbContext.Quizzes.Where(x => !x.IsInteractiveStory).ToListAsync();
        // ana: se deus quiser eh assim
        
        return Ok(quizzes);
    }

    [HttpGet("i-stories")]
    public async Task<ActionResult<IEnumerable<Question>>> GetIStories()
    {
        var quizzes = await _appDbContext.Quizzes.Where(x => x.IsInteractiveStory).ToListAsync();
        // ana: se deus quiser eh assim
        
        return Ok(quizzes);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<QuizDTO>> GetQuiz(int id)
    {
        var quiz = await _appDbContext.Quizzes
            .Include(q => q.Questions) // ana: não mexer, explico melhor pra quem perguntar
            .ThenInclude(a => a.Answers)
            .FirstOrDefaultAsync(q => q.Id == id);

        if (quiz is null)
            return NotFound("Quiz não encontrado.");

        var quizDTO = new QuizDTO
        {
            Id = quiz.Id,
            XP = quiz.XP,
            MinCorrectAnswers = quiz.MinCorrectAnswers,
            Questions = quiz.Questions.Select(q =>
            {
                var allAnswers = q.Answers.Select(a => a.Description).ToList();
                
                var random = new Random();
                var shuffled = allAnswers.OrderBy(x => random.Next()).ToList(); // ana: embaralha respostas

                return new QuestionDTO
                {
                    Id = q.Id,
                    Description = q.Description,
                    ShuffledAnswers = shuffled
                };
            }).ToList() // ana: NÃO ENFIAR PONTO E VÍRGULA.
        };

        return Ok(quizDTO);
    }

    // ana: SUBMIT. RESPONSE. RESPOSTA.
    [HttpPost("{id}/submit")]
    public async Task<ActionResult> SubmitQuiz(int id, [FromBody] List<AnswerSubmissionDTO> answers, [FromQuery] int userId)
    {
        var quiz = await _appDbContext.Quizzes
            .Include(q => q.Questions)
            .FirstOrDefaultAsync(q => q.Id == id);

        if (quiz is null) return NotFound("Quiz não encontrado.");

        int correctAnswers = 0;

        foreach (var answer in answers)
        {
            var question = quiz.Questions.FirstOrDefault(q => q.Id == answer.QuestionId);

            var correctAnswer = question?.Answers.FirstOrDefault(a => a.IsCorrect)?.Description;

            if (question != null && answer.SelectedAnswer == correctAnswer)
            {
                correctAnswers++;
            }
        }

        if (correctAnswers >= quiz.MinCorrectAnswers)
        {
            var user = await _appDbContext.Users.FindAsync(userId);
            if (user is not null)
            {
                var existingQuiz = user.UserLessons.FirstOrDefault(x => x.Id == id);
                if (existingQuiz is not null)
                    return Ok(new { message = "Boa revisão! Você passou!", correctAnswers });
                // ana: ok. a parte de cima 1. impede que o user tenha uma lista de UserLessons com 30000000000 LessonId.3 e também impede hack de xp! mas ainda deixa o user revisar o conteúdo sei lá se ele tiver afim

                user.XP += quiz.XP;
                user.CalculateLevel(user.XP);

                user.UserLessons.Add(quiz);

                user.FlashCards.AddRange(_appDbContext.FlashCards.Where(x => x.LessonId == id));

                _appDbContext.Update(user);
                await _appDbContext.SaveChangesAsync();
            }

            return Ok(new { message = "Passou!", correctAnswers });
        }

        return Ok(new { message = "Reprovou.", correctAnswers });
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateQuiz(int id, [FromBody] Quiz updatedQuiz)
    {
        var existingQuiz = await _appDbContext.Quizzes.FindAsync(id);

        if (existingQuiz is null) return NotFound("Quiz não encontrado.");

        _appDbContext.Entry(existingQuiz).CurrentValues.SetValues(updatedQuiz);
        await _appDbContext.SaveChangesAsync();

        return Ok(updatedQuiz);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteQuiz(int id)
    {
        var quiz = await _appDbContext.Quizzes.FirstOrDefaultAsync(q => q.Id == id);
        if (quiz is null) return NotFound("Quiz não encontrado.");

        _appDbContext.Quizzes.Remove(quiz);
        await _appDbContext.SaveChangesAsync();

        return Ok("Quiz deletado com sucesso.");
    }
}