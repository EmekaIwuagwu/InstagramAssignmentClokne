import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyLogin from './MyLogin';
import MyRegister from './MyRegister';
import MyDashBoard from './MyDashBoard';
import Followers from './Followers';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path = '/login-page' component={MyLogin} exact/>
            <Route path = '/register' component={MyRegister} />
            <Route path = '/dashboard' component={MyDashBoard} />
            <Route path = '/followers' component={Followers} />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
