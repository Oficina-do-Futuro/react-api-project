import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/expense-categories/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/expense-category/create"!</div>
}
