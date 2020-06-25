import React, { ReactEventHandler, TouchEventHandler } from 'react';

export interface IButtonProps {
  buttonLink?: string,
  buttonText: string,
  buttonClass?: string
  onTouch?: ReactEventHandler;
  onClick?: ReactEventHandler;
}

export default function Button(props: IButtonProps) {
  const { buttonClass, buttonLink, buttonText, onClick, onTouch }: IButtonProps = props;

  return (
    <>
      <a className={`button ${buttonClass}`} href={buttonLink} onClick={onClick} onTouchStart={onTouch} >
        <span />
        <span />
        <span />
        <span />
        {buttonText}
      </a>
    </>
  )
}
