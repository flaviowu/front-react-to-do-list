import React, { useState } from "react";
import "./ToDoCard.scss";

const ToDoCard = (props) => {
  const [tarefa, setTarefa] = useState(props.tarefa);
  console.log(tarefa);

  return (
    <div className={`to-do-card-${tarefa.prioridade}`}>
      <h5>{tarefa.titulo}</h5>
      <div className="info-parcial">
        <p><span>Prazo:</span> {tarefa.prazo}</p>
        <p><span>Prioridade:</span> {tarefa.prioridade}</p>
        <a href={`/details/${tarefa._id}`}>
          <button type="button">Detalhes</button>
        </a>
      </div>
    </div>
  );
};

export default ToDoCard;
