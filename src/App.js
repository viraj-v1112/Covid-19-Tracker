import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import CoronaState from "./context/corona/CoronaState";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Helpline from "./pages/Helpline";
import { useSpring, animated } from "react-spring";

const App = () => {
  const fade = useSpring({
    config: {
      duration: 1000
    },
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  return (
    <CoronaState>
      <Router>
        <animated.div className='App' style={fade}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/helpline' component={Helpline} />
          </Switch>
          <Footer />
        </animated.div>
      </Router>
    </CoronaState>
  );
};

export default App;
