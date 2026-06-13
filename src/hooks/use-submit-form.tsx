import { useState } from "react";

export default function useSubmitForm(url: string) {
  const [error, setError] = useState<{ message: string }>();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("http://192.168.1.219:8000/api" + url, {
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
        else {
          e.target.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // GET - para pegar dados
    // POST - criar dados
    // PATCH - atualizar dado
    // DELETE - deletar
  }

  return { isLoading, error, handleSubmit };
}
