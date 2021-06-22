import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/Header/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
