import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import {WatchListContextProvider} from './context/WatchListContext'

import './App.css'

function App() {
  return (
    <WatchListContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/:id" exact component={Details} />
          </Switch>
        </Router>
      </div>
    </WatchListContextProvider>
  );
}

export default App;
