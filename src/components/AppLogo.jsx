import React from 'react'
import logo from '../logo.svg'

function AppLogo({className = '', ...props}) {
  return (
    <img src={logo} className={`App-logo ${className}`.trim()} alt="logo" {...props} />
  )
}

export default AppLogo