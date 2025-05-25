using EduSAFe.Data;
using EduSAFe.DTOs;
using EduSAFe.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers;

[ApiController]
[Route("api/interactive-stories")]
public class InteractiveStoryController : ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public InteractiveStoryController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<IActionResult> AddInteractiveStory([FromBody] Quiz interactiveStory)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _appDbContext.Quizzes.Add(interactiveStory);
        await _appDbContext.SaveChangesAsync();

        return Created("InteractiveStory criado com sucesso.", interactiveStory);
    }

    [HttpPut("questions/{interactiveStoryId}")]
    public async Task<IActionResult> AddQuestions(int interactiveStoryId, [FromBody] List<Question> questions)
    {
        var interactiveStory = await _appDbContext.Quizzes.FindAsync(interactiveStoryId);
        if (interactiveStory is null)
        {
            return NotFound("InteractiveStory não encontrado.");
        }

        interactiveStory.Questions.AddRange(questions);

        _appDbContext.Update(interactiveStory);
        await _appDbContext.SaveChangesAsync();

        return Ok(interactiveStory);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Question>>> GetInteractiveStories()
    {
        var iStories = await _appDbContext.Quizzes.Where(x => x.IsInteractiveStory).ToListAsync();

        return Ok(iStories);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<InteractiveStoryDTO>> GetInteractiveStory(int id)
    {
        var interactiveStory = await _appDbContext.Quizzes
            .Include(q => q.Questions) // ana: não mexer, explico melhor pra quem perguntar
            .FirstOrDefaultAsync(q => q.Id == id);

        if (interactiveStory is null)
            return NotFound("InteractiveStory não encontrado.");

        var interactiveStoryDTO = new InteractiveStoryDTO
        {
            Id = interactiveStory.Id,
            XP = interactiveStory.XP,
            MinCorrectAnswers = interactiveStory.MinCorrectAnswers,
            Questions = interactiveStory.Questions.Select(q =>
            {
                var allAnswers = new List<string> { q.CorrectAnswer }; // ana: a lista começa com a resposta certa. só.
                allAnswers.AddRange(q.IncorrectAnswers); // ana: agora enfia todas as incorretas também (VER SubmitInteractiveStory PARA ENTENDER O RETORNO)

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

        return Ok(interactiveStoryDTO);
    }

    // ana: SUBMIT. RESPONSE. RESPOSTA.
    [HttpPost("{id}/submit")]
    public async Task<ActionResult> SubmitInteractiveStory(int id, [FromBody] List<AnswerSubmissionDTO> answers, [FromQuery] int userId)
    {
        var interactiveStory = await _appDbContext.Quizzes
            .Include(q => q.Questions)
            .FirstOrDefaultAsync(q => q.Id == id);

        if (interactiveStory is null) return NotFound("InteractiveStory não encontrado.");

        int correctAnswers = 0;

        foreach (var answer in answers)
        {
            var question = interactiveStory.Questions.FirstOrDefault(q => q.Id == answer.QuestionId);
            if (question != null && answer.SelectedAnswer == question.CorrectAnswer)
            {
                correctAnswers++;
            }
        }

        if (correctAnswers >= interactiveStory.MinCorrectAnswers)
        {
            var user = await _appDbContext.Users.FindAsync(userId);
            if (user is not null)
            {
                var existingInteractiveStory = user.UserLessons.FirstOrDefault(x => x.LessonId == id);
                if (existingInteractiveStory is not null)
                    return Ok(new { message = "Boa revisão! Você passou!", correctAnswers });
                // ana: ok. a parte de cima 1. impede que o user tenha uma lista de UserLessons com 30000000000 LessonId.3 e também impede hack de xp! mas ainda deixa o user revisar o conteúdo sei lá se ele tiver afim

                user.XP += interactiveStory.XP;
                user.CalculateLevel(user.XP);

                user.UserLessons.Add(new()
                {
                    LessonId = id,
                    IsSuccess = true,
                });

                user.FlashCards.AddRange(_appDbContext.FlashCards.Where(x => x.LessonId == id));

                await _appDbContext.SaveChangesAsync();
            }

            return Ok(new { message = "Passou!", correctAnswers });
        }

        return BadRequest(new { message = "Reprovou.", correctAnswers });
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateInteractiveStory(int id, [FromBody] InteractiveStory updatedInteractiveStory)
    {
        var existingInteractiveStory = await _appDbContext.Quizzes.FindAsync(id);

        if (existingInteractiveStory is null) return NotFound("InteractiveStory não encontrado.");

        _appDbContext.Entry(existingInteractiveStory).CurrentValues.SetValues(updatedInteractiveStory);
        await _appDbContext.SaveChangesAsync();

        return Ok(updatedInteractiveStory);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteInteractiveStory(int id)
    {
        var interactiveStory = await _appDbContext.Quizzes.FirstOrDefaultAsync(q => q.Id == id);
        if (interactiveStory is null) return NotFound("InteractiveStory não encontrado.");

        _appDbContext.Quizzes.Remove(interactiveStory);
        await _appDbContext.SaveChangesAsync();

        return Ok("InteractiveStory deletado com sucesso.");
    }
}