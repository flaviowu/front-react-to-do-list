import React from 'react'
import ToDoCard from '../../components/structure/card/ToDoCard'
import "./Home.css"

const Home = () => {
    return (
        <section className="Home">
            <h2>Lista de Tarefas</h2>
            <div className="home-card-list">
                <ToDoCard titulo="Fazer Mercado"/>
                <ToDoCard titulo="Projeto"/>
                <ToDoCard titulo="Ir ao médico"/>
            </div>
            
        </section>
    )
}    
export default Home
