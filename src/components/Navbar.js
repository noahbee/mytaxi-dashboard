import React from 'react';
import styled from 'styled-components';
import {BiSearch} from 'react-icons/bi';

export default function Navbar() {
  return <Nav>
<div className='tittle'>
  <h4>Hi Noah Banda</h4>
  <h1>Welcome to<span>Noa-Taxi Dashboard</span></h1>
</div>
<div className='search'>
<BiSearch />
  <input type='text' placeholder = 'Search' />
</div>

  </Nav>
}

const Nav = styled.nav `
display: flex;
justify-content: space-between;
color: white;
.tittle {
  h1 {
    span {
      margin-left: 0.5rem;
      color: #ffc107;
      letter-spacing: 0.2rem;
      ${'' /* font-family: 'Permanent Marker', cursive;  */}
    }
  }
}
.search {
  background-color: #212121;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 8rem 1rem 1rem;
  border-radius: 1rem;
  svg {
     color: #ffc107;
  }
  input {
    background-color: transparent;
    border: none;
    color: #ffc107;
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 0.3rem;
    $::placeholder {
      color: #ffc107
    }
    &:focus {
      outline: none;
    }
  }
}
`;