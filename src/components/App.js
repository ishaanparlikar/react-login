import Signup from './Signup'
import Dashboard from './Dashboard';
import Login from './Login';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import RouterWrap from './RouterWrap'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>

          <Switch>
            <RouterWrap exact path="/" component={Dashboard} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/login" component={Login} />


          </Switch>

        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
