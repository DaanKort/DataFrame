import React from 'react'


const buttonClassMap = {
  normal: '',
  primary: 'is-primary',
  info: 'is-info',
  success: 'is-success'
} as const

const buttonType = {
  button: 'button',
  link: 'link',
}

type ButtonClass = keyof typeof buttonClassMap;
type ButtonType = keyof typeof buttonType;

type ButtonProps = {
  className?: ButtonClass,
  type?: ButtonType
}

const ButtonExample: React.FC<ButtonProps> = ({ children, className = 'normal', type = 'button' }) => {
  const getButtonClass = (className: ButtonClass): string => {
    return buttonClassMap[className];
  }
  const getButtonType = (type: ButtonType): string => {
    return buttonType[type];
  }
  return (
    <>
      {
        getButtonType(type) === 'button' ?
          <button className={`'section' ${getButtonClass(className)}`}>
            {children}
          </button>
          : getButtonType(type) === 'link' ?
            <a className={`'section' ${getButtonClass(className)}`}>
              {children}
            </a>
            :
            <button className={`'section' ${getButtonClass(className)}`}>
              {children}
            </button>
      }
    </>
  )
}

export default ButtonExample;
