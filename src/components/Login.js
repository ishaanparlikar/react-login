import React, { useRef, useState } from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"


const Login = () => {
   const emailRef = useRef()

   const passwordRef = useRef()

   const { login } = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()
   async function handleSubmit(e) {
      e.preventDefault();


      try {
         setError('')
         login(emailRef.current.value, passwordRef.current.value)
         history.push('/')
      } catch (error) {
         setError('Failed to Log In')
      }
   }
   return (
      <Container className="mt-5" style={{ maxWidth: '500px' }}>
         <Card>
            <Card.Body>
               <h2 className="text-center">Log in</h2>

               {error && <Alert variant="danger">{error}</Alert>}
               <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                     <Form.Label>
                        Email
                     </Form.Label>
                     <Form.Control type="email" required ref={emailRef}></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                     <Form.Label>
                        Password
                     </Form.Label>
                     <Form.Control type="password" required ref={passwordRef}></Form.Control>
                  </Form.Group>
                  <p className="mt-4">
                     Dont Have Account
                     <Link to="/sign-up">Sign Up</Link>
                  </p>
                  <Button disabled={loading} className="mt-3 text-center w-100 " type="submit">Login</Button>
               </Form>
            </Card.Body>
         </Card>
      </Container>
   )
}

export default Login
