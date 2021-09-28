import { Button, Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

const StyledCovid=styled.div`
min-height:80vh;
width:80%;
margin-left:auto;
margin-right:auto;
background:url('covid.jpg');
position:relative;
background-position:fixed;
background-size:cover;
background-repeat:no-repeat;   
border-radius:10px;
box-shadow:0px 0px 10px rgba(0,0,0,0.5);
padding:20px;
`;

export default function Covid() {
    return (
        <StyledCovid>
            <Typography variant="h6" component='h4' style={{
                color:'white',
                borderBottom:'5px solid lightblue',
                marginLeft:'auto',
                marginRight:'auto',
                textAlign:'left',
               
                }}>
              Africa Initiative For Children With Disabilities(AICD) Response to Covid19 Pandemic
            </Typography>
        
            <Typography variant="p" component='p' style={{
                color:'white',
                marginLeft:'auto',
                marginRight:'auto',
                textAlign:'left',
                marginTop:'20px'
                }}>
           COVID -19 Pandemic is a public health, social and economic crisis that is global in scale. With restriction on travel and movement yet AICD do not have to stop work but to follow UN guides and also come out with their strategy, methods and ways of carrying out an activity through 
           enlightening people on causes and prevention of the outbreak diseases.

         
            </Typography>
            <Typography variant="p" component='p' style={{
                color:'white',
                marginLeft:'auto',
                marginRight:'auto',
                textAlign:'left',
                marginTop:'20px'
                }}>
                 AICD were able to distribute face mask, hand sanitizer, soap and water tape in community of intervention in Damdu,Hore ladde, wuro chekke,Abachuwa,Wuro-Hausa C. 
           Yola South Adamawa state.
                </Typography>

        
        </StyledCovid>
    )
}
