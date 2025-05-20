using EduSAFe.Data;
using EduSAFe.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers;

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

    [HttpGet]
    public async Task<ActionResult <IEnumerable<Question>>> GetQuizzes()
    {
        var quizzes = await _appDbContext.Quizzes.ToListAsync();

        return Ok(quizzes);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Question>> GetQuiz(int id)
    {
        var quiz = await _appDbContext.Quizzes.FindAsync(id);
        if (quiz is null)
        {
            return NotFound("Quiz não encontrado.");
        }

        return Ok(quiz);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateQuiz(int id, [FromBody] Quiz updatedQuiz)
    {
        var existingQuiz = await _appDbContext.Quizzes.FindAsync(id);
        if (existingQuiz is null)
        {
            return NotFound("Quiz não encontrado.");
        }

        _appDbContext.Entry(existingQuiz).CurrentValues.SetValues(updatedQuiz);
        await _appDbContext.SaveChangesAsync();

        return Ok(updatedQuiz);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteQuiz(int id)
    {
        var quiz = await _appDbContext.Quizzes.FirstOrDefaultAsync(q => q.Id == id);
        if (quiz is null)
        {
            return NotFound("Quiz não encontrado.");
        }

        _appDbContext.Quizzes.Remove(quiz);
        await _appDbContext.SaveChangesAsync();

        return Ok("Quiz deletado com sucesso.");
    }
}