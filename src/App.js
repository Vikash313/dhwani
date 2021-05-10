import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Page1 from './components/page1'
import Page2 from './components/page2'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
