using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using EduSAFe.Models;
using EduSAFe.Data;
using Microsoft.AspNetCore.Authorization;

namespace EduSAFe.Controllers;

[AllowAnonymous]
[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly AppDbContext _appDbContext;


    public AuthController(IConfiguration configuration, AppDbContext appDbContext)
    {
        _configuration = configuration;
        _appDbContext = appDbContext;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] User credenciais)
    {
        var user = _appDbContext.Users.FirstOrDefault(u => u.Email == credenciais.Email && u.Password == credenciais.Password);

        if (user is null)
            return Unauthorized(new { mensagem = "Credenciais inválidas" });

        var token = GerarToken(user);
        return Ok(new { token });
    }

    private string GerarToken(User user)
    {
        var claims = new[]
        {
        new Claim(ClaimTypes.Name, user.Email),
        new Claim(ClaimTypes.Role, user.Role.ToString())
    };

        var chave = Encoding.UTF8.GetBytes(_configuration["JwtSettings:SecretKey"]!);
        var credenciais = new SigningCredentials(
            new SymmetricSecurityKey(chave), SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.UtcNow.AddHours(24),
            signingCredentials: credenciais);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}