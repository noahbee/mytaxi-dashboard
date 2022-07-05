import React from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReusableStyles';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';
import { BiGroup } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';

export default function Analytics() {
  return <Section>
<div className='analytic'>
  <div className='content'>
    <h5>Spent this month</h5>
    <h2>$zwl 500.23</h2>
  </div>
  <div className='logo'>
    <BsFillCalendar2WeekFill />
  </div>
</div>
<div className='analytic'>
<div className='logo'>
    <IoStatsChart />
  </div>
  <div className='content'>
    <h5>Earnings</h5>
    <h2>$350</h2>
  </div>
  
</div>
<div className='analytic'>
  <div className='logo'>
    <BiGroup />
  </div>
  <div className='content'>
    <h5>New Clients</h5>
    <h2>50</h2>
  </div>
</div>
<div className='analytic'>
  <div className='content'>
    <h5>Activity</h5>
    <h2>$50,000</h2>
  </div>
  <div className='logo'>
    <FiActivity />
  </div>
</div>
  </Section>
}

const Section = styled.section`
display: grid;
grid-template-column: repeat(2, 1fr);
gap: 1rem;
.analytic {
  ${cardStyle};
  padding: 1rem;
  display: flex;
}

`;