import { Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Donate from '../Donate';
import Nav from '../Header/Nav';

const StyledAbout=styled.div`
min-height: 100vh;
min-width: 100%;
margin-top: 85px;
.jumbo{
    width: 100%;
    min-height: 30vh;
    background:linear-gradient(to right,#f3f3f3,#f9f9f9);
    
    h2{
        color: black;
        font-size: 70px;
        font-weight: lighter;
        text-align: center;
        margin-top:20px;
    }
    h2:first-Letter{
        border-bottom: 1px solid blue;
    }
}

`;
export default function Careers() {
const [open,setOpen]=useState(false)
  const handleOpen = () => {
    setOpen(true);
  };
useEffect(() => {
    window.scrollTo(0,0)
}, [])
  const handleClose = () => {
    setOpen(false);
  };
    return (
        <StyledAbout>
            <Nav handleOpen={handleOpen}></Nav>
            <Donate open={open} handleClose={handleClose}></Donate>
            <div className='jumbo'>
            <h2>Careers</h2>
            </div>
            <div className='main'>
                <Typography align='center' variant='h4'>
                No Available Position Yet !!!
                </Typography>
                <Typography align='center' variant='h4'>
                🚫🚫🚫🚫🚫🚫🚫🚫
                </Typography>
            </div>
        </StyledAbout>
    )
}
