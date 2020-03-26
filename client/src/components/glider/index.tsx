import React from 'react';
import Slider from 'react-slick';

// Modules
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IGliderProps {
  settings: {},
  children: any,
  gliderClass?: string
}

export default function Glider(props: IGliderProps) {
  const { settings, children, gliderClass }: IGliderProps = props;

  return (
    <>
      <Slider {...settings} className={`glider ${gliderClass}`}>
        {children}
      </Slider>
    </>
  )
}
