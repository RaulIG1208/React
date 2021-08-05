import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export function UseForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));
    if (Object.keys(error).length === 0) {
      setLoading(true);

      helpHttp()
        .post("https://formsubmit.co/ajax/ragv1208@gmail.com", {
          body: form,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setForm(initialForm);
          setLoading(false);
          setResponse(true);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}