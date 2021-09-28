import { AlertFilled,AimOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import Chi from '../../assets/chi2.png'
const StyledVoice=styled.div`
min-height: 80vh;
background-color:#f9f9f9;
width:100%;
position: relative;
img{
    width:100%;
    height:65vh;
    
}
.car{
    position:absolute;
    bottom:0;
    left: 0;
    right: 0;
    
}
`;
const StyledCar=styled.div`
width:100%;
background-color:rgba(0,0,0,0.5);
height: 250px;
padding:20px;
color:white;

`;
export default function Voice() {
    return (
       <StyledVoice>
         <Typography align='center' variant="h4" gutterBottom>
        <AimOutlined></AimOutlined>
        AICD AND VOICE OF THE CHILDREN:
      </Typography>
      <img src={Chi} alt='child'></img>
       <div className='car'>

      <Carousel dotPosition='bottom' autoplay>
        <StyledCar>
        <Typography variant="body1" gutterBottom>
        VOICE 001-Despite my challenge, I can be better if I am enrolled in school so as to stop begging on the street. -----AICD HAVE INTRODUCED EDUCATION FOR DISABLED AND VULNERABLES.
      </Typography>
        </StyledCar>
        <StyledCar>
        <Typography variant="body1" gutterBottom>
        VOICE 002- Despite my challenge, do not discriminate me among my friends and family, but support me and encourage me – PSYCHOSOCIAL SUPPORT
      </Typography>
        </StyledCar>
       
        <StyledCar>
        <Typography variant="body1" gutterBottom>
        VOICE 003- My Challenge makes people to use me wrongly, 
Laughed at me and isolate me ---COMMUNITY SENSITIZATION AND AWARENESS.
      </Typography>
        </StyledCar>

        <StyledCar>
        <Typography variant="body1" gutterBottom>
        VOICE 004- The unpleasant experienced of crisis I witnessed make me to be scared each time I want to go out.-  MHPSS/COUNSELLING THERAPHY
      </Typography>
        </StyledCar>

        <StyledCar>
        <Typography variant="body1" gutterBottom>
        VOICE 005- I don't like when I am begging food on the street, I felt ashamed of doing that, I want to stopped begging but that is the only means of my daily survival –LIVELIHOOD SUPPORT.
      </Typography>
        </StyledCar>
      </Carousel>
       </div>
       </StyledVoice>
    )
}
