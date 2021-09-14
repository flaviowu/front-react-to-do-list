import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPrioridade } from "../../modules/utilities/getPrioridade";
import { dataFormat } from "../../modules/utilities/getData";
import { Api } from "../../modules/Api/Api";

const TarefaDisplay = (props) => {
  const [ tarefa, setTarefa ] = useState({});

  // console.log(props.match.params.id)
  const id = props.match.params.id;

  useEffect(() => {
    Api.getTarefa(id)
      .then((res) => {
        setTarefa(res.data);
      })
      .catch((err) => console.log(err));
  });

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
      <Link to={`/edit/${tarefa._id}`}>
        <button type="button">Editar</button>
      </Link>
    </div>
  );
};

export default TarefaDisplay;
