import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IFissures } from '../interfaces/index';
import { requestFissures } from '../actions/actions';

export default function Fissures() {
  const fissures = useSelector<IFissures, any>(state => state.fissures)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestFissures());
  }, [dispatch]);

  let fissuresData = fissures.fissures;

  (() => {
    const compare = (a: any, b: any) => {
      if (a.tierNum > b.tierNum) return 1;
      if (b.tierNum > a.tierNum) return -1;
      return 0;
    }

    fissuresData.sort(compare);
  })()

  return (
    <section className='fissures boxed'>
      {
        fissuresData.sort().map((fissure: any, index: any) => (
          <article className='fissures-container' key={index}>
            <div className='fissures-inner'>
              <p className='fissures__tier'>T{fissure.tierNum}</p>
              <h3 className='fissures__node'>{fissure.node}</h3>
              <h5 className='fissures__mission'>{fissure.enemy} - {fissure.missionType}</h5>
              <h6 className='fissures__era'>{fissure.tier}</h6>
              <p className='fissures__eta'>{fissure.eta}</p>
            </div>
          </article>
        ))
      }
    </section>
  )
}
