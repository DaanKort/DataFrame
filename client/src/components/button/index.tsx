import React from 'react';

export interface IButtonProps {
  buttonLink: string,
  buttonText: string,
  buttonClass?: string
}

export default function Button(props: IButtonProps) {
  const { buttonClass, buttonLink, buttonText }: IButtonProps = props;

  return (
    <>
      <a className={`button ${buttonClass}`} href={buttonLink}>
        <span />
        <span />
        <span />
        <span />
        {buttonText}
      </a>
    </>
  )
}
