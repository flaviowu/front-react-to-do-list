import "./App.scss";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./pages/Home/Home";
import TarefaDisplay from "./pages/TarefaDisplay/TarefaDisplay";
import TarefaEdit from "./pages/TarefaEdit/TarefaEdit";
import TarefaAdd from "./pages/TarefaAdd/TarefaAdd";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/view/:id" component={TarefaDisplay} />
        <Route path="/edit/:id" component={TarefaEdit} />
        <Route path="/add/" component={TarefaAdd} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
