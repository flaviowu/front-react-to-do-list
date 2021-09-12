import React, { useState, useEffect } from "react";
import ToDoCard from "../card/ToDoCard";
import axios from "axios";
import "./CardList.scss"

const CardList = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/tarefas").then((res) => {
      const tarefas = res.data;
      setTarefas(tarefas);
      console.log(tarefas);
    });
  }, []);

  return (
    <div className="card-list">
      {tarefas.map((tarefa) => (
        <ToDoCard key={tarefa._id} tarefa={tarefa} />
      ))}
    </div>
  );
};
export default CardList;
