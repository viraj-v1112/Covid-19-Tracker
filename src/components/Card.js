import React from 'react';
import { useSpring, animated } from 'react-spring';

const Card = ({ title, value, color1, color2, degrees }) => {
  const fade = useSpring({
    config: {
      duration: 500
    },
    from: {
      opacity: 0
      //padding: 200
    },
    to: {
      opacity: 1
      //padding: 0
    }
  });

  const increment = useSpring({
    from: {
      number: 0
    },
    number: value
  });

  return (
    <animated.div className='container' style={fade}>
      <div className='row'>
        <div
          className='card z-depth-3'
          style={{
            backgroundImage: `linear-gradient(${degrees}deg,${color1}, ${color2})`
          }}
        >
          <div className='card-content white-text center'>
            <span className='card-title'>{title}</span>
            <span className='white-text' style={{ fontSize: '35px' }}>
              <animated.strong>
                {increment.number.interpolate(x => Math.floor(x))}
              </animated.strong>
            </span>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
