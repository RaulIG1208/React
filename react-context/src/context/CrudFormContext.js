import { createContext, useContext, useEffect, useState } from "react";
import CrudContext from "./CrudContext";

const CrudFormContext = createContext();

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudFormProvider = ({ children }) => {
  const [form, setForm] = useState(initialForm);
  const { dataToEdit, createData, updateData, setDataToEdit } =
    useContext(CrudContext);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  const data = { form, dataToEdit, handleChange, handleSubmit, handleReset };

  return (
    <CrudFormContext.Provider value={data}>{children}</CrudFormContext.Provider>
  );
};

export { CrudFormProvider };

export default CrudFormContext;
