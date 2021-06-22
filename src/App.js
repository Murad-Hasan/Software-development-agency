import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/Header/NavBar';
import { createContext, useState } from 'react';
import UserLogIn from './Pages/UserLogin/UserLogin';
import Dashboard from './components/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/login'>
              <UserLogIn/>
            </Route>
            <Route path='/dashboard'>
              <Dashboard/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
