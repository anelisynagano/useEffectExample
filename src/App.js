import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import RandomFood from "./components/RandomFood";
import SearchFood from "./components/SearchFood";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/">
            <li>random food</li>
          </Link>
          <Link to="/search-food">
            <li>search food</li>
          </Link>
        </ul>
        <h1>Show me food:</h1>
        <Switch>
          <Route exact path="/" component={RandomFood} />
          <Route path="/search-food" component={SearchFood} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
