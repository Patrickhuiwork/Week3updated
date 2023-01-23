import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/about'

const about = () => {
  return (
    <div>
        <Hero heading='About' message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut nibh sit amet elit condimentum consectetur malesuada eu tellus. Mauris in laoreet mauris, id sollicitudin turpis. ' />
        <Portfolio />
    </div>
  )
}

export default about
