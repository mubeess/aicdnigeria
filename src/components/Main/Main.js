import React from 'react'
import { Fade } from "react-awesome-reveal";
import Nav from '../Header/Nav'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Happening from './Happening'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Child from '../../assets/child.jpg'
import {MenuFoldOutlined,HeartFilled,AlertFilled, CloseOutlined, CloseCircleFilled} from '@ant-design/icons'
import Modal from '@material-ui/core/Modal';
import Voice from './Voice';
import Carousell from './Carousel';
import Challenges from './Challenges';
import Vision from './Vision';
import Popup from './Popup';
import Footer from './Footer'
import Cards from './cards'
import Solution from './Solutions'
import Covid from './covid'
import { usePaystackPayment } from 'react-paystack';
const StyledMod=styled.div`
width: 85%;
height: 80vh;
justify-content: center;
align-items: center;
background-color: white;
margin-left: auto;
margin-right: auto;
margin-top: 25%;
margin-bottom: auto;
border-radius: 10px;
overflow-y: scroll;


`;
const StyledCover=styled.div`
@keyframes appear{
    0%{
        transform:translateX(-500px)
    }
    50%{
        transform:translateX(0px)
    }
    100%{
        transform:translateX(0px)
    }
}
min-width:100%;
min-height:70vh;
background-color:black;
margin-top:90px;
position: relative;
z-index:-2;
.under{
    position:absolute;
    z-index:20;
    background:linear-gradient(transparent,transparent,transparent,black);
    top:0;
    right:0;
    bottom:0;
    left:0;
    h1{
       position: absolute;
       right: 0;
       bottom:0;
       left: 0;
       font-size:30px;
       border-left:10px solid #188FB7;
       color:white;
       transform:translateX(-500px);
       animation: appear 2s linear;
       animation-fill-mode: forwards; 
       
    }
   
   
}

img{
    width:100%;
    height:70vh;
  
}


@media screen and (min-width:768px){
img{
    height: 150vh;
}
.under{
    background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.8),rgba(0,0,0,0.9));
}
}




`;
const StyledWrite=styled.div`
min-height: 50vh;
width:100%;
background-color:black;
h1{
    color:#188FB7;
    margin-left:20px;
    margin-right:20px;
    text-align:left;
    font-size:20px;
    white-space:normal;
}
p{
    color:white;
    margin-left:20px;
    margin-right:20px;
    text-align:justify;
    font-size:18px;
}
@media screen and (min-width:768px){
min-height: 30vh;
h1{
    text-align: center;
    font-size: 30px;
}
p{
    font-size: 22px;
}
}

`;
const StyledMain=styled.div`
position: relative;
.nigeria{
    margin-top:50x;
    width:100%;
    min-height:60vh;
    h4{
        font-weight:bolder;
        font-size:30px;
        border-left:10px solid #188FB7;
        margin-left:20px;
        padding:10px;
        margin-top:50px;

    }
    p{
        text-align:justify;
        margin-right:20px;
        margin-left:20px;
        font-size:16px;
        font-weight:lighter;
        color:rgba(0,0,0,0.6);

    }
}
.challenges{
    min-height:80vh;
    width:100%;
    background-color:#d8d8d8;
}
@media screen and (min-width:768px){
.format{
    display:grid;
    grid-template-columns:1fr 1fr;
}
}
`;
const StyledHappening=styled.div`
height: auto;
width:100%;
background-color:white;
padding:20px;
margin-bottom:20px;

`;
const happeningContent=[
{
content: `Even after a decade of conflict, many children lost some part of their body as a result of crisis in North East Nigeria. These have been a challenge the child is still facing as a result of the crisis.`
},
 {
    content:'Most of out of school children are mostly the physically challenged/Disabled children. The loss of some part of their body made them more vulnerable in the society and people use them wrongly.'
},
{
    content:`Disabled and vulnerable children are been discriminated from normal children which made them feel neglected and stigmatized.`
},
{
    content:`Children have traumatic stress and mental disorder as a result of disturbing experience on how they are limited to have easy access to resources because of the challenge of leg is cut off, hand is cut off, eye can’t see, ear can’t hear and other challenge.`
}
]


export default function Main() {
    const [open, setOpen] = React.useState(false);
    const [email,setEmail]=React.useState('');
    const [name,setName]=React.useState('');
    const [phone,setPhone]=React.useState('');
    const [amount,setAmount]=React.useState('');
    const [paid,setPaid]=React.useState(false)

    const config = {
        reference: (new Date()).getTime(),
        email: email,
        amount: amount,
        publicKey: 'pk_test_57dcb064ef1e6520d4f2d3f0e5066906a05e0868',
    };

    const initializePayment = usePaystackPayment(config);

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
       setPaid(true)
      };
    
      // you can call this function anything
      const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert('Payment not recieved')
      }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setName('')
    setAmount('')
    setEmail('')
    setPhone('')
    setPaid(false)
    setOpen(false);
  };
    return (
        <StyledMain>
            <Nav handleOpen={handleOpen}></Nav>
             <Fade triggerOnce>
            
            <StyledCover>
            <div className='under'>
                <h1></h1>  
            </div>
            <img src={Child} alt='child'></img> 
            </StyledCover>
           <StyledWrite>
            <h1>Our beleive @ Africa Initiative for Children With Disabilities(AICD).Disability is in the mind not on the body</h1>
            <p>
            Disabled and Vulnerable children should also be inclusive in all activities both 
            academics and participation to have easy access to resources just like the normal 
            children for a sustainable development.
            </p>
           </StyledWrite>
           <StyledHappening>
        <Typography align='center' variant="h4" gutterBottom>
        <AlertFilled></AlertFilled>
        What's happening
      </Typography>
      <div className='format'>
      {
          happeningContent.map((cont,ind)=>(
              <Happening content={cont.content} num={ind+1} key={ind}></Happening>
              
          ))
      }
      </div>
       <Button
       onClick={handleOpen}
        variant='contained'
        endIcon={<HeartFilled></HeartFilled>}
        color='primary'
      >
        Donate Now!
      </Button>
           </StyledHappening>
        <Voice></Voice>
        <Vision></Vision>
       
        <div className='nigeria'>
           <h4>The AICD CORE VALUES ARE:</h4> 
           <p>
            <ul>
                <li>EMPATHY- Ability to sense other people's emotions and share the feelings of another</li>
                <li>EQUITY – The quality of being fair and impartial.</li>
                <li>EQUALITY –The right of different groups of people to receive the same treatment and equal opportunity of having access to resources.</li>
                <li>CONFIDENTIALITY –The act of not to share personal details about someone with others, unless that person has said you can or is absolutely necessary.</li>
                <li>PROFESSIONALISM: The competence or skill in outlook and approaches at a personal and organization level. </li>
            </ul>
           </p>
        </div>

        <div className='nigeria'>
           <h4>Nigeria crisis briefing</h4> 
           <p>
           Northern Nigeria has been plagued by persistent conflicts in recent years 
           which have claimed over_____________lives Apart from the general impact of conflict, 
           it has also contributed to an alarming increase in the number of persons with Disabilities
            (PWDs) and made all PWDs more vulnerable.Disability resulting from conflict related
             injuries is becoming more prevalent than those due to other causes, such as diseases, 
             accidents etc. The conflict has had a negative impact on PWDs living conditions has 
             compromised their ability to pursue economics activities and earn a livelihood as well 
             as to enjoy a social and cultural life. This negative impact has been especially felt
              by CHILDREN AND WOMEN who are more prone to all kind of vulnerabilities. World Disability
               Report 2011 stated that about 25Million Nigerians have at least one disability, while
                3.6million of that figure have very significance difficulties in going about their 
                business of the 84million estimated PWDs in Africa,29% are located in Nigeria. More
                 than 50% of the 25million disabled Nigerians are females. Women and Girls with 
                 disabilities are at three time’s greater risk of suffering physical, sexual and 
                 economic abuse than women without disabilities.
           </p>
        </div>
        <div className='challenges'>
         <Challenges></Challenges>
         <Solution></Solution>
        </div>
        


        <div className='nigeria'>
           <h4>AICD STRATEGIC OBJECTIVES ARE:</h4> 
           <p>
            <ul>
                <li>
                Strategic Objective 1 -Promote access to quality education for disabled and 
                vulnerable children through mainstreaming to coping abilities that will give 
                them easy access to learning and have their voices heard among peers or society.
                </li>
                <li>
                Strategic Objective 2- Improve psychological well being of
                 children through Psychosocial Activities that will 
                reduce the rate of Stigmatization and build confidence.
                </li>
                <li>
                Strategic Objective 3- Promote self-confidence and participation of disabled and vulnerable 
                children to stop being ashamed of standing among fellows or society.
                </li>
                <li>
                Strategic Objective 4- Provide means of income to Disabled Children’s caregivers (DC) with vocational training that will help them 
                feed the concern under their care, and stop begging on the street.
                </li>
                <li>
                Strategic Objective 5- Provide Mental Health and Psychosocial Support (MHPSS) with case management services to Unaccompanied and Separated 
                Children (UASC) those are physically challenged and Disabled.
                </li>

                <li>
                Strategic Objective 6- Protect disabled and vulnerable Children from further 
                harm and eliminate all forms of discrimination against them.
               </li>
            </ul>
           </p>
        </div>
        <Cards></Cards>
        <Covid></Covid>
        <Footer></Footer>
        </Fade>
        <Popup open={handleOpen}></Popup>
        <Modal
        open={open}
        onClose={()=>{
            return null
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <StyledMod>
          <CloseCircleFilled onClick={handleClose} style={{marginLeft:'80%',marginTop:'20px'}}></CloseCircleFilled>
          {
              !paid&&(
                  <>
                   <Typography style={{marginTop:'10px'}} align='center' gutterBottom variant="h6" component="h2">
          Kindly Donate<HeartFilled></HeartFilled>
          </Typography>
          <TextField size='small' required onChange={(e)=>{
              setName(e.target.value)
          }} style={{width:'80%',marginLeft:'20px'}} id="outlined-basic" label="First & Last Name" variant="outlined" />

          <TextField required size='small' onChange={(e)=>{
              const converted=e.target.value*100;
              setAmount(converted)
          }} style={{width:'80%',marginLeft:'20px',marginTop:'20px'}} id="outlined-basic" label="Amount in Naira" variant="outlined" />

<TextField size='small' required onChange={(e)=>{
              setEmail(e.target.value)
          }} style={{width:'80%',marginLeft:'20px',marginTop:'20px'}} id="outlined-basic" label="Email" variant="outlined" />

          <TextField required size='small' onChange={(e)=>{
               setPhone(e.target.value)
          }} style={{width:'80%',marginLeft:'20px',marginTop:'20px'}} id="outlined-basic" label="Phone Number" variant="outlined" />
          <Button
          size='small'
          onClick={()=>{
            initializePayment(onSuccess, onClose)
          }}
          style={{
              width:'50%',
              marginTop:'20px',
              marginLeft:'20%',
              marginRight:'auto'
          }}
        variant='contained'
        endIcon={<HeartFilled></HeartFilled>}
        color='primary'
      >
        Proceed To Donation!!!
      </Button>
                  
                  </>
              )
          }
     
      {
          paid&&(
              <div>
         <Typography style={{marginTop:'10px'}} align='center' gutterBottom variant="h6" component="h2">
          Payment Acknowledged<HeartFilled></HeartFilled>
          </Typography> 
          <Typography style={{marginTop:'20px',fontWeight:'lighter'}} align='center' gutterBottom variant="h3" component="h2">
          Recieved the amount of N{amount/100}, from {name} 
          </Typography> 
          <Button onClick={()=>{
               setName('')
               setAmount('')
               setEmail('')
               setPhone('')
               setPaid(false)
               setOpen(false);
          }} variant='contained' color='primary' style={{marginLeft:'25%'}}>{'<<'}Back To Home</Button>
              </div>
          )
      }
      </StyledMod>
      </Modal>
        </StyledMain>
    )
}
