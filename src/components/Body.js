import React from 'react'
import Header from './Header'
import Login from './Login'

export const Body = () => {
  return (
    <div>
        <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_medium.jpg" alt="Background Image"/>
        <Header/>
        <Login/>
    </div>
  )
}
