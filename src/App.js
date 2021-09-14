import "./App.scss";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home  from "./pages/Home/Home"
import TarefaDisplay from "./pages/TarefaDisplay/TarefaDisplay"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/view/:id" component={TarefaDisplay}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
