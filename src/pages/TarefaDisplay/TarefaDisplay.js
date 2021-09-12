import React from "react";

const TarefaDisplay = (props) => {
  return (
    <div className="tarefa-display">
      <h3>Detalhes da tarefa:</h3>
      <label for="tarefa-titulo">Título</label>
      <input
        type="text"
        name="tarefa-titulo"
        className="tarefa-input"
        id="tarefa-titulo"
        placeholder="Digite o título da tarefa"
      />
      <label for="" className="tarefa-label">
        Detalhes
      </label>
      <textarea
        name="tarefa-detalhes"
        className="tarefa-detalhes"
        id="tarefa-detalhes"
        rows="3"
        cols="50"
        maxlength="150"
      ></textarea>
    </div>
  );
};

export default TarefaDisplay;
