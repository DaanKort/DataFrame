import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestWeaponData, requestNews, requestFrameData, requestMods, requestArcanes, requestResources, requestCetusCycle, requestVallisCycle, requestAlerts, requestEvents, requestDeals, requestFissures, requestSorties } from '../actions/actions'
import { IWeapons, INews, IFrames, IMods, IArcanes, IResources, ICetusCycle, IVallisCycle, IAlerts, IEvents, IDailyDeals, ISorties, IFissures } from '../interfaces/index';
import Glider from '../components/glider/index';
import Button from '../components/button/index';
import CardInfo from '../components/card/cardInfo';

export default function Home() {
  const news = useSelector<INews, any>(state => state.news)
  const weapons = useSelector<IWeapons, any>(state => state.weapons)
  const frames = useSelector<IFrames, any>(state => state.frames)
  const mods = useSelector<IMods, any>(state => state.mods)
  const arcanes = useSelector<IArcanes, any>(state => state.arcanes)
  const resources = useSelector<IResources, any>(state => state.resources)
  const cetusCycle = useSelector<ICetusCycle, any>(state => state.cetusCycle)
  const vallisCycle = useSelector<IVallisCycle, any>(state => state.vallisCycle)
  const alerts = useSelector<IAlerts, any>(state => state.alerts)
  const events = useSelector<IEvents, any>(state => state.events)
  const deals = useSelector<IDailyDeals, any>(state => state.deals)
  const sorties = useSelector<ISorties, any>(state => state.sorties)
  const fissures = useSelector<IFissures, any>(state => state.fissures)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNews());
    dispatch(requestWeaponData());
    dispatch(requestFrameData());
    dispatch(requestMods());
    dispatch(requestArcanes());
    dispatch(requestResources());
    dispatch(requestCetusCycle());
    dispatch(requestVallisCycle());
    dispatch(requestAlerts());
    dispatch(requestEvents());
    dispatch(requestDeals());
    dispatch(requestFissures());
    dispatch(requestSorties());
  }, [dispatch]);

  let weaponData = weapons.weapons
  let newsData = news.news
  let frameData = frames.frames
  let modData = mods.mods
  let arcaneData = arcanes.arcanes
  let resourceData = resources.resources
  let cetusCycleData = cetusCycle
  let vallisCycleData = vallisCycle.vallisCycle
  let alertsData = alerts.alerts
  let eventData = events.events
  let dealsData = deals.deals
  let sortiesData = sorties.sorties
  let fissureData = fissures.fissures

  console.log('News: ', newsData);
  console.log('Weapons: ', weaponData);
  console.log('Frames: ', frameData);
  console.log('Mods: ', modData);
  console.log('Arcanes: ', arcaneData);
  console.log('Recources: ', resourceData);
  console.log('Cetus: ', cetusCycleData);
  console.log('Vallis: ', vallisCycleData);
  console.log('Alerts: ', alertsData);
  console.log('Events: ', eventData);
  console.log('Deals: ', dealsData);
  console.log('Fissures: ', fissureData);
  console.log('Sorties: ', sortiesData);

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
        <div className='home-cards boxed'>
        </div>
      </section>
    </>
  )
}
