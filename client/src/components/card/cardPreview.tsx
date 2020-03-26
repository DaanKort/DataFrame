import React from 'react'

interface IPreviewCardProps {
  cardPreviewImage: string,
  cardPreviewTitle: string,
  cardPreviewButtonText?: string,
  cardPreviewButtonLink?: string,
  cardPreviewButtonClass?: string,
  children: any
}

export default function CardPreview(props: IPreviewCardProps) {
  const { cardPreviewTitle, children, cardPreviewImage, cardPreviewButtonText, cardPreviewButtonLink, cardPreviewButtonClass }: IPreviewCardProps = props;
  return (
    <>
      <div className='card card-preview'>
        <div className='card-inner'>
          <img className='card-image' src={cardPreviewImage} alt='cover' />
          <span className='card-overlay' />
          <div className='card-overlay-content'>
            <div className='card-border'>
              <h5 className='card__title'>{cardPreviewTitle}</h5>
            </div>
            <div className='card-content'>
              {children}
            </div>
            {cardPreviewButtonText &&
              <a className={`button ${cardPreviewButtonClass}`} href={cardPreviewButtonLink}>
                <span />
                <span />
                <span />
                <span />
                {cardPreviewButtonText}
              </a>
            }
          </div>
        </div>
      </div>
    </>
  )
}
