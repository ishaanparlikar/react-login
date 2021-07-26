import React, { useRef, useState } from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'


const Signup = () => {
   const emailRef = useRef()
   const mobileRef = useRef()
   const passwordRef = useRef()
   const confirmPasswordRef = useRef()
   const { signup, currentUser } = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)

   async function handleSubmit(e) {
      e.preventDefault();

      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
         return setError('Password do not match')
      }

      try {
         setError('')
         signup(emailRef.current.value, passwordRef.current.value)
      } catch (error) {
         setError('Failed to Create Account')
      }
   }
   return (
      <>
         <Container className="mt-5" style={{ maxWidth: '500px' }}>
            <Card>
               <Card.Body>
                  <h2 className="text-center">Sign Up</h2>
                  {currentUser && currentUser.email}
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                     <Form.Group id="email">
                        <Form.Label>
                           Email
                        </Form.Label>
                        <Form.Control type="email" required ref={emailRef}></Form.Control>
                     </Form.Group>
                     <Form.Group id="mobile">
                        <Form.Label>
                           Mobile Number
                        </Form.Label>
                        <Form.Control type="number" required ref={mobileRef}></Form.Control>
                     </Form.Group>
                     <Form.Group id="password">
                        <Form.Label>
                           Password
                        </Form.Label>
                        <Form.Control type="password" required ref={passwordRef}></Form.Control>
                     </Form.Group>
                     <Form.Group id="password_confirm">
                        <Form.Label>
                           Confirm Password
                        </Form.Label>
                        <Form.Control type="password" required ref={confirmPasswordRef}></Form.Control>
                     </Form.Group>
                     <p className="mt-4">
                        Already Have Account
                        <a href="#">&nbsp;Log in</a>
                     </p>
                     <Button disabled={loading} className="mt-3 text-center w-100 " type="submit">Sign Up</Button>
                  </Form>
               </Card.Body>
            </Card>
         </Container>

      </>
   )
}

export default Signup
