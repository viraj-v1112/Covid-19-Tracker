import React, { useContext, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import CoronaState from './context/corona/CoronaState';
import CoronaContext from './context/corona/coronaContext';
import CardView from './components/CardView';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Helpline from './pages/Helpline';
import { useSpring, animated } from 'react-spring';

const App = () => {
  // const coronaContext = useContext(CoronaContext);
  // const { total, getStats } = coronaContext;
  // const { confirmed, recovered, deaths, active } = total;
  // useEffect(() => {
  //   getStats();
  //   // eslint-disable-next-line
  // }, []);
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
          {/* <Card title='Total Cases' value={confirmed} />
        <Card title='Recovered' value={recovered} />
        <Card title='Deaths' value={deaths} />
        <Card title='Active' value={active} /> */}

          <Footer />
        </animated.div>
      </Router>
    </CoronaState>
  );
};

export default App;
