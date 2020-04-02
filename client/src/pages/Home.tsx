import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestNews, requestCetusCycle, requestVallisCycle, requestAlerts, requestEvents, requestDeals, requestFissures, requestInvasions } from '../actions/actions'
import { INews, ICetusCycle, IVallisCycle, IAlerts, IEvents, IDailyDeals, IFissures, IInvasions } from '../interfaces/index';
import Glider from '../components/glider/index';
import Button from '../components/button/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faSlash } from '@fortawesome/free-solid-svg-icons';
import Injector from '../assets/images/injector.png';
import Fieldron from '../assets/images/fieldron.png';
import Mutagen from '../assets/images/mutagen.png';

export default function Home() {
  const news = useSelector<INews, any>(state => state.news)
  const cetusCycle = useSelector<ICetusCycle, any>(state => state.cetusCycle)
  const vallisCycle = useSelector<IVallisCycle, any>(state => state.vallisCycle)
  const alerts = useSelector<IAlerts, any>(state => state.alerts)
  const events = useSelector<IEvents, any>(state => state.events)
  const deals = useSelector<IDailyDeals, any>(state => state.deals)
  const fissures = useSelector<IFissures, any>(state => state.fissures)
  const invasions = useSelector<IInvasions, any>(state => state.invasions)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNews());
    dispatch(requestCetusCycle());
    dispatch(requestVallisCycle());
    dispatch(requestAlerts());
    dispatch(requestEvents());
    dispatch(requestDeals());
    dispatch(requestFissures());
    dispatch(requestInvasions());
  }, [dispatch]);

  let newsData = news.news;
  let cetusCycleData = cetusCycle;
  let vallisCycleData = vallisCycle;
  let alertsData = alerts.alerts;
  let eventData = events.events;
  let dealsData = deals.deals;
  let fissureData = fissures.fissures;
  let invasionsData = invasions.invasions;

  (() => {
    for (let i = invasionsData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [invasionsData[i], invasionsData[j]] = [invasionsData[j], invasionsData[i]];
    }
    return invasionsData;
  })();

  (() => {
    for (let i = fissureData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fissureData[i], fissureData[j]] = [fissureData[j], fissureData[i]];
    }
    return fissureData;
  })();

  const gliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <section className='home-wrapper'>
        <Glider settings={gliderSettings} gliderClass='glider--home'>
          <div className='glider-glide glide1'>
            <span className='glider__overlay' />
            <div className='glider-content'>
              <h4 className='glider__title'>News</h4>
              <p className='glider__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button buttonText='Visit' buttonLink='#' buttonClass='glider__button button-gold' />
            </div>
          </div>
          <div className='glider-glide glide2'>
            <span className='glider__overlay' />
            <div className='glider-content'>
              <h4 className='glider__title'>Invasions</h4>
              <p className='glider__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button buttonText='Visit' buttonLink='#' buttonClass='glider__button button-gold' />
            </div>
          </div>
          <div className='glider-glide glide3'>
            <span className='glider__overlay' />
            <div className='glider-content'>
              <h4 className='glider__title'>Items</h4>
              <p className='glider__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button buttonText='Visit' buttonLink='#' buttonClass='glider__button button-gold' />
            </div>
          </div>
          <div className='glider-glide glide4'>
            <span className='glider__overlay' />
            <div className='glider-content'>
              <h4 className='glider__title'>Sorties</h4>
              <p className='glider__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button buttonText='Visit' buttonLink='#' buttonClass='glider__button button-gold' />
            </div>
          </div>
          <div className='glider-glide glide5'>
            <span className='glider__overlay' />
            <div className='glider-content'>
              <h4 className='glider__title'>Fissures</h4>
              <p className='glider__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button buttonText='Visit' buttonLink='#' buttonClass='glider__button button-gold' />
            </div>
          </div>
          <div className='glider-glide glide6'>
            <span className='glider__overlay' />
            <div className='glider-content'>
              <h4 className='glider__title'>Cycles</h4>
              <p className='glider__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button buttonText='Visit' buttonLink='#' buttonClass='glider__button button-gold' />
            </div>
          </div>
        </Glider>
        <div className='home-duo home--spacing boxed'>
          <div className='home-side'>
            <h4 className='home-side__title'>Latest News:</h4>
            {
              newsData.reverse().slice(0, 1).map((news:any, index:any) => (
                <div className='home-side__container' key={index}>
                  <img src={news.imageLink} className='home-side__image' alt='asset' />
                  <h5 className='home-side__title'>{news.message}</h5>
                </div>
              ))
            }
          </div>
          <div className='home-side'>
            {alertsData.length === 0 ? (
              <div className='home-side__empty'>
                <FontAwesomeIcon icon={faExclamationTriangle} className='home-side__icon' />
                <h4>There are no alerts at the moment!</h4>
              </div>
            ) : (
              alertsData.map((alert:any, index:any) => (
                <div className='home-side__data' key={index}>
                  ...alerts
                </div>
              ))
            )}
          </div>
        </div>

        <div className='home-invasions'>
          <div className='home-invasions__wrapper boxed'>
            <h3 className='home-invasions__title'>Invasions</h3>
            <div className='home-invasions__layout'>
              <div className='home-invasions__info'>
                {
                  invasionsData.slice(0, 4).map((invasion:any, index:any) => (
                    <div className='home-invasions__container' key={index}>
                      <h4 className='home-invasions__node'>{invasion.node}</h4>
                      <h5 className='home-invasions__desc'>{invasion.desc}</h5>
                      <h6 className='home-invasions__eta'>{invasion.eta}</h6>
                    </div>
                  ))
                }
              </div>
              <div className='home-invasions__collage'>
                <div className='home-invasions__inner'>
                  <h4>Potential Rewards:</h4>
                  <img src={Injector} className='home-invasions__image' />
                  <img src={Fieldron} className='home-invasions__image' />
                  <img src={Mutagen} className='home-invasions__image' />
                </div>
              </div>
            </div>
          </div>
          <div className='home-invasions__wrap'>
            <Button buttonText='Visit' buttonLink='/invasions' buttonClass='button-gold home-invasions__button' />
          </div>
        </div>

        <div className='home-fissures home--spacing boxed'>
          <h3>Fissures</h3>
          <FontAwesomeIcon icon={faSlash} className='home-fissures__icon' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className='home-fissures__layout'>
            {
              fissureData.slice(0, 3).map((fissure:any, index:any) => (
                <div className='home-fissures__container' key={index}>
                  <div className='home-fissures__wrapper'>
                    <h5>{fissure.tier} T{fissure.tierNum}</h5>
                    <h6>{fissure.node}</h6>
                    <h6>{fissure.missionType} - {fissure.enemy}</h6>
                    <h6>{fissure.eta}</h6>
                  </div>
                </div>
              ))
            }
          </div>
          <Button buttonText='Visit' buttonLink='/fissures' buttonClass='button-gold home-fissures__button' />
        </div>
      </section>
    </>
  )
}
