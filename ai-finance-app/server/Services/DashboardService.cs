using FinanceApp.Api.Data;
using FinanceApp.Api.Models;
using FinanceApp.Api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FinanceApp.Api.Services;

public class DashboardService : IDashboardService
{
    private readonly AppDbContext _context;

    public DashboardService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<object> GetSummaryAsync()
    {
        var transactions = await _context.Transactions
            .OrderByDescending(t => t.Date)
            .ToListAsync();

        var income = transactions
            .Where(t => t.Type == TransactionType.Income)
            .Sum(t => t.Amount);

        var expenses = transactions
            .Where(t => t.Type == TransactionType.Expense)
            .Sum(t => t.Amount);

        var balance = income - expenses;

        var expensesByCategory = transactions
            .Where(t => t.Type == TransactionType.Expense)
            .GroupBy(t => t.Category)
            .Select(g => new
            {
                Category = g.Key,
                Amount = g.Sum(x => x.Amount)
            })
            .ToList();

        var recentTransactions = transactions.Take(5);

        return new
        {
            Income = income,
            Expenses = expenses,
            Balance = balance,
            ExpensesByCategory = expensesByCategory,
            RecentTransactions = recentTransactions
        };
    }
}