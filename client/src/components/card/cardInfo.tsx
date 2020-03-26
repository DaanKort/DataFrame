import React from 'react'

interface IInfoCardProps {
  cardInfoImage: string,
  cardInfoTitle: string,
  cardInfoButtonText?: string,
  cardInfoButtonLink?: string,
  cardInfoButtonClass?: string,
  children: any
}

export default function CardInfo(props: IInfoCardProps) {
  const { cardInfoTitle, children, cardInfoImage, cardInfoButtonText, cardInfoButtonLink, cardInfoButtonClass }: IInfoCardProps = props;

  return (
    <>
      <div className='card card-info'>
        <div className='card-inner'>
          <img className='card__image' src={cardInfoImage} alt='asset' />
          <div className='card-container'>
            <div className='card-border'>
              <h5 className='card__title'>{cardInfoTitle}</h5>
            </div>
            <div className='card-content'>
              {children}
            </div>
            <div className='card-border'>
                {cardInfoButtonText &&
                  <a className={`button ${cardInfoButtonClass}`} href={cardInfoButtonLink}>
                    <span />
                    <span />
                    <span />
                    <span />
                    {cardInfoButtonText}
                  </a>
                }
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
