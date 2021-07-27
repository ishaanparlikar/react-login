import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router'
const Navbar = () => {
   const { currentUser, logout } = useAuth()
   const [error, setError] = useState('')
   const history = useHistory()
   async function logOut() {
      setError('')

      try {
         await logout();
         history.push('/login')
      } catch (error) {
         setError('Failed to logout')
      }
   }
   return (
      <div>
         <h4>{currentUser.email}</h4>
         <Button onClick={logOut}>Logout</Button>
      </div>
   )
}

export default Navbar
