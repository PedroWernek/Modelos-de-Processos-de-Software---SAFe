using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EduSAFe.Migrations
{
    /// <inheritdoc />
    public partial class NarrativaAjuste : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Narrativas",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Narrativas",
                newName: "id");
        }
    }
}
