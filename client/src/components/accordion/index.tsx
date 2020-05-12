import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface IAccrodrionProps {
  accordionClass?: string;
  accordionTitle: string | boolean;
  children: any
}

interface IState {
  accordion: boolean;
}

export default function Accordion(props: IAccrodrionProps) {

  const [accordion, setAccordion] = useState<IState | boolean>(false);

  const { accordionClass, accordionTitle, children }: IAccrodrionProps = props;

  const accordionToggle = () => {
    !accordion ? setAccordion(true): setAccordion(false);
  }

  return (
    <div className={accordionClass ? `accordion ${accordionClass}` : 'accordion'}>
      <div className='accordion-header' onClick={accordionToggle}>
        <div className='accordion-header__inner'>
          <h3 className='accordion__title'>{accordionTitle}</h3>
          <FontAwesomeIcon icon={faChevronUp} className={!accordion ? 'accordion__icon' : 'accordion__icon accordion__icon--open'} />
        </div>
      </div>
      <div className={!accordion ? 'accordion-content' : 'accordion-content accordion-content--show'}>
        {children}
      </div>
    </div>
  )
}
