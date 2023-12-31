import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import RegisteredPatients from './pages/RegisteredPatients/RegisteredPatients';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Contact" component={Contact} />
          <Route path="/RegisteredPatients" component={RegisteredPatients} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
