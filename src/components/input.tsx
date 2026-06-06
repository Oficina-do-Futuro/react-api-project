export default function Input({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="border border-sky-500 rounded-md p-1 outline-none focus:border-2"
      />
    </div>
  );
}
