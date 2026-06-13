import Button from "#/components/button";
import Input from "#/components/input";
import useSubmitForm from "#/hooks/use-submit-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenses/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const { handleSubmit, isLoading, error } = useSubmitForm("/expenses", () => {
    alert("Exepense Created Successfully");
  });

  return (
    <div>
      <h2 className="text-center font-bold text-xl">Create a New Expense</h2>
      <div className="max-w-sm bg-slate-800 p-16 rounded-lg mx-auto">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input label="Amount" name="amount" type="number" />
          <Input label="Description" name="description" />
          <div className="flex flex-col gap-1">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              className="border border-sky-500 rounded-md p-1 outline-none focus:border-2"
            >
              <option value="In">In</option>
              <option value="Out">Out</option>
            </select>
          </div>

          <Button isLoading={isLoading}>Create</Button>

          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </div>
    </div>
  );
}
