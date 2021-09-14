import React from "react";
import { dataFormatISO } from "../../modules/utilities/getData"

import { Api } from "../../modules/Api/Api";

const TarefaAdd = (props) => {

  function handleSubmit(e) {
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

		console.log(Tarefa)

		Api.postTarefa(Tarefa)

  }

  function handleChange() {
    console.log("Mudou");
  }

  return (
    <div className="tarefa-add">
      <form className="tarefa-add-form" onSubmit={handleSubmit}>
        <input type="text" name="titulo" id="titulo" onChange={handleChange} />
        <input type="date" name="prazo" id="prazo" onChange={handleChange} />
        <select name="prioridade" id="prioridade" onChange={handleChange}>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
        <select name="situacao" id="situacao" onChange={handleChange}>
          <option value="a fazer">a fazer</option>
          <option value="fazendo">fazendo</option>
          <option value="feito">feito</option>
        </select>
        <textarea name="descricao" id="descricao" rows="3" columns="50" onChange={handleChange}></textarea>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default TarefaAdd;
