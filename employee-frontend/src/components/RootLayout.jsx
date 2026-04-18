import React from 'react'
import Header from './Header'

import {Outlet} from 'react-router'
function RootLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-screen mx-16 bg-gray-100">
        <Outlet />
      </div>
      
    </div>
  )
}

export default RootLayout