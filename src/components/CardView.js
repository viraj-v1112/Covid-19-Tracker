import React, { Fragment } from 'react';
import { useContext } from 'react';
import CoronaContext from '../context/corona/coronaContext';
import Card from './Card';
import Spinner from './Spinner';
import { useEffect } from 'react';

const CardView = () => {
  const coronaContext = useContext(CoronaContext);
  const { data, getStats, loading, getHelp, setLoading } = coronaContext;
  useEffect(() => {
    setLoading();
    getStats();
    getHelp();

    // eslint-disable-next-line
  }, []);

  const { confirmed = 0, recovered = 0, deaths = 0, active = 0 } = data;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className='row'>
        <div className='col s12 m12 l6 xl6'>
          <Card
            title='Total Cases'
            value={confirmed}
            color1='#0f0c29'
            color2='#004e92'
            degrees='19'
          />
        </div>

        <div className='col s12 m12 l6 xl6'>
          <Card
            title='Active Cases'
            value={active}
            color1='#7b4397'
            color2='#dc2430'
            degrees='287'
          />
        </div>
        <div className='col s12 m12 l6 xl6'>
          <Card
            title='Discharged'
            value={recovered}
            color1='#000000'
            color2='#0f9b0f'
            degrees='90'
          />
        </div>
        <div className='col s12 m12 l6 xl6'>
          <Card
            title='Deceased'
            value={deaths}
            color1='#200122'
            color2='#6f0000'
            degrees='137'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CardView;
