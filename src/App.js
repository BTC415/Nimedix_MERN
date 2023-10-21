import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppPage from './layouts/AppPage'

const App = () => {
  const location = useLocation()
  const [isAuthPage, setAuthPage] = useState(false)

  useEffect(() => {
    const path = location.pathname
    if (path.includes('login') || path.includes('signup')) {
      setAuthPage(true)
    } else {
      setAuthPage(false)
    }
  }, [location])

  return (
    <div id="nimedix-app" className="m-0 p-0 static">
      <AppPage isAuthPage={isAuthPage}>
        <Outlet />
      </AppPage>
    </div>
  )
}

export default App
