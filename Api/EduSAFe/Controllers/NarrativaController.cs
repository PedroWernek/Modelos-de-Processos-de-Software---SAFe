using System;
using System.Collections.Generic;
using EduSAFe.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EduSAFe.Data;
using Microsoft.EntityFrameworkCore;

namespace EduSAFe.Controllers
{

    [ApiController]
    [Route("api/narrativas")]
    public class NarrativaController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;


        public NarrativaController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost("PostNarrativa")]

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

        [HttpGet("ListarNarrativas")]
        public async Task<ActionResult <IEnumerable<Narrativa>>> GetNarrativas()
        {
            var narrativa = await _appDbContext.Narrativas.ToListAsync();

            return Ok(narrativa);
        }

        [HttpGet("BuscarNarrativa/{id}")]
        public async Task<ActionResult<Narrativa>> GetNarrativa(int id)
        {
            var narrativa = await _appDbContext.Narrativas.FindAsync(id);
            if (narrativa is null)
            {
                return NotFound("Narrativa não encontrada.");
            }

            return Ok(narrativa);
        }


        [HttpDelete("DeletarNarrativa/{id}")]
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
}