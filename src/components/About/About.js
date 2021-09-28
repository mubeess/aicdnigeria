import { Typography } from '@material-ui/core';
import React,{useState} from 'react'
import styled from 'styled-components'
import Donate from '../Donate';
import Nav from '../Header/Nav';

const StyledAbout=styled.div`
min-height: 100vh;
min-width: 100%;
.jumbo{
    width: 100%;
    min-height: 50vh;
    background:linear-gradient(to right,#f3f3f3,#f9f9f9);
    margin-top:85px;
    h2{
        color: black;
        font-size: 70px;
        font-weight: lighter;
        text-align: center;
    }
    h2:first-Letter{
        border-bottom: 1px solid blue;
    }
}

`;
export default function About() {
const [open,setOpen]=useState(false)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <StyledAbout>
            <Nav handleOpen={handleOpen}></Nav>
            <Donate open={open} handleClose={handleClose}></Donate>
            <div className='jumbo'>
            <h2>ABOUT US</h2>
            </div>
            <div className='main'>
                <Typography align='center' variant='body1'>
                The AFRICA INITIATIVE FOR CHILDREN WITH DISABILITIES is a civil association regulated by private law, without economic interest or political affiliation, without discrimination in terms of race, sex, social condition, religious beliefs, with autonomy regarding its administration, finances and assets, which will be governed through the provisions of its Statute and the applicable legislation of the association.
                </Typography>
            </div>
        </StyledAbout>
    )
}
