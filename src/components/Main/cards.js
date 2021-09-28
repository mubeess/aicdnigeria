import React from 'react'
// import { Fade} from "react-awesome-reveal";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
const StyledCard=styled.div`
display:grid;
width:80%;
margin-left:auto;
margin-right:auto;
grid-template-columns:1fr;
margin-top: 30px;
margin-bottom: 30px;

`;
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop:20
    },
    media: {
      height: 300,
    },
  });
export default function Cards() {
    const classes = useStyles();
    return (
    //  <Fade fraction='0.5' triggerOnce>
      <StyledCard>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="edu.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          PROMOTE ACCESS TO QUALITY EDUCATION
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>     


    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="dis.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          IMPROVE PSYCHOLOGICAL WELLBEING AND SELF CONFIDENCE
          </Typography>
          </CardContent>
      </CardActionArea>
    </Card>     


  
      
        </StyledCard>
    // </Fade>
    )
}
