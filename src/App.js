import './App.css';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <header>
              <Navigation />
          </header>

          <Route exact path="/">
            <p>Home</p>
          </Route>

          <Route path="/about">
            <p>About</p>
          </Route>

          <Route path="/contact">
            <p>Contact</p>
          </Route>

          <footer>
              <Footer />
          </footer>
      </div>
    </Router>
  );
}

export default App;
