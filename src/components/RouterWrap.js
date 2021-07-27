import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
const RouterWrap = ({ component: Component, ...rest }) => {
   const { currentUser } = useAuth()
   return (
      <Route
         {...rest}
         render={
            props => {
               if (currentUser) {
                  return <Component {...props} />
               }
               else {
                  alert('Please Log In');
                  return <Redirect to="/login" />
               }
            }
         }
      >

      </Route>
   )
}

export default RouterWrap
