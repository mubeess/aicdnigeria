import React,{useState} from 'react'
import styled from 'styled-components'
import {MenuFoldOutlined,HeartFilled, CloseOutlined, HomeOutlined, HomeFilled} from '@ant-design/icons'
import { Button,Drawer } from '@material-ui/core';
import Logo from '../../assets/logo.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Assignment, CalendarToday, History, Image } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

const StyledList=styled.div`
min-width:300px;
background-color:white;


`;

const StyledNav=styled.div`
width:100%;
height:85px;
position:fixed;
background-color:white;
box-shadow:0px 0px 10px rgba(0,0,0,0.5);
/* display:flex;
flex-direction:row; */
display: grid;
grid-template-columns: 1fr 1fr;
z-index:100;
top:0;
.logo{
    padding:5px;
    display:flex;
    flex-direction:row;
    margin-top: 10px;
    span{
        margin-top:10px;
        font-size:14px;
        font-weight:bolder;
        color:black;
    }
    img{
        width:60px;
        height:60px;
    }
}
.aside{
    margin-right:auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:5px;
    margin-left:auto;
    margin-top: 10px;
    
    
    svg{
        width:30px;
        height:30px;
        color:black;
    }
    .menu svg{
       margin-left:13px;
       cursor: pointer;
       color:black;
    }
    
}
`;


 function Nav(props) {
    const [open,setOpen]=useState(false)
    return (
    <>
      <StyledNav>
          <div className='logo'>
          <img src={Logo} alt="Logo" />
          <span>aicdnigeria.org</span>
          </div>
          <div className='aside'>
        <Button
        size='small'
        onClick={()=>{
            props.handleOpen()
        }}
        style={{
            width:'100px',
            height:'40px'
        }}
        variant='outlined'
        endIcon={<HeartFilled></HeartFilled>}
      >
        Donate
      </Button>
      <div className='menu'>
          <MenuFoldOutlined onClick={()=>{
              setOpen(true)
          }}/>
      </div>
          </div>
    
      </StyledNav>
      <Drawer anchor='right' open={open} onClose={()=>{
          setOpen(false)
      }}>
         <StyledList>
          <CloseOutlined onClick={()=>{
              setOpen(false)
          }} style={{color:'black',marginLeft:'90%'}}></CloseOutlined>
          <Divider></Divider>
          <List component="nav" aria-label="main mailbox folders">
        <ListItem onClick={()=>{
            props.history.push('/')
            setOpen(false)

        }} button>
          <ListItemIcon>
              <HomeFilled></HomeFilled>
         </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem onClick={()=>{
            props.history.push('about')
            setOpen(false)

        }} button>
          <ListItemIcon>
            <History></History>
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CalendarToday></CalendarToday>
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>


        <ListItem button>
          <ListItemIcon>
            <Image></Image>
          </ListItemIcon>
          <ListItemText primary="Gallery" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Assignment></Assignment>
          </ListItemIcon>
          <ListItemText primary="Careers" />
        </ListItem>
      </List>

      
         </StyledList>
      </Drawer>
      </>
    )
}
export default withRouter(Nav)