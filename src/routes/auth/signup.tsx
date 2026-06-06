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

      <div>
        <form>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-sky-500 rounded-md p-2"
            />
          </div>
        </form>
      </div>
    </main>
  );
}

// http://localhost:3000/auth/signup
