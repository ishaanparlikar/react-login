import React from 'react'
import { Card } from 'react-bootstrap'
const MaterialCard = ({ title, timer, pdf }) => {
   return (
      <>
         <Card className="my-4 mx-auto" style={{ maxWidth: "1024px" }}>
            <Card.Header className="d-flex align-items-center justify-content-between">
               <h2>{title}</h2>
               <h4>{timer}</h4>

            </Card.Header>
            <Card.Body>
               <Card.Title>{pdf}</Card.Title>
            </Card.Body>
         </Card>
      </>
   )
}

export default MaterialCard
