import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export default function Navbar() {
  return (
    <div className="bg-slate-800 p-4">
      <nav>
        <ul className="flex items-center gap-8">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/expenses/create">Create Expense</NavItem>
          <NavItem to="/expense-categories/create">Create Category</NavItem>
        </ul>
      </nav>
    </div>
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
