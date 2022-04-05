import logo from './logo.svg';
import './App.css';
import Register from './auth/register';
import Login from './auth/login';
import { Switch, Route} from 'react-router-dom'
import ProtectedRouter from './auth/protected'
import Home from './auth/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component = {Login}/>
        <Route exact path="/login" component = {Login}/>
        <Route exact path="/register" component = {Register}/>
        <ProtectedRouter exact path = "/home" component={Home}/>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
