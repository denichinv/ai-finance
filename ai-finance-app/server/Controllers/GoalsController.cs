using FinanceApp.Api.DTOs.Goals;
using FinanceApp.Api.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace FinanceApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class GoalsController : ControllerBase
{
    private readonly IGoalService _goalService;

    public GoalsController(IGoalService goalService)
    {
        _goalService = goalService;
    }

    private int GetUserId()
    {
        var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (string.IsNullOrWhiteSpace(userIdClaim) ||
            !int.TryParse(userIdClaim, out var userId))
        {
            throw new UnauthorizedAccessException("Invalid user token.");
        }

        return userId;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var userId = GetUserId();

        var goals = await _goalService.GetAllAsync(userId);

        return Ok(goals);
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateGoalDto dto)
    {
        var userId = GetUserId();

        var created = await _goalService.CreateAsync(dto, userId);

        return CreatedAtAction(nameof(GetAll), new { id = created.Id }, created);
    }

    [HttpPatch("{id:guid}/progress")]
    public async Task<IActionResult> UpdateProgress(Guid id, UpdateGoalProgressDto dto)
    {
        var userId = GetUserId();

        var updated = await _goalService.UpdateProgressAsync(id, dto, userId);

        if (updated == null)
        {
            return NotFound(new { message = "Goal not found" });
        }

        return Ok(updated);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var userId = GetUserId();

        var deleted = await _goalService.DeleteAsync(id, userId);

        if (!deleted)
        {
            return NotFound(new { message = "Goal not found" });
        }

        return Ok(new { message = "Goal deleted" });
    }
}