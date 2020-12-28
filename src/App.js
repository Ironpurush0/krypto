import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/:id" exact component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
