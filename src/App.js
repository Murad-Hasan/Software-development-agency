import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
