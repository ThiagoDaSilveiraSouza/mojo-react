import React from 'react'

import { Switch, Route } from 'react-router-dom'

// components
import { Home } from './pages/home'
import { Branding } from './pages/branding'
import { Design } from './pages/design'
import { Page404 } from './pages/page-404'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/branding" component={Branding} />
      <Route exact path="/design" component={Design} />
      <Route exact path="*" component={Page404} />
    </Switch>
  )
}
