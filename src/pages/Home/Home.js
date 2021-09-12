import React from "react";
import ToDoCard from "../../components/structure/card/ToDoCard";
import "./Home.scss";

const Home = () => {
  return (
    <section className="Home">
      <h2>Lista de Tarefas</h2>
      <div className="home-card-list">
        <ToDoCard titulo="Fazer Mercado" />
        <ToDoCard titulo="Projeto" />
        <ToDoCard titulo="Ir ao médico" />
        <ToDoCard titulo="Consertar a geladeira" />
        <ToDoCard titulo="Pendirar os quadros" />
        <ToDoCard titulo="Ligar para mamãe" />
      </div>s
    </section>
  );
};
export default Home;
