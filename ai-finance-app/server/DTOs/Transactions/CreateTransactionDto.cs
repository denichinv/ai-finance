using FinanceApp.Api.Models;
using System.ComponentModel.DataAnnotations;

namespace FinanceApp.Api.DTOs.Transactions;

public class CreateTransactionDto
{
    [Required]
    [MinLength(2)]
    public string Title { get; set; } = string.Empty;

    [Range(0.01, double.MaxValue)]
    public decimal Amount { get; set; }

    [Required]
    public TransactionType Type { get; set; }

    [Required]
    public string Category { get; set; } = string.Empty;

    [Required]
    public DateTime Date { get; set; }
}