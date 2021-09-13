import React from "react";
import CardList from "../../components/structure/cardList/CardList";
import "./Home.scss"

const Home = () => {

  return (
    <section className="Home">
      <h2>Lista de Tarefas</h2>
      <CardList/>
    </section>
  );
};
export default Home;
