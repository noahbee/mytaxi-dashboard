import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillCalendar } from 'react-icons/ai';
import {MdTimelapse} from 'react-icons/md';
import { IoMdCash } from 'react-icons/io';
import { cardStyle } from './ReusableStyles';

export default function FAQ() {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: 'How to manage time',
    },
    {
      icon: <MdTimelapse />,
      text: 'Regulate transactions over time',
    },
    {
      icon: <IoMdCash />,
      text: 'Withdraw money',
    },

  ];
  return (
   <Section>
    <div className='title'>
      <h2>Infor for drivers</h2>
    </div>
    <div className='faqs'>
      {
        faqs.map((faq)=> {
          return (
            <div className='faq'>
              <div className='info'>
              {faq.icon}
              <h4>{faq.text}</h4>
            </div>
            <IoIosArrowForward />
            </div>
          )
        })
      }
    </div>
   </Section>
  )
}

const Section = styled.section`
${cardStyle}
.title {
  h2{
    color: #ffc107;
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 0.3rem;
  }
}
.faqs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

`;
