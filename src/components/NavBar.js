import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <nav>
        <div
          className='nav-wrapper'
          style={{
            backgroundImage: "linear-gradient(19deg,#0067a1,#303f9f)"
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
