import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IInvasions, etaDate } from '../interfaces/index';
import { requestInvasions } from '../actions/actions';
import { calcDate } from '../utilities/calcDate';
import { add } from 'date-fns';
import Injector from '../assets/images/injector.png';
import Fieldron from '../assets/images/fieldron.png';
import Mutagen from '../assets/images/mutagen.png';

interface CountDownDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Invasions() {
  const invasions = useSelector<IInvasions, any>(state => state.invasions)
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState<any[]>([]);
  const [countDownDates, setCountDownDates] = useState<Date[]>([]);
  const [dateInWords, setDateInWords] = useState<CountDownDate[]>([]);
  let invasionsData = invasions.invasions;

  useEffect(
    () => {
      if (invasions.invasions.length < 1) {
        return;
      }
      let dateArray: Date[] = [];
      etaSplit().map((eta:etaDate) => {
        dateArray.push(calcDate(eta.etaIntegers.reverse()))
      });
      const timeArray: any[] = dateArray.map((date: Date) => {
        return calculateTimeLeft(date);
      });
      setTimeLeft(timeArray);
    },
    [invasions]
  );

  useEffect(
    () => {
      console.log(timeLeft);
      const dates: Date[] = [];
      for (const time of timeLeft) {
        const { days, hours, minutes, seconds } = time;
        dates.push(getRemainingTime([days, hours, minutes, seconds]));
      }
      setCountDownDates(dates);
    },
    [timeLeft]
  );

  useEffect(
    () => {
      setTimeout(() => {
        const counterDates: CountDownDate[] = countDownDates.map((date: Date) => calculateTimeLeft(date))
        setDateInWords(counterDates);
      }, 1000);
    },
    [countDownDates, dateInWords]
  );

  useEffect(() => {
    dispatch(requestInvasions());
  }, [dispatch]);

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
          node: invasion.node,
          desc: invasion.desc,
          etaIntegers,
          attackerRewardItem: invasion.defenderReward.itemString,
          defenderRewardItem: invasion.defenderReward.itemString
        };
        etas.push(etaObj);
      }
    });

    return etas;
  };

  const getRemainingTime = (remainingTimeArray: number[]): Date => {
    const [remainingDays, remainingHours, remainingMinutes, remainingSeconds]: number[] = remainingTimeArray;
    const date: Date = new Date()
    return add(date, {
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
    });
  };

  const calculateTimeLeft = (date: Date): CountDownDate => {
    const difference = +new Date(date) - +new Date();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  return (
    <>
      <section className='invasions boxed'>
        <h2 className='invasions__title'>Invasions</h2>
        <div className='invasions-container'>
          {
            etaSplit().map((invasion: any, index: any) => (
              <div className='invasions-container-data' key={index}>
                <p>{invasion.node}</p>
                <p>{invasion.desc}</p>
                <p>
                  {dateInWords[index] !== undefined && `
                    ${dateInWords[index].days && dateInWords[index].days}d
                    ${dateInWords[index].hours && dateInWords[index].hours}h
                    ${dateInWords[index].minutes && dateInWords[index].minutes}m
                    ${dateInWords[index].seconds}s`
                  }
                </p>
              </div>
            ))
          }
        </div>
        <div className='invasions-rewards'>
          <div className='invasions-rewards-inner'>
            <h4>Possible Rewards:</h4>
            <div className='invasions-images'>
              <div className='invasions-images-container'>
                <img src={Injector} className='invasions-images__image' alt='asset' />
                <h5>Denonite Injector</h5>
              </div>
              <div className='invasions-images-container'>
                <img src={Fieldron} className='invasions-images__image' alt='asset' />
                <h5>Fieldron</h5>
              </div>
              <div className='invasions-images-container'>
                <img src={Mutagen} className='invasions-images__image' alt='asset' />
                <h5>Mutagen Mass</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}