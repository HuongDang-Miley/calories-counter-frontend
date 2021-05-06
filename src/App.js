import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { NotFound } from "./components/notFound/NotFound";

const App = (props) => {
  
  return (
    <div>    
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App
