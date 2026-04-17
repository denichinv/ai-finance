using FinanceApp.Api.DTOs.Goals;
using FinanceApp.Api.Models;

namespace FinanceApp.Api.Services.Interfaces;

public interface IGoalService
{
    Task<IEnumerable<Goal>> GetAllAsync();
    Task<Goal> CreateAsync(CreateGoalDto dto);
    Task<Goal?> UpdateProgressAsync(Guid id, UpdateGoalProgressDto dto);
}