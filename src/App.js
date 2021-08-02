import Home from "./components/Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "./style.css"
import { Route, Router, Switch } from "react-router-dom";
import ImageShow from "./components/ImageShow";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/imageshow/:id" component={ImageShow}/>
      </Switch>
    </div>
  );
}

export default App;









