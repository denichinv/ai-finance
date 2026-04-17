using FinanceApp.Api.DTOs.Transactions;
using FinanceApp.Api.Models;

namespace FinanceApp.Api.Services.Interfaces;

public interface ITransactionService
{
    Task<IEnumerable<Transaction>> GetAllAsync();
    Task<Transaction> CreateAsync(CreateTransactionDto dto);
    Task<bool> DeleteAsync(Guid id);
}