import React from 'react'
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom'
import { useAuth } from '../hooks/auth'

interface RouteProps extends ReactRouteProps {
  component: React.ComponentType
}

const NotAuthenticatedRoute: React.FC<RouteProps> = ({
  component: Component,
  children,
}) => {
  const { user } = useAuth()

  return (
    <ReactRoute render={() => (!user ? <Component /> : <Redirect to="/" />)}>
      {children}
    </ReactRoute>
  )
}

export default NotAuthenticatedRoute
