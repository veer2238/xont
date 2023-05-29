import React from 'react'
import CountUp from 'react-countup';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import './App.css'

const App = () => {
  return (
    <div className='main'>




    <div className='icon1'>
    <AiOutlineFundProjectionScreen size={25}/>
        <CountUp
  start={0}
  end={100}
  duration={4}
  separator=" "
  decimals={0}
  decimal=""

  suffix=" Student"
 
/>
</div>

<div className='line'/>

<div className='icon1'>
    <AiOutlineFundProjectionScreen size={25}/>

<CountUp
  start={0}
  end={100}
  duration={4}
  separator=" "
  decimals={0}
  decimal=""

  suffix=" Job Placment"
 
/>
</div>


<div className='line'/>
<div className='icon1'>
    <AiOutlineFundProjectionScreen size={25}/>

<CountUp
  start={0}
  end={100}
  duration={4}
  separator=" "
  decimals={0}
  decimal=""

  suffix=" Client"
 
/>

</div>

<div className='line'/>

<div className='icon1'>
    <AiOutlineFundProjectionScreen size={25}/>

<CountUp
  start={0}
  end={100}
  duration={4}
  separator=" "
  decimals={0}
  decimal=""

  suffix=" Project"
 
/>

</div>


    </div>
  )
}

export default App