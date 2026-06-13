import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <div className="bg-slate-800 p-4">
        <nav>
          <ul>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/expenses/create">Create Expense</NavItem>
            <NavItem to="/expense-categories/create">Create Category</NavItem>
          </ul>
        </nav>
      </div>
    </main>
  );
}
function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link to={to} className="hover:underline">
        {children}
      </Link>
    </li>
  );
}
