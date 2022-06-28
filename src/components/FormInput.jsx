import { useState } from 'react'
import './formInput.css'
export const FormInput = (props) => {
    const {label,onChange,errorMessage, id, ...inputProps} = props

    const [focused, setFocused] = useState(false)
    const handleFocus = (e)=>{
      setFocused(true)
    }
  return (
    <div className='formInput'>
        <label htmlFor="">{label}</label>
        <input {...inputProps} 
        onChange={onChange} 
        focused={focused.toString()} 
        onBlur={handleFocus}
        onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true) }
        />
        <span>{errorMessage}</span>
    </div>
  )
}
