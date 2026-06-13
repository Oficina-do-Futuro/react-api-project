import Input from "#/components/input";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const [error, setError] = useState();

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("http://192.168.1.219:8000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data?.status === "fail") setError(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
    // GET - para pegar dados
    // POST - criar dados
    // PATCH - atualizar dado
    // DELETE - deletar
  }

  return (
    <main className="bg-slate-950 text-white min-h-screen pb-40">
      <div className="text-center py-16">
        <h1 className="font-bold text-7xl text-sky-500">Expense Tracker</h1>
        <h2>Manage your expenses with ease</h2>
      </div>

      <div className="max-w-sm bg-slate-800 p-16 rounded-lg mx-auto">
        <form onSubmit={handleSubmit} className="grid gap-4">
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

          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </div>
    </main>
  );
}

// http://localhost:3000/auth/signup
// http://github.com/oficina-do-futuro
// http://192.168.1.219:8000/api/docs
