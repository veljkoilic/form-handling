import { useEffect, useRef, useState } from 'react';
import './App.css';
import { FormInput } from './components/FormInput';

function App() {
  //Setting up the minimum date for birthday input[date] 
  const eighteenYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  const year = eighteenYearsAgo.getFullYear().toString();
  const month = (eighteenYearsAgo.getMonth() + 1) <10 ? "0" + (eighteenYearsAgo.getMonth() + 1).toString() : (eighteenYearsAgo.getMonth() + 1).toString();
  const day = eighteenYearsAgo.getDate() < 10 ? "0" + eighteenYearsAgo.getDate().toString() : eighteenYearsAgo.getDate().toString();
  const min = `${year}-${month}-${day}`

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    birthday: min,
    password: '',
    confirmPassword: ''
  })
  const inputs = [
    {
      id:1,
      name: 'username',
      type: 'text',
      placeholder: "Username",
      label: 'Username',
      errorMessage: "The username should be 3-16 characters. Shouldn't include special characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id:2,
      name: 'email',
      type: 'email',
      placeholder: "E-mail",
      label: 'E-mail',
      errorMessage: "Enter a valid e-mail adress",
      required: true,

    },
    {
      id:3,
      name: 'birthday',
      type: 'date',
      placeholder: "Birthday",
      label: 'Birthday',
      errorMessage: "Pick a valid date. Must be 18 years of age.",
    },
    {
      id:4,
      name: 'password',
      type: 'password',
      placeholder: "Password",
      label: 'Password',
      errorMessage: "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters",
      required: true,
      pattern:"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"

    },
    {
      id:5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: "Confirm Password",
      label: 'Confirm Password',
      errorMessage: "Passwords dont match",
      required: true,
      pattern: formData.password 

    },
  ]
const onChange = (e)=>{
   setFormData({...formData,[e.target.name]: e.target.value})
}
// console.log(formData)
  return (
    <div className='app'>
      <form action="" onSubmit={(e)=>(e.preventDefault())}>
      <h1>Register</h1>
        {inputs.map(input=>{
          //Form Data object
          // {
          //   username: '',
          //   email: '',
          //   birthday: '',
          //   password: '',
          //   confirmPassword: ''
          // }
          // na ovaj nacin input value je bindovan za npr formdata.username
          // ^^^^^^^^^^^^^^^^^^^^^^^^^
          if(input.name === 'birthday'){
            return <FormInput 
            key={input.id} min="1900-01-01" max={min} {...input} value={formData[input.name]} onChange={onChange}/>
          }else{
            return <FormInput 
            key={input.id} {...input} value={formData[input.name]} onChange={onChange}/>
          }
        })}
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
