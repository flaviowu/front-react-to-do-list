import React, { useState, useEffect } from "react";
import axios from "axios";

const TarefaEdit = (props) => {
  const [ fields, setFields ] = useState({});

  // console.log(props.match.params.id)
  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:3005/tarefas/${id}`).then((res) => {
      setFields(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3005/tarefas/update/${id}`, fields);
  };

  return (
    <form className="tarefa-edit" onSubmit={handleSubmit}>
      <input type="text" value={fields.titulo}/>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TarefaEdit;
