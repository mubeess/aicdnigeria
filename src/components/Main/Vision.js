import React from 'react'
import styled from 'styled-components';
import Logo from '../../assets/logo.png'
const StyledVision=styled.div`
position:relative;
min-height: 50vh;
width:100%;
background-color:white;
display:flex;
justify-content:center;
flex-direction:column;
h1{
    text-align:center;
    background-color:royalblue;
    margin-top:10px;
    transform:skewX(-20deg);
    color:white;
    margin-left:20px;
    margin-right:20px;
    z-index: 1;
}
img{
    width:150px;
    height:150px;
    position:absolute;
    margin-top:auto;
    align-self:center;
    filter:blur(5px);
    opacity: 0.6;
    z-index: 0;
    
}
p{
    margin-right:20px;
    margin-left:20px;
    text-align:justify;
    font-size:16px;
    z-index: 1;
}
`;

export default function Vision() {
    return (
       <StyledVision>
           <img src={Logo}></img>
           <h1>AICD VISSION STATEMENT </h1>
           <p>
           To build a society where disabled and vulnerable children (DVC) 
           are given equal rights to quality education by recognizing individuals
            needs and abilities to participate in all form of activities so as to help 
            children to develop and reach to their full
            potential and not to feel neglected or being stigmatized
           </p>
       </StyledVision>
    )
}
