import Button from "#/components/button";
import Input from "#/components/input";
import useSubmitForm from "#/hooks/use-submit-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expense-categories/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const { handleSubmit, isLoading, error } = useSubmitForm(
    "/expense-categories",
  );

  return (
    <div>
      <h2 className="text-center font-bold text-xl">
        Create a New Expense Category
      </h2>
      <div className="max-w-sm bg-slate-800 p-16 rounded-lg mx-auto">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input label="Name" name="name" />
          <Input label="Color" name="color" type="color" />
          <Button isLoading={isLoading}>Create</Button>

          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </div>
    </div>
  );
}
