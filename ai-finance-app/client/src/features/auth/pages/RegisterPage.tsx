import { useState, type FormEvent } from "react";
import Button from "../../../components/ui/Button";
import AuthPageLayout from "../components/AuthPageLayout";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <AuthPageLayout
      description="Create your SpendWise account to start tracking your finances."
      title="Create your account"
    >
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
            onChange={(event) => setFullName(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
          />
        </div>

        <Button className="w-full" type="submit">
          Create account
        </Button>
      </form>
    </AuthPageLayout>
  );
}
