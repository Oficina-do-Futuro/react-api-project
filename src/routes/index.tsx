import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <main></main>;
}
