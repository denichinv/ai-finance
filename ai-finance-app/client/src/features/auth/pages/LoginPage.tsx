import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError(null);
      setIsSubmitting(true);
      await login({ email, password });
      navigate("/", { replace: true });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to log in");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-8 dark:bg-gray-950">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
      >
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Welcome back
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          Log in to manage your SpendWise account.
        </p>

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
              htmlFor="email"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-lime-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
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
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 outline-none transition focus:ring-2 focus:ring-lime-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Logging in..." : "Log in"}
          </Button>
        </form>
      </motion.section>
    </main>
  );
}
