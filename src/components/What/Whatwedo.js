import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
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
.main{
    margin-left:15px;
    margin-right:15px;
    margin-top: 10px;
}
`;
const useStyles = makeStyles({
    root: {
      marginTop:20
    },
    media: {
      height: 300,
    },
  });
export default function Whatwedo() {
const classes=useStyles()
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
            <h2>Our Work</h2>
            </div>
            <div className='main'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="what1.jpg"
          title="Enrolment into basic literacy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Verbal and non verbal assessment for the 
          Enrolment into basic literacy and numeracy to 
          promote  Inclusive education among Disabled and vulnerable
           children in Yola south Adamawa state Nigeria.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="what2.jpg"
          title="Psychosocial Support"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Psychosocial Support
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     


    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="what3.jpg"
          title="Group work and presentation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Group work and presentation  on how to accept Disabled child 
          with a great support  with equality education using the inclusive approach
           with no discrimination  so as to bring the uniqueness in them.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="what4.jpg"
          title="A CBCPCs explaining"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          A CBCPCs explaining reasons why disabled children are 
          mostly neglected or discriminated by their own biological parents
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     


    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="what5.jpg"
          title="Training on Child protection"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Six Ward Heads and Identified CBCPCs  Training on Child protection and 
          Non- Discrimination against Disabled and vulnerable children.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="what6.jpg"
          title="Child Friendly Space"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Boys @ Child Friendly Space after sports with AICD  staff
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     

                
            </div>
        </StyledAbout>
    )
}
