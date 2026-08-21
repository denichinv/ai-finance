using FinanceApp.Api.DTOs.Transactions;
using FinanceApp.Api.Models;

namespace FinanceApp.Api.Services.Interfaces;

public interface ITransactionService
{
    Task<IEnumerable<Transaction>> GetAllAsync(int userId);
    Task<Transaction> CreateAsync(CreateTransactionDto dto, int userId);
    Task<bool> DeleteAsync(Guid id, int userId);
}