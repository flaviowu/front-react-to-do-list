import React, { useState, useEffect } from "react";
import ToDoCard from "../card/ToDoCard";
import MockCard from "../mockCard/MockCard";
import { Api } from "../../../modules/Api/Api";
import "./CardList.scss";

const CardList = () => {
  const [tarefas, setTarefas] = useState([]);
  // const [tarefa, setTarefa] = useState({});
  const [filter, setFilter] = useState("");
  const [gatilho, setGatilho] = useState(true);

  // useEffect(() => {
  //   Api.getTarefas(filter).then((res) => {
  //     setTarefas(res.data);
  //   });
  // }, [filter, gatilho]);
  
  useEffect(() => {
    Api.getTarefas(filter).then((res) => {
      setTarefas(res.data);
    });
  });

  async function handleDeleteItem(id) {
    Api.deleteTarefa(id);

    // Api.getTarefas(filter).then((res) => {
    //   setTarefas(res.data);
      setGatilho(!gatilho);
    // });
  }

  return (
    <div className="card-list">
      <div className="card-list-filters">
        <h4>Filtros</h4>
        <button
          type="button"
          className="filtro-btn"
          onClick={() => setFilter("")}
        >
          Criação
        </button>
        <button
          type="button"
          className="filtro-btn"
          onClick={() => setFilter("sortByPrioridade")}
        >
          Prioridade
        </button>
        <button
          type="button"
          className="filtro-btn"
          onClick={() => setFilter("sortByPrazo")}
        >
          Prazo
        </button>
      </div>
      <MockCard />
      {tarefas.map((tarefa) => (
        <ToDoCard
          key={tarefa._id}
          tarefa={tarefa}
          onDelete={handleDeleteItem}
        />
      ))}
    </div>
  );
};
export default CardList;
