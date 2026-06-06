import Input from "#/components/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <div className="text-center py-16">
        <h1 className="font-bold text-4xl text-sky-500">Expense Tracker</h1>
        <h2>Manage your expenses with ease</h2>
      </div>

      <div className="max-w-sm bg-slate-800 p-6 rounded-lg mx-auto">
        <form>
          <Input label="Name" />
          <Input label="Email" />
        </form>
      </div>
    </main>
  );
}

// http://localhost:3000/auth/signup
// http://github.com/oficina-do-futuro
