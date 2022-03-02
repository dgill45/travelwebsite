import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} 
from "react-router-dom";
import './App.css';

function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path = '/'/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
