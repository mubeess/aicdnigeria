import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/about' component={About}></Route>
      {/* <Route exact path='/dash/:place' component={Index}></Route>
      <Route exact path='/reciept' component={Reciept}></Route> */}
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
