import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPrioridade } from "../../modules/utilities/getPrioridade";
import { dataFormat } from "../../modules/utilities/getData";
const TarefaDisplay = (props) => {
  const [tarefa, setTarefa] = useState({});

  // console.log(props.match.params.id)
  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:3005/tarefas/${id}`).then((res) => {
      setTarefa(res.data);
    });
  }, []);

  return (
    <div className="tarefa-display">
      <h3>Detalhes da tarefa:</h3>
      <h4>Título:</h4>
      <p>{tarefa.titulo}</p>
      <h4>Situação:</h4>
      <p>{tarefa.situacao}</p>
      <h4>Prazo:</h4>
      <p>{dataFormat(tarefa.prazo)}</p>
      <h4>Prioridade:</h4>
      <p>{getPrioridade(tarefa.prioridade)}</p>
      <h4>Detalhes:</h4>
      <p>{tarefa.descricao}</p>
    </div>
  );
};

export default TarefaDisplay;
