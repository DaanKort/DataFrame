import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ICetusCycle, IVallisCycle } from '../interfaces/index';
import { requestCetusCycle, requestVallisCycle } from '../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faSnowflake, faFire } from '@fortawesome/free-solid-svg-icons';

export default function Cycles() {
  const cetusCycle = useSelector<ICetusCycle, any>(state => state.cetusCycle)
  const vallisCycle = useSelector<IVallisCycle, any>(state => state.vallisCycle)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCetusCycle());
    dispatch(requestVallisCycle());
  }, [dispatch]);

  let cetusData = cetusCycle;
  let vallisData = vallisCycle;

  console.log(cetusData);
  console.log(vallisData);

  return (
    <section className='cycles boxed'>
      <h2 className='cycles__title'>Cycles</h2>
      <div className='cycles-container'>
        <div className='cycles-column'>
          <div className='cycles-inner'>
            <h3>Cetus</h3>
            <FontAwesomeIcon icon={cetusData.cetusCycle.isDay ? faSun : faMoon} className='cycles__asset' />
            <article className='cycles-content'>
              <p>{cetusData.cetusCycle.state}</p>
              <p>{cetusData.cetusCycle.shortString}</p>
            </article>
          </div>
        </div>
        <div className='cycles-column'>
          <div className='cycles-inner'>
            <h3>Orb Vallis</h3>
            <FontAwesomeIcon icon={vallisData.vallisCycle.isWarm ? faFire : faSnowflake} className='cycles__asset' />
            <article className='cycles-content'>
              <p>{vallisData.vallisCycle.state}</p>
              <p>{vallisData.vallisCycle.shortString}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
