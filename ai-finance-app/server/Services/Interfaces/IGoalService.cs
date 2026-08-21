using FinanceApp.Api.DTOs.Goals;
using FinanceApp.Api.Models;

namespace FinanceApp.Api.Services.Interfaces;

public interface IGoalService
{
    Task<IEnumerable<Goal>> GetAllAsync(int userId);
    Task<Goal> CreateAsync(CreateGoalDto dto, int userId);
    Task<Goal?> UpdateProgressAsync(Guid id, UpdateGoalProgressDto dto, int userId);
    Task<bool> DeleteAsync(Guid id, int userId);
}