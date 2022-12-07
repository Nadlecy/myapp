import Home from ".//pages/home.js";
import PkmnList from ".//pages/pkmnlist.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/pkmnlist"> {/*ici on met l'URL dans le navigateur*/}
          <PkmnList /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
      </Switch>
  </Router>
}

export default App;
