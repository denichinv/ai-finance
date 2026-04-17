    using FinanceApp.Api.DTOs.Goals;
using FinanceApp.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GoalsController : ControllerBase
{
    private readonly IGoalService _goalService;

    public GoalsController(IGoalService goalService)
    {
        _goalService = goalService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var goals = await _goalService.GetAllAsync();
        return Ok(goals);
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateGoalDto dto)
    {
        var created = await _goalService.CreateAsync(dto);
        return CreatedAtAction(nameof(GetAll), new { id = created.Id }, created);
    }

    [HttpPatch("{id:guid}/progress")]
    public async Task<IActionResult> UpdateProgress(Guid id, UpdateGoalProgressDto dto)
    {
        var updated = await _goalService.UpdateProgressAsync(id, dto);
        if (updated == null) return NotFound(new { message = "Goal not found" });

        return Ok(updated);
    }
}