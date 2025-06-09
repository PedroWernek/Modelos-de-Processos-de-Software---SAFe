using EduSAFe.Models;
using Microsoft.AspNetCore.Mvc;
using EduSAFe.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace EduSAFe.Controllers;

[Authorize(Roles = "Owner,User")]
[ApiController]
[Route("api/narrativas")]
public class NarrativaController : ControllerBase
{
    private readonly AppDbContext _appDbContext;


    public NarrativaController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost()]

    public async Task<IActionResult> AddNarrativa([FromBody] Narrativa narrativa)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _appDbContext.Narrativas.Add(narrativa);
        await _appDbContext.SaveChangesAsync();

        return Created("Narrativa Criada com Sucesso.", narrativa);
    }

    [HttpGet()]
    public async Task<ActionResult <IEnumerable<Narrativa>>> GetNarrativas()
    {
        var narrativa = await _appDbContext.Narrativas.ToListAsync();

        return Ok(narrativa);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Narrativa>> GetNarrativa(int id)
    {
        var narrativa = await _appDbContext.Narrativas.FindAsync(id);
        if (narrativa is null)
        {
            return NotFound("Narrativa não encontrada.");
        }

        return Ok(narrativa);
    }

    [HttpPost("{id}/submit")]
public async Task<ActionResult> SubmitNarrativa(int id)
{
    var email = User.FindFirst(ClaimTypes.Email)?.Value;
    if (string.IsNullOrEmpty(email)) return Unauthorized("Email não encontrado.");

    var user = await _appDbContext.Users
        .Include(u => u.UserLessons)
        .Include(u => u.FlashCards)
        .FirstOrDefaultAsync(u => u.Email == email);

    if (user is null) return NotFound("Usuário não encontrado.");

    var narrativa = await _appDbContext.Narrativas.FirstOrDefaultAsync(q => q.Id == id);
    if (narrativa is null) return NotFound("Narrativa não encontrada.");

    var existingNarrativa = user.UserLessons.FirstOrDefault(x => x.Id == id);
    if (existingNarrativa is not null) return Ok(); // já registrada, não ganha XP novamente

    user.XP += narrativa.XP;
    user.CalculateLevel(user.XP);

    user.UserLessons.Add(narrativa);
    user.FlashCards.AddRange(_appDbContext.FlashCards.Where(x => x.LessonId == id));

    _appDbContext.Update(user);
    await _appDbContext.SaveChangesAsync();

    return Ok();
}
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteNarrativa(int id)
    {
        var narrativa = await _appDbContext.Narrativas.FirstOrDefaultAsync(q => q.Id == id);
        if (narrativa is null)
        {
            return NotFound("Narrativa não encontrada.");
        }

        _appDbContext.Narrativas.Remove(narrativa);
        await _appDbContext.SaveChangesAsync();

        return Ok("Narrativa deletada com sucesso.");
    }
}