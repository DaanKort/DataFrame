import React from 'react'

interface InputProps {
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>,
  inputClass?: string,
  inputWrapperClass?: string,
  inputPlaceholder?: string,
  value?: string,
  type: string
}

export default function Input(props: InputProps) {

  const { onInputChange, inputClass, inputWrapperClass, value, inputPlaceholder, type }: InputProps = props;

  return (
    <div className={`input-wrapper ${inputWrapperClass}`}>
      <input type={type} onChange={onInputChange} value={value} className={`input ${inputClass}`} placeholder={inputPlaceholder} />
    </div>
  )
}
