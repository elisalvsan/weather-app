import React from "react";

function Form() {
  return (
    <form>
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