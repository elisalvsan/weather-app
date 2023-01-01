import React, {useState} from "react";
import fetchData from "../services/api";

function Form() {

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData("Fortaleza").then((response) => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cidade"
        className="p-3 rounded-lg outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Form;
