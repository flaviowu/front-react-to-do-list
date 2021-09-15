import React from "react";
import { dataFormatISO } from "../../modules/utilities/getData";
import { useHistory } from "react-router-dom";
import { Api } from "../../modules/Api/Api";

const TarefaAdd = (props) => {
  let history = useHistory();

  function handleCancel() {
    history.push("/")
  }

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

    console.log(Tarefa);

    Api.postTarefa(Tarefa).then(res => console.log(res));
  }

  return (
    <div className="tarefa-add">
      <form className="tarefa-add-form" onSubmit={handleSubmit}>
        <h3>Nova Tarefa</h3>
        <div className="tarefa-add-form-titulo">
          <h4>Título:</h4>
          <input type="text" name="titulo" id="titulo" />
        </div>
        <div className="tarefa-add-form-situacao">
          <h4>Situação</h4>
          <select name="situacao" id="situacao">
            <option value="a fazer">a fazer</option>
            <option value="fazendo">fazendo</option>
            <option value="feito">feito</option>
          </select>
        </div>
        <div className="tarefa-add-form-prazo">
          <h4>Prazo:</h4>

          <input type="date" name="prazo" id="prazo" />
        </div>
        <div className="tarefa-add-form-prioridade">
          <h4>Prioridade:</h4>

          <select name="prioridade" id="prioridade">
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="tarefa-add-form-descricao">
          <h4>Descrição</h4>
          <textarea
            name="descricao"
            id="descricao"
            rows="3"
            columns="50"
          ></textarea>
        </div>
        <div className="tarefa-add-for-btn">
          <button type="submit">Salvar</button>
          <button type="reset">Limpar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default TarefaAdd;
