using System.ComponentModel.DataAnnotations;

namespace FinanceApp.Api.DTOs.Goals;

public class UpdateGoalProgressDto
{
    [Range(0, double.MaxValue)]
    public decimal CurrentAmount { get; set; }
}