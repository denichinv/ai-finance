using FinanceApp.Api.Data;
using FinanceApp.Api.DTOs.Goals;
using FinanceApp.Api.Models;
using FinanceApp.Api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FinanceApp.Api.Services;

public class GoalService : IGoalService
{
    private readonly AppDbContext _context;

    public GoalService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Goal>> GetAllAsync(int userId)
    {
        return await _context.Goals
            .Where(g => g.UserId == userId)
            .OrderByDescending(g => g.CreatedAt)
            .ToListAsync();
    }

    public async Task<Goal> CreateAsync(CreateGoalDto dto, int userId)
    {
        var goal = new Goal
        {
            Id = Guid.NewGuid(),
            Title = dto.Title,
            TargetAmount = dto.TargetAmount,
            CurrentAmount = dto.CurrentAmount,
            Deadline = dto.Deadline,
            UserId = userId
        };

        _context.Goals.Add(goal);
        await _context.SaveChangesAsync();

        return goal;
    }

    public async Task<Goal?> UpdateProgressAsync(
        Guid id,
        UpdateGoalProgressDto dto,
        int userId)
    {
        var goal = await _context.Goals
            .FirstOrDefaultAsync(g => g.Id == id && g.UserId == userId);

        if (goal == null)
        {
            return null;
        }

        goal.CurrentAmount = dto.CurrentAmount;

        await _context.SaveChangesAsync();

        return goal;
    }

    public async Task<bool> DeleteAsync(Guid id, int userId)
    {
        var goal = await _context.Goals
            .FirstOrDefaultAsync(g => g.Id == id && g.UserId == userId);

        if (goal == null)
        {
            return false;
        }

        _context.Goals.Remove(goal);
        await _context.SaveChangesAsync();

        return true;
    }
}