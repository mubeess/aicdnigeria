import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'
import { usePaystackPayment } from 'react-paystack';
import {MenuFoldOutlined,HeartFilled,AlertFilled} from '@ant-design/icons'
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

    const config = {
        reference: (new Date()).getTime(),
        email: email,
        amount: amount,
        publicKey: 'pk_test_57dcb064ef1e6520d4f2d3f0e5066906a05e0868',
    };

    const initializePayment = usePaystackPayment(config);

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
       alert('payment succesful')
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
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <StyledMod>
      <Typography align='center' gutterBottom variant="h6" component="h2">
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
      </StyledMod>
      </Modal>
    )
}
