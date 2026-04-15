namespace FinanceApp.Api.Services.Interfaces;

public interface IDashboardService
{
    Task<object> GetSummaryAsync();
}