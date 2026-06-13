import { LoaderCircleIcon } from "lucide-react";
import type { ReactNode } from "react";

export default function Button({
  isLoading,
  children,
}: {
  isLoading?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      disabled={isLoading}
      className="bg-sky-500 rounded-md p-1 disabled:bg-sky-700 text-center hover:bg-sky-600 cursor-pointer transition-all"
    >
      {isLoading ? (
        <LoaderCircleIcon className="animate-spin mx-auto" />
      ) : (
        children
      )}
    </button>
  );
}
