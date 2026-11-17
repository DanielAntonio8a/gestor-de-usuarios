import { useEffect, useState } from "react";

export function tasksApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setAbortController(abortController);
    setLoading(true);
    fetch(url, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Requerimiento Cancelado");
        } else {
          setError(error)
        }
      })
      .finally(() => setLoading(false));

    return () => { abortController.abort(); };

  }, []); // ejecuta una vez al montar

  const handleCancelRequest = () => {
    if (abortController) {
      abortController.abort();
      setError("Requerimiento Cancelado");
    }
  };

  return { data, loading, error, handleCancelRequest };
} 