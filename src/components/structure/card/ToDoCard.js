import React, { useState, useEffect } from "react";
import "./ToDoCard.scss";

// OBS: prioridade 1- baixa, 2- normal, 3-alta
const ToDoCard = (props) => {
  const [tarefa, setTarefa] = useState(props.tarefa);
  const [prioridade, setPrioridade] = useState(props.tarefa.prioridade);
  console.log(tarefa);

  useEffect((prioridae) => {
    if (prioridade === 1) {
      setPrioridade("Baixa");
    }
    if (prioridade === 2) {
      setPrioridade("Normal");
    }
    if (prioridade === 3) {
      setPrioridade("Alta");
    }
  }, []);

  return (
    <div className={`to-do-card-${tarefa.prioridade}`}>
      <div className="card-title">
        <h5>{tarefa.titulo}</h5>
      </div>
      <div className="info-parcial">
        <p>
          <span>Prazo:</span> {tarefa.prazo}
        </p>
        <p>
          <span>Prioridade:</span> {prioridade}
        </p>
        <a href={`/details/${tarefa._id}`}>
          <button type="button" className="btn">
            Detalhes
          </button>
        </a>
      </div>
    </div>
  );
};

export default ToDoCard;
