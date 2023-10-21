import React, { Fragment } from 'react'
import AppFooter from '../containers/AppFooter'
import AppFooterNavbar from '../containers/AppFooterNavbar'
import AppHeader from '../containers/AppHeader'

const AppPage = ({ isAuthPage, children }) => {
  return (
    <div id="nimedix-app">
      {isAuthPage ? (
        <div>{children}</div>
      ) : (
        <Fragment>
          <AppHeader />
          {children}
          <AppFooterNavbar />
          <AppFooter />
        </Fragment>
      )}
    </div>
  )
}

export default AppPage
