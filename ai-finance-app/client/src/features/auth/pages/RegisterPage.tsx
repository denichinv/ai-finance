import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import AuthPageLayout from "../components/AuthPageLayout";
import { useAuth } from "../hooks/useAuth";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsSubmitting(true);
      await register({ fullName, email, password });
      navigate("/", { replace: true });
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to create account",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthPageLayout
      description="Create your SpendWise account to start tracking your finances."
      title="Create your account"
    >
      {error && (
        <p
          aria-live="polite"
          className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300"
        >
          {error}
        </p>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300"
            htmlFor="fullName"
          >
            Full name
          </label>

          <input
            autoComplete="name"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-lime-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            id="fullName"
            minLength={2}
            onChange={(event) => setFullName(event.target.value)}
            required
            type="text"
            value={fullName}
          />
        </div>

        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300"
            htmlFor="email"
          >
            Email address
          </label>

          <input
            autoComplete="email"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-lime-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
        </div>

        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300"
            htmlFor="password"
          >
            Password
          </label>

          <input
            autoComplete="new-password"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-lime-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            id="password"
            minLength={8}
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
        </div>

        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300"
            htmlFor="confirmPassword"
          >
            Re-enter password
          </label>

          <input
            autoComplete="new-password"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-lime-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            id="confirmPassword"
            minLength={8}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            type="password"
            value={confirmPassword}
          />
        </div>

        <Button className="w-full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link className="font-medium text-primary hover:text-primary-hover" to="/login">
          Log in
        </Link>
      </p>
    </AuthPageLayout>
  );
}
