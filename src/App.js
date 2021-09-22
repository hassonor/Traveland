import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
    <Route path ='/' exact component={Home}/>
      <Route  path ='/about' exact component={About}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
