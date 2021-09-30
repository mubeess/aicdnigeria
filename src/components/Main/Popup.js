import React,{useRef,useState} from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components'
import { HeartFilled,CloseOutlined} from '@ant-design/icons';
const StyledPop=styled.div`
@keyframes pop{
    0%{
        opacity: 0;
        transform:translateX(-1000px);
    }
    100%{
        opacity: 1;
        transform:translateX(0px);
    }
}
position:fixed;
z-index: 100;
bottom:0;
width:100%;
height: 80px;
display:flex;
justify-content:center;
align-items:center;
background-color:black;
box-shadow:0px 0px 10px rgba(0,0,0,0.8),
0px 0px 20px rgba(0,0,0,0.8),0px 0px 30px rgba(0,0,0,0.8)

;
flex-direction:row;
transform:translateX(-1000px);
opacity: 0;
transition:all 2s;
animation: pop 3s 3s 1 forwards;
h4{
    color:white;
    text-align:center;
}
.cancel{
    color:white;
    font-size:20px;
    margin-left:20px;
    margin-right:20px;
    cursor: pointer;
}
`;
export default function Popup(props) {
    const [visible,setVisible]=useState(true);
    const Popping=()=>{
        return(
            <StyledPop>
            <h4>Kindly Donate to put smile on the faces of vulnerables and disabled children nationwide</h4>
            <Button
            onClick={()=>{
                props.open()
            }}
            style={{width:'190px'}}
             variant='contained'
             color='secondary'
             endIcon={<HeartFilled></HeartFilled>}
           >
             Donate
           </Button>
         <span onClick={()=>{
             setVisible(false)
             ;
         }} className='cancel'>X</span>
            </StyledPop>
        )
    }
    return (
        visible?(<Popping></Popping>):null
       
    )
}
