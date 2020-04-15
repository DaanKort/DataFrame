import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IInvasions } from '../interfaces/index';
import { requestInvasions } from '../actions/actions';
import { add, differenceInSeconds } from 'date-fns';

export default function Invasions() {
  const invasions = useSelector<IInvasions, any>(state => state.invasions)
  const dispatch = useDispatch();

  let invasionsData = invasions.invasions;
  // console.log(invasionsData);

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
      if (invasion.eta.charAt(0) !== '-') {
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

  const Timer = () => {
    const etaTimes = etaSplit();

    const getRemainingSeconds = (remainingTimeArray: number[]): number => {
      let [remainingSeconds, remainingMinutes, remainingHours, remainingDays]: number[] = remainingTimeArray;
      if (remainingSeconds === undefined) { remainingSeconds = 0 }
      if (remainingMinutes === undefined) { remainingMinutes = 0 }
      if (remainingDays === undefined) { remainingDays = 0 }
      if (remainingHours === undefined) { remainingHours = 0 }
      const date: Date = new Date();
      const laterDate: Date = add(date, {
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
      });
      return differenceInSeconds(laterDate, date);
    }

    let newEtaArray: any[] = [];
    let timeLeft= {};
    etaTimes.forEach((eta:any) => {
      let seconds = getRemainingSeconds(eta.etaIntegers.reverse());

      if (seconds > 0) {
        timeLeft = {
          days: Math.floor(seconds / (10 * 60 * 60 * 24)),
          hours: Math.floor((seconds / (10 * 60 * 60)) % 24),
          minutes: Math.floor((seconds / 10 / 60) % 60),
          seconds: Math.floor((seconds / 10) % 60)
        };
      }

      newEtaArray.push(timeLeft);
      console.log(newEtaArray);
    })
  }

  Timer();

  useEffect(() => {
    dispatch(requestInvasions());
    // setInterval(() => {
    //   Timer();
    // }, 1000)
  }, [dispatch]);

  return (
    <>
      <section className='invasions boxed'>
        <h2 className='invasions__title'>Invasions</h2>
        <div className='invasions-container'>
          {/* {
            newEtaArray.map((time:any) => {

            })
          } */}
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
