using EduSAFe.Data;
using EduSAFe.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public UserController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<IActionResult> AddUser([FromBody] User user)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _appDbContext.Users.Add(user);
        await _appDbContext.SaveChangesAsync();

        return Created("Usuario criado com sucesso.", user);
    }

    [Authorize(Roles = "Owner")]
    [HttpGet]
    public async Task<ActionResult <IEnumerable<User>>> GetUsers()
    {
        var users = await _appDbContext.Users.ToListAsync();

        return Ok(users);
    }

    [Authorize(Roles = "Owner,User")]
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await _appDbContext.Users.FindAsync(id);
        if (user is null)
        {
            return NotFound("Usuario não encontrado.");
        }

        return Ok(user);
    }

    [Authorize(Roles = "User")]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, [FromBody] User updatedUser)
    {
        var existingUser = await _appDbContext.Users.FindAsync(id);
        if (existingUser is null)
        {
            return NotFound("Usuario não encontrado.");
        }

        _appDbContext.Entry(existingUser).CurrentValues.SetValues(updatedUser);
        await _appDbContext.SaveChangesAsync();

        return Ok(updatedUser);
    }

    [Authorize(Roles = "Owner,User")]
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteUser(int id)
    {
        var user = await _appDbContext.Users.FindAsync(id);
        if (user is null)
        {
            return NotFound("Usuario não encontrado.");
        }

        _appDbContext.Remove(user);
        await _appDbContext.SaveChangesAsync();

        return Ok("Usuario deletado com sucesso.");
    }
}