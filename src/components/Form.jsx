import React, { useState } from "react";
import fetchData from "../services/api";

function Form() {

  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cidade"
        className="p-3 rounded-lg outline-none"
        onChange={({target : {valeu}}) => setCity(valeu)}
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
