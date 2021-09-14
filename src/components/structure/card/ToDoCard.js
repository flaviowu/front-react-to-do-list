import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPrioridade } from "../../../modules/utilities/getPrioridade";
import { dataFormat } from "../../../modules/utilities/getData"
import "./ToDoCard.scss";

// OBS: prioridade 1- baixa, 2- normal, 3-alta
const ToDoCard = (props) => {
  const [tarefa, setTarefa] = useState(props.tarefa);
  const [prioridade, setPrioridade] = useState(props.tarefa.prioridade);
  console.log(tarefa);

  useEffect(() => {
    setPrioridade(getPrioridade(prioridade));
  }, []);

  return (
    <Link to={`/view/${tarefa._id}`} className="link">
      <div className={`to-do-card-${tarefa.prioridade}`}>
        <div className="card-title">
          <h5>{tarefa.titulo}</h5>
        </div>
        <div className="info-parcial">
          <p>
            <span>Prazo:</span> {dataFormat(tarefa.prazo)}
          </p>
          <p>
            <span>Prioridade:</span> {prioridade}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ToDoCard;
