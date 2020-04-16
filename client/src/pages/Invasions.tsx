import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IInvasions, etaDate } from '../interfaces/index';
import { requestInvasions } from '../actions/actions';
import { calcDate } from '../utilities/calcDate';

export default function Invasions() {
  const invasions = useSelector<IInvasions, any>(state => state.invasions)
  const dispatch = useDispatch();

  let invasionsData = invasions.invasions;

  (() => {
    invasionsData.sort((a:any, b:any) => {
      if (a.node < b.node) { return -1; }
      if (a.node> b.node) { return 1; }
      return 0;
    })
  })();


  const etaSplit = () => {
    let etas = new Array();
    invasionsData.map((invasion:any, index:number) => {
      if (invasion.eta.charAt(0) !== '-' && !isNaN(parseInt(invasion.eta))) {
        const etaSplit = invasion.eta.split(' ');
        const etaIntegers = etaSplit.map((eta:any) => {
          let etaInt = parseInt(eta.substring(0, eta.length -1));
          return etaInt;
        })

        let etaObj = {
          index,
          etaIntegers
        };

        etas.push(etaObj);
      }
    });

    return etas;
  }

  let dateArray: Date[] = [];
  etaSplit().map((eta:etaDate) => {
    dateArray.push(calcDate(eta.etaIntegers.reverse()))
  })

  const calculateTimeLeft = (date: Date) => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const timeArray: any[] = dateArray.map((date: Date) => {
    return calculateTimeLeft(date);
  })

  const [timeLeft, setTimeLeft] = useState<any[]>([]);

  setTimeLeft(timeArray);

  useEffect(() => {
    dispatch(requestInvasions());
    setTimeout(() => {
      setTimeLeft(dateArray.map((date: Date) => {
        return calculateTimeLeft(date);
      }));
    }, 1000);
  }, [dispatch, timeLeft]);

  return (
    <>
      <section className='invasions boxed'>
        <h2 className='invasions__title'>Invasions</h2>
        <div className='invasions-container'>
          {
            timeLeft.map((time:any, index:number) => (
              <div key={index}>
                <p>{time.days}D {time.hours}H {time.minutes}M {time.seconds}S</p>
              </div>
            ))
          }
          {/* {
            invasionsData.map((invasion: any, index: any) => (
              invasion.eta.charAt(0) !== '-' && (
                <div className='invasions-data' key={index}>
                  <div className='invasions-data__info'>
                    <h5>{invasion.node}</h5>
                    <h5>{invasion.desc}</h5>
                    <h5 className='invasions-data__eta'>{invasion.eta}</h5>
                  </div>
                  <article className='invasions-data__inner'>
                    {invasion.attackerReward.itemString && (
                      <div className='invasions-data__attack'>
                        <p>{invasion.attackerReward.itemString}</p>
                      </div>
                    )}
                    {invasion.defenderReward.itemString && (
                      <div className='invasions-data__defend'>
                        <p>{invasion.defenderReward.itemString}</p>
                      </div>
                    )}
                  </article>
                </div>
              )
            ))
          } */}
        </div>
      </section>
    </>
  )
}
