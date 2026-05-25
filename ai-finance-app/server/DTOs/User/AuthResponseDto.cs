namespace FinanceApp.Api.DTOs.User
{
    public class AuthResponseDto
    {
        public string Token { get; set; } = string.Empty;

        public string FullName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;
    }
}
