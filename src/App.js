import logo from './logo.svg';
import './App.css';
import Manubar from './components/Manubar/Manubar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';




function App() {


  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Manubar></Manubar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Manubar></Manubar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Manubar></Manubar>
            <About></About>
            <Footer></Footer>

          </Route>
          <Route path="/services">
            <Manubar></Manubar>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route>
            <Manubar></Manubar>
            <Contact></Contact>
            <Footer></Footer>

          </Route>
          <Route path="*">
            <Manubar></Manubar>
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}


export default App;

