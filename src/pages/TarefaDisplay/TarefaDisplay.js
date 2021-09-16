import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPrioridade } from "../../modules/utilities/getPrioridade";
import { dataFormat } from "../../modules/utilities/getData";
import { Api } from "../../modules/Api/Api";
import "./TarefaDisplay.scss";

const TarefaDisplay = (props) => {
  const [tarefa, setTarefa] = useState({});
  let history = useHistory();
  // console.log(props.match.params.id)
  const id = props.match.params.id;

  useEffect(() => {
    Api.getTarefa(id)
      .then((res) => {
        setTarefa(res.data);
      })
  });
  
  function handleDelete() {
    Api.deleteTarefa(id)
    history.push("/")
  }

  function handleGoBack() {
    history.push("/")
  }

  return (
    <div className="tarefa-big">
      <h3>Detalhes da Tarefa</h3>
      <div className="tarefa-big-detalhes-A">
        <h4>Título:</h4>
        <p>{tarefa.titulo}</p>
      </div>
      <div className="tarefa-big-detalhes-B">
        <h4>Situação:</h4>
        <p>{tarefa.situacao}</p>
      </div>
      <div className="tarefa-big-detalhes-C">
        <h4>Prazo:</h4>
        <p>{dataFormat(tarefa.prazo)}</p>
      </div>
      <div className="tarefa-big-detalhes-D">
        <h4>Prioridade:</h4>
        <p>{getPrioridade(tarefa.prioridade)}</p>
      </div>
      <div className="tarefa-big=detalhes-E">
        <h4>Detalhes:</h4>
        <p>{tarefa.descricao}</p>
      </div>
      <div className="tarefa-big-detalhes-btn">
        <Link to={`/edit/${tarefa._id}`}>
          <button type="button" className="detalhes-button" id="editar-btn">Editar</button>
        </Link>
         <button type="button" className="detalhes-button" id="deletar-btn" onClick={handleDelete}>Deletar</button>
         <button type="button" className="detalhes-button" id="voltar-btn" onClick={handleGoBack}>Voltar</button>
      </div>
    </div>
  );
};

export default TarefaDisplay;
