import React, { useState } from 'react';
import Brand from '../../assets/images/brand-white.png';
import Button from '../button/index';
import { logoutSuccess } from "../../actions/actions";
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faNewspaper, faFistRaised, faDatabase, faSkullCrossbones, faMeteor, faCloud, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface IState {
  navMenu: boolean;
  loggedIn: boolean;
}

interface IAuth {
  auth: {};
  loggedIn: boolean;
  user: {
    email: string;
    id: string
  }
}

export default function Nav() {
  const dispatch = useDispatch();
  const [navMenu, setNavMenu] = useState<IState | boolean>(false);
  const navToggle = () => {
    !navMenu ? setNavMenu(true) : setNavMenu(false);
  }
  const auth: IAuth = useSelector<IAuth>(state => state.auth) as IAuth;

  const navToggleDesktop = () => {
    const nav = document.querySelectorAll('.nav');
    const texts = document.querySelectorAll('.nav__text');
    const content = document.querySelectorAll('.content');

    nav.forEach(nav => {
      if (!nav.classList.contains('nav--open')) {
        nav.classList.add('nav--open');
        nav.querySelector('.nav__arrow')?.classList.add('nav__arrow--open');
        setTimeout(() => {
          nav.querySelector('.nav__asset')?.classList.add('nav__asset--open');
          nav.querySelector('.nav__button')?.classList.add('nav__button--open');
        }, 300);
      } else {
        nav.classList.remove('nav--open');
        nav.querySelector('.nav__arrow')?.classList.remove('nav__arrow--open');
        nav.querySelector('.nav__asset')?.classList.remove('nav__asset--open');
        nav.querySelector('.nav__button')?.classList.remove('nav__button--open');
      }
    });

    texts.forEach(text => {
      if (!text.classList.contains('nav__text--open')) {
        setTimeout(() => {
          text.classList.add('nav__text--open');
        }, 300);
      } else {
        text.classList.remove('nav__text--open');
      }
    });

    content.forEach(content => {
      if (!content.classList.contains('content--open')) {
        content.classList.add('content--open');
      } else {
        content.classList.remove('content--open');
      }
    });
    navToggle();
  }


  const handleLogout = () => {
    dispatch(logoutSuccess());
  }

  return (
    <>
      <nav className='nav'>
        <div className='nav-inner'>
          <div className={!navMenu ? 'nav__icon' : 'nav__icon nav__icon--open'} onClick={navToggle}>
            <span />
            <span />
            <span />
          </div>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className='nav__arrow' onClick={navToggleDesktop} />
          <Link to='/' className='nav__brand' onClick={navMenu ? navToggle : () => { }}>
            <img className='nav__logo' src={Brand} alt='brand' />
            <h5 className='nav__text nav__text--brand'>DataFrame</h5>
          </Link>
          <p className='nav__text nav__text--email'>{auth.loggedIn && auth.user && auth.user.email}</p>
          <ul className={!navMenu ? 'nav-list' : 'nav-list nav-list--open'}>
            <Link to='/news' className='nav__link' onClick={navToggle}>
              <li className='nav__item'>
                <FontAwesomeIcon icon={faNewspaper} className='nav__asset' />
                <p className='nav__text'>News</p>
              </li>
            </Link>
            <Link to='/invasions' className='nav__link' onClick={navToggle}>
              <li className='nav__item'>
                <FontAwesomeIcon icon={faFistRaised} className='nav__asset' />
                <p className='nav__text'>Invasions</p>
              </li>
            </Link>
            <Link to='/items' className='nav__link' onClick={navToggle}>
              <li className='nav__item'>
                <FontAwesomeIcon icon={faDatabase} className='nav__asset' />
                <p className='nav__text'>Items</p>
              </li>
            </Link>
            <Link to='/sorties' className='nav__link' onClick={navToggle}>
              <li className='nav__item'>
                <FontAwesomeIcon icon={faSkullCrossbones} className='nav__asset' />
                <p className='nav__text'>Sorties</p>
              </li>
            </Link>
            <Link to='/fissures' className='nav__link' onClick={navToggle}>
              <li className='nav__item'>
                <FontAwesomeIcon icon={faMeteor} className='nav__asset' />
                <p className='nav__text'>Fissures</p>
              </li>
            </Link>
            <Link to='/cycles' className='nav__link' onClick={navToggle}>
              <li className='nav__item'>
                <FontAwesomeIcon icon={faCloud} className='nav__asset' />
                <p className='nav__text'>Cycles</p>
              </li>
            </Link>
            {
              !auth.loggedIn ? <Button buttonText='Login' buttonLink='/register' buttonClass='nav__button button-primary' /> : <Button buttonText='Logout' buttonLink='#' buttonClass='nav__button button-primary' onClick={() => handleLogout()} />
            }

            {
              !navMenu && !auth.loggedIn && <Link to='/register' className='nav__link'>
                <li className='nav__item'>
                  <FontAwesomeIcon icon={faSignInAlt} className='nav__asset' />
                </li>
              </Link>
            }
          </ul>
        </div>
      </nav>
    </>
  )
}
