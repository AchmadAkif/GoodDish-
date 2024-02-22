import React from 'react'
import { useOutletContext } from 'react-router-dom'

function About() {
  const [revenue] = useOutletContext()
  console.log('rev is' +  revenue)
  return (
    <div>About</div>
  )
}

export default About