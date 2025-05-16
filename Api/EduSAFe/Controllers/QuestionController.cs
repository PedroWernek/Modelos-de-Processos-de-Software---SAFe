using EduSAFe.Data;
using EduSAFe.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuestionController : ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public QuestionController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<IActionResult> AddQuestion([FromBody] Question question)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _appDbContext.Questions.Add(question);
        await _appDbContext.SaveChangesAsync();

        return Created("Questão criada com sucesso!", question);
    }

    [HttpGet]
    public async Task<ActionResult <IEnumerable<Question>>> GetQuestion()
    {
        var questions = await _appDbContext.Questions.ToListAsync();

        return Ok(questions);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Question>> GetQuestion(int id)
    {
        var question = await _appDbContext.Questions.FindAsync(id);
        if (question is null)
        {
            return NotFound("Questão não encontrada!");
        }

        return Ok(question);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateQuestion(int id, [FromBody] Question questionAtualizada)
    {
        var questionExistente = await _appDbContext.Questions.FindAsync(id);
        if (questionExistente is null)
        {
            return NotFound("Usuário não encontrado!");
        }

        _appDbContext.Entry(questionExistente).CurrentValues.SetValues(questionAtualizada);
        await _appDbContext.SaveChangesAsync();

        return StatusCode(201, questionAtualizada);
    }

    [HttpDelete("{id}")]
    
    public async Task<ActionResult> DeleteQuestion(int id)
{
    var question = await _appDbContext.Questions
        .Include(q => q.Answers)
        .FirstOrDefaultAsync(q => q.Id == id);

    if (question is null)
    {
        return NotFound("Question não encontrada!");
    }

    // Remove as respostas relacionadas primeiro
    _appDbContext.Answers.RemoveRange(question.Answers);

    // Depois remove a pergunta
    _appDbContext.Questions.Remove(question);

    await _appDbContext.SaveChangesAsync();

    return Ok("Question deletada com sucesso.");
}
}