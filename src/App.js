

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Comonents/Home/Home';
import Javascript from './Comonents/Javascript/Javascript';
import Variables from './Comonents/Topics/Variables/Variables';
import './App.css'

function App() {
  return (
    <div style={{backgroundColor:'rgba(239, 241, 241, 0.986)'}}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/javascript">
            <Javascript></Javascript>
            </Route>
            <Route path="/variable">
            <Variables></Variables>
            </Route>
            <Route path="/">
            <Home></Home>
          </Route>
          
        </Switch>
      
    </Router>
      
    </div>
  );
}

export default App;
