using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EduSAFe.Data;
using EduSAFe.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers
{
     [ApiController]
    [Route("api/[controller]")]
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
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            _appDbContext.User.Add(user);
            await _appDbContext.SaveChangesAsync();

            return Created("User criado com sucesso!", user);
        }

        [HttpGet]
        public async Task<ActionResult <IEnumerable<User>>> GetUser()
        {
            var users = await _appDbContext.User.ToListAsync();

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _appDbContext.User.FindAsync(id);

            if (user == null) {
                return NotFound("User não encontrado!");
            }

            return Ok(user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User userAtualizado)
        {
            var userExistente = await _appDbContext.User.FindAsync(id);

            if (userExistente == null) {
                return NotFound("User não encontrado!");
            }

            _appDbContext.Entry(userExistente).CurrentValues.SetValues(userAtualizado);

            await _appDbContext.SaveChangesAsync();

            return StatusCode(201, userAtualizado);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var user = await _appDbContext.User.FindAsync(id);

            if (user == null) {
                return NotFound("User não encontrado!");
            }

            _appDbContext.Remove(user);

            await _appDbContext.SaveChangesAsync();

            return Ok("User mandado para a glória!");
        }
    }
}