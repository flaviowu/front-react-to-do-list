import React, { useState, useEffect } from "react";
import { Api } from "../../modules/Api/Api";
import { dataFormat, dataFormat2, dataFormatISO } from "../../modules/utilities/getData";

const TarefaEdit = (props) => {
  const [fields, setFields] = useState({});

  const id = props.match.params.id;

  useEffect(() => {
    Api.getTarefa(id)
      .then((res) => {
        setFields(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleSubmit (e) {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const prioridade = e.target.prioridade.value;
    const situacao = e.target.situacao.value;
    const prazo = e.target.prazo.value;
    const descricao = e.target.descricao.value;

    const Tarefa = {
      titulo: titulo,
      prioridade: prioridade,
      situacao: situacao,
      prazo: dataFormatISO(prazo),
      descricao: descricao,
    };

    console.log(Tarefa);

    Api.putTarefa(id, Tarefa);
  }

  function handleChange(e) {
    const auxFields = { ...fields };
    auxFields[e.target.name] = e.target.value;
    setFields(auxFields);
  }
  

  function handleClick() {
    console.log(fields);
    console.log(dataFormat(fields.prazo));
  }

  return (
    <div className="tarefa-add">
      <h2 onClick={handleClick}>oi</h2>
      <form className="tarefa-add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          id="titulo"
          value={fields.titulo}
          onChange={handleChange}
        />
        <input
          type="date"
          name="prazo"
          id="prazo"
          value={dataFormat2(fields.prazo)}
          onChange={handleChange}
        />
        <select
          name="prioridade"
          id="prioridade"
          value={fields.prioridade}
          onChange={handleChange}
        >
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
        <select
          name="situacao"
          id="situacao"
          value={fields.situacao}
          onChange={handleChange}
        >
          <option value="a fazer">a fazer</option>
          <option value="fazendo">fazendo</option>
          <option value="feito">feito</option>
        </select>
        <textarea
          name="descricao"
          id="descricao"
          rows="3"
          columns="50"
          onChange={handleChange}
          value={fields.descricao}
        ></textarea>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default TarefaEdit;
