import React from 'react'
import styled from 'styled-components'
// import { Twitter,Facebook,Instagram } from '@material-ui/icons';
const StyledFooter=styled.div`
width:100%;
min-height:300px;
background-color:#161e35;
margin-top: 20px;
display:grid;
grid-template-columns:1fr;
div{
    color:white;
}
.det{
    h2{
        color: white;
        text-align: center;
    }
    a{
        color: white;
    }
}
.social{
    width: 100%;
    /* grid-column: 1/5; */
    height: 100px;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    svg{
        margin: 30px;
        cursor: pointer;
    }
}
@media screen and (min-width:800px){
display: grid;
grid-template-columns: 1fr 1fr;
}
`;

export default function Footer() {
    return (
        <StyledFooter>
            <div className='det'>
                <u><h2>
                FOR THE SUSTAINABILITY OF THESE PROGRAMME, YOU CAN DONATE DIRECTLY – 
                    </h2></u>
                <p>
                <ul>
                    <li>Account no : 1017676192 </li>
                    <li>Name of Bank:  Zenith Bank</li>
                    <li>Account name:  Africa Initiative for child with Disabilities</li>
                    <li>Type of account- Nigerian local Currency (Naira operating)</li>
                </ul>
                </p>

                <p>
                <ul>
                    <li>Account no : 5071552511 </li>
                    <li>Name of Bank:  Zenith Bank</li>
                    <li>Account name:  Arica Initiative for Child with Disabilities</li>
                    <li>Type of account: Domiciliary account (USD) </li>
                </ul>
                </p>
            </div>
            <div className='det'>
            <u><h2>CONTACT US</h2></u>
           <ul>
               <li>
               <a href='top'>email aicdnigeria@gmail.com  </a>
               </li>
               <li>
               <a href='top'>phone:+2349068946796 </a>
               </li>
               <li>
               <a href='top'>phone:+2349036067876 </a>
               </li>
           </ul>
            </div>
           
           {/* <div className='social'>
            
           </div> */}
        </StyledFooter>
    )
}
