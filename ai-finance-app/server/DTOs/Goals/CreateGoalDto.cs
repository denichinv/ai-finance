using System.ComponentModel.DataAnnotations;

namespace FinanceApp.Api.DTOs.Goals;

public class CreateGoalDto
{
    [Required]
    [MinLength(2)]
    public string Title { get; set; } = string.Empty;

    [Range(0.01, double.MaxValue)]
    public decimal TargetAmount { get; set; }

    [Range(0, double.MaxValue)]
    public decimal CurrentAmount { get; set; } = 0;

    public DateTime? Deadline { get; set; }
}