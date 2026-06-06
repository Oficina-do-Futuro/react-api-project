import Input from "#/components/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-slate-950 text-white min-h-screen pb-40">
      <div className="text-center py-16">
        <h1 className="font-bold text-7xl text-sky-500">Expense Tracker</h1>
        <h2>Manage your expenses with ease</h2>
      </div>

      <div className="max-w-sm bg-slate-800 p-16 rounded-lg mx-auto">
        <form className="grid gap-4">
          <Input label="Name" name="name" />
          <Input label="Email" name="email" />
          <Input label="Password" name="password" type="password" />
          <Input label="Birthdate" name="birthdate" type="date" />

          <a
            href="/auth/login"
            className="text-right hover:text-sky-300 transition-all"
          >
            Já tem uma conta?
          </a>
          <button className="bg-sky-500 rounded-md p-1">Create Account</button>
        </form>
      </div>
    </main>
  );
}

// http://localhost:3000/auth/signup
// http://github.com/oficina-do-futuro
