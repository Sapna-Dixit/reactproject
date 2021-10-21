import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path = "/" component = {Home} exact/>
         <Route path = "/empdetails" component = {Empdetails} exact/>
         <Route path = "/" component = {Empbirthday} exact/>
         <Route component = {Error}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
