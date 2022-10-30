import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import './App.css'
import SignUpForm from './components/SignUpForm'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/create-user" component={SignUpForm} />
    </Switch>
  </BrowserRouter>
)
export default App
