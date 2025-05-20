using EduSAFe.Data;
using EduSAFe.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers;

[ApiController]
[Route("api/flash-cards")]
public class FlashCardController : ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public FlashCardController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<IActionResult> AddFlashCard([FromBody] FlashCard flashCard)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _appDbContext.FlashCards.Add(flashCard);
        await _appDbContext.SaveChangesAsync();

        return Created("FlashCard criado com sucesso.", flashCard);
    }

    [HttpGet]
    public async Task<ActionResult <IEnumerable<Question>>> GetFlashCards()
    {
        var flashCards = await _appDbContext.FlashCards.ToListAsync();

        return Ok(flashCards);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Question>> GetFlashCard(int id)
    {
        var flashCard = await _appDbContext.FlashCards.FindAsync(id);
        if (flashCard is null)
        {
            return NotFound("FlashCard não encontrado.");
        }

        return Ok(flashCard);
    }

    // ana: não é assíncrono! é proposital!
    [HttpGet("lessonId/{lessonId}")]
    public ActionResult<Question> GetLessonFlashCards(int lessonId)
    {
        List<FlashCard> flashCards = _appDbContext.FlashCards.Where(x => x.LessonId == lessonId).ToList();

        return Ok(flashCards);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateFlashCard(int id, [FromBody] FlashCard updatedFlashCard)
    {
        var existingFlashCard = await _appDbContext.FlashCards.FindAsync(id);
        if (existingFlashCard is null)
        {
            return NotFound("FlashCard não encontrado.");
        }

        _appDbContext.Entry(existingFlashCard).CurrentValues.SetValues(updatedFlashCard);
        await _appDbContext.SaveChangesAsync();

        return Ok(updatedFlashCard);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteFlashCard(int id)
    {
        var flashCard = await _appDbContext.FlashCards.FirstOrDefaultAsync(q => q.Id == id);
        if (flashCard is null)
        {
            return NotFound("FlashCard não encontrado.");
        }

        _appDbContext.FlashCards.Remove(flashCard);
        await _appDbContext.SaveChangesAsync();

        return Ok("FlashCard deletado com sucesso.");
    }
}