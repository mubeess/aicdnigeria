import React from 'react'
import styled from 'styled-components'
const StyledHap=styled.div`
   width:100%;
   background-color:transparent;
   position:relative;
   box-shadow:0px 0px 2px rgba(0,0,0,0.5);
   margin:auto;
   h1{
       font-size:150px;
       opacity: 0.2;
   }
   p{
       position:absolute;
       bottom:0;
       right: 0;
       font-weight:bold;
       color:rgba(0,0,0,0.7);

   }
`;
export default function Happening(props) {
    return (
       <StyledHap>
      <h1>0{props.num}</h1>
      <p>
      {props.content}
      </p>
       </StyledHap>
    )
}
