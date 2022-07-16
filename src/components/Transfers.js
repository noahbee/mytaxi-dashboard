import React from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpg";
import { cardStyle } from './ReusableStyles';

export default function Transfers() {
const transactions = [
  {
    image: avatarImage,
    name: "from Ruphacode Noah",
    time: "today, 02:50",
    amount: "+$100",
  },
  {
    image: avatarImage,
    name: "To Marieta Makonese",
    time: "today, 09:50",
    amount: "-$30",
  },
  {
    image: avatarImage,
    name: "From Craig Chibage ",
    time: "yesterday, 08:70",
    amount: "+$250",
  },
];

  return (
    <Section>
      <div className='title'>
        <h2>Your Transfers</h2>
      </div>
      <div className='transactions'>
        {
          transactions.map((transaction)=>{
            return (
              <div className='transaction'>
              <div className='transaction_tittle'>
              <div className='transaction_tittle_image'>
              <img src= {transaction.image} alt = 'transaction image' />
              </div>
              <div className='transaction_tittle_details'>
              <h3>{ transaction.name }</h3>
              <h5>{ transaction.time }</h5>


              </div>
              </div>
              <div className='transaction_amount'>
              <span>{transaction.amount}</span>
              </div>
              </div>
            );
          })
        }
      </div>
      <a href='#' className='view'>
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}
const Section = styled.section `
${cardStyle};
display: flex;
flex-direction: column;
gap: 1rem;
.title {
  h2 {
    color: #ffc107;
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 0.3rem;
  }
}
.transactions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  .transaction{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_tittle {
      display: flex;
      gap: 1rem;
      &_image {
        img {
          height: 2.5rem;
          border-radius: 3rem;
        }
      }
    }
    &_amount {
      background-color: #d7e41e1d;
      padding: 0.2rem 0.5rem;
      width: 4rem;
      border-radius: 1rem;
      text-align: center;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #ffc107;
        span {
          color: black;
        }
      }
      span {
        color : #ffc107;
      }
    }
  }
}
.view {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: #ffc107;
  font-weight: bold;
  margin-top: 1rem;
  gap: 0.5rem;
  svg {
    transition: 0.3s ease-in-out;
    font-size: 1.4rem;
  }
&:hover {
  svg {
    transform: translateX(0.5rem);
  }
}
}
`;