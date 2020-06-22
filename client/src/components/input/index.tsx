import React from 'react'

interface InputProps {
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>,
  inputClass?: string,
  inputWrapperClass?: string,
  inputPlaceholder?: string,
  value?: string,
  name: string
  type: string
}

export default function Input(props: InputProps) {

  const { 
    onInputChange, 
    inputClass, 
    inputWrapperClass, 
    value,
    name, 
    inputPlaceholder, 
    type }: InputProps = props;

  return (
    <div className={`input-wrapper ${inputWrapperClass}`}>
      <input type={type} onChange={onInputChange} value={value} name={name} className={`input ${inputClass || ''}`} placeholder={inputPlaceholder} />
    </div>
  )
}
