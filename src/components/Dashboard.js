import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
import { Material } from '../Material'
import MaterialCard from './MaterialCard'
import moment from 'moment'
const Dashboard = () => {
   // console.log(Material)
   const [currentTime, setCurrentTime] = useState({
      hours: 0,
      minutes: 0
   })

   useEffect(() => {
      setInterval(() => {
         setNewTime(2)
      }, 1000);
   }, [])

   function setNewTime(time) {
      // if(setCurrentTime.hours===0){
      //    alert('Timer over');
      // }
      // else{

      // }
      let newTime = 0
      time = moment.duration(moment(time, 'hours')).asMilliseconds()
      time = moment.duration(moment(time).subtract(1000, 'milliseconds')).asHours();

      console.log(moment(time, 'hours').format('hh:mm'));
   }

   return (
      <>
         <Navbar />


         <Container>

            {Material.map((card, index) => (
               <MaterialCard key={index} title={card.name} timer={moment(card.time, 'hours').format('hh:mm')} pdf={card.link} />
            ))}
         </Container>

      </>
   )
}

export default Dashboard
