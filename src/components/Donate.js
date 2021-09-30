import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import { usePaystackPayment } from 'react-paystack';
import {MenuFoldOutlined,HeartFilled,AlertFilled, CloseCircleFilled} from '@ant-design/icons'
import Modal from '@material-ui/core/Modal';
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
export default function Donate(props) {
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
    setOpen(false);
  };
    return (
        <Modal
        open={props.open}
        onClose={()=>{
          return null
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         <StyledMod>
          <CloseCircleFilled onClick={()=>{
             setPaid(false)
             setName('')
             setAmount('')
             setEmail('')
             setPhone('')
             props.handleClose()
          }} style={{marginLeft:'80%',marginTop:'20px'}}></CloseCircleFilled>
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
          Recieved the amount of {amount/100}, from {name} 
          </Typography> 
          <Button onClick={()=>{
               setName('')
               setAmount('')
               setEmail('')
               setPhone('')
               setPaid(false)
               props.handleClose()
          }} variant='contained' color='primary' style={{marginLeft:'25%'}}>{'<<'}Back To Home</Button>
              </div>
          )
      }
      </StyledMod>
      </Modal>
    )
}
