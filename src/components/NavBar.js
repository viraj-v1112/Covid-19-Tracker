import React, { Fragment, useContext, useEffect } from 'react';
import CoronaContext from '../context/corona/coronaContext';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // const coronaContext = useContext(CoronaContext);
  // const { data, getStats, getHelp, loading } = coronaContext;
  // useEffect(() => {
  //   getStats();
  //   getHelp();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Fragment>
      <nav>
        <div
          className='nav-wrapper'
          style={{
            backgroundImage: 'linear-gradient(19deg,#0067a1,#303f9f)'
          }}
        >
          <div className='brand-logo left'>
            <i className='large material-icons'>place</i>
            <strong>Corona-Tracker</strong>
          </div>

          <ul className='right'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/helpline'>Helpline</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
