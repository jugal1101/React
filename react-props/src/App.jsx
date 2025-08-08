import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './component/User'
import UserData from './assets/main'

function App() {

  return (
    <>
    {UserData.map((user)=>(
      <User name={user.name} email={user.email}/>
    ))}
    </>
  )
}

export default App
