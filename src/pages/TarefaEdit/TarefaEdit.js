import React, { useState, useEffect } from "react";
import axios from "axios";

const TarefaEdit = (props) => {
  const [tarefa, setTarefa] = useState({});

  // console.log(props.match.params.id)
  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:3005/tarefas/${id}`).then((res) => {
      setTarefa(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3005/tarefas/update/${id}`, tarefa);
  };

  return (
    <form className="tarefa-edit" onSubmit={() => handleSubmit()}>
      <input type="text" value={tarefa.titulo}/>
      <button type="submit">OK!</button>
    </form>
  );
};

export default TarefaEdit;
