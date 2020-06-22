import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLink?: string,
  buttonText: string,
  buttonClass?: string
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  const { buttonClass, buttonLink, buttonText, onClick }: IButtonProps = props;

  return (
    <>
      <a className={`button ${buttonClass}`} href={buttonLink} onClick={onClick}>
        <span />
        <span />
        <span />
        <span />
        {buttonText}
      </a>
    </>
  )
}
