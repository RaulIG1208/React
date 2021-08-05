import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { CrudFormProvider } from "../context/CrudFormContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

function CrudApi() {
  const { loading, error, db } = useContext(CrudContext);
  return (
    <>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudFormProvider>
          <CrudForm />
        </CrudFormProvider>
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}:${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </>
  );
}

export default CrudApi;
