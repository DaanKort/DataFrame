import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

interface IRegularCardProps {
  cardRegularTitle: string,
  cardRegularButtonText?: string,
  cardRegularButtonLink?: string,
  cardRegularButtonClass?: string | undefined,
  children: any
}

interface IState {
  cardMenu: boolean
}

export default function CardRegular(props: IRegularCardProps) {
  const { cardRegularTitle, children, cardRegularButtonText, cardRegularButtonLink, cardRegularButtonClass }: IRegularCardProps = props;

  const [cardMenu, setCardMenu] = useState<IState | boolean>(false);

  const toggleCardMenu = () => {
    !cardMenu ? setCardMenu(true) : setCardMenu(false)
  }

  return (
    <>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-border'>
            <h5 className='card__title'>{cardRegularTitle}</h5>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={!cardMenu ? 'card-menu__icon' : 'card-menu__icon card-menu__icon--open'} onClick={toggleCardMenu} />
          </div>
          <div className='card-content'>
            {children}
          </div>
          {cardRegularButtonText &&
            <div className='card-border'>
              <Link className={`button ${cardRegularButtonClass}`} to={{ pathname: cardRegularButtonLink }}>
                <span />
                <span />
                <span />
                <span />
                {cardRegularButtonText}
              </Link>
            </div>
          }
        </div>
        <div className={!cardMenu ? 'card-menu' : 'card-menu card-menu--open'}>
          <div className='card-menu__inner'>
            <FontAwesomeIcon icon={faHeart} className='card-menu__option' />
            <FontAwesomeIcon icon={faStar} className='card-menu__option' />
          </div>
        </div>
      </div>
    </>
  )
}
