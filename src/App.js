import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Whatwedo from './components/What/Whatwedo';
import Careers from './components/Careers/Careers';

function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/whatwedo' component={Whatwedo}></Route>
      <Route exact path='/careers' component={Careers}></Route>

      {/* <Route exact path='/dash/:place' component={Index}></Route>
      <Route exact path='/reciept' component={Reciept}></Route> */}
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
