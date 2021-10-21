import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Empdetails from './components/Empdetails';
import Empbirthday from './components/Empbirthday'
import Error from './components/Error'

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path = "/" component = {Home} exact/>
         <Route path = "/empdetails" component = {Empdetails} exact/>
         <Route path = "/empbirthday" component = {Empbirthday} exact/>
         <Route component = {Error}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
