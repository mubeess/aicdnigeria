import React from 'react'
import styled from 'styled-components'

const StyledChallenge=styled.div`
margin:20px;
border-left:3px solid gray;
margin-top:30px;
h4{
        font-weight:bolder;
        font-size:30px;
        margin-left:20px;
        padding:10px;
        margin-top:50px;

    }


`;

export default function Solution() {
    return (
       <StyledChallenge>
           <h4>HOW IS AICD HELPING IN NIGERIA?</h4>
           <ul>
               <li>AFRICA INITIATIVE FOR CHILDREN WITH DISABILITIES is working to Identify, manage and respond to all forms of discrimination against disabled and vulnerable children by enhancing justice rights to education and learning using inclusive approach, promote child’s participation and reduce the rate of stigmatization through the creation of temporary learning centers (TLCs) introducing Mental Health and
                    psychosocial support on Child Friendly Spaces (CFS) with case management services.</li>

                     <li>
                     AICD Uses equipment that gives easy access to learning through mainstreaming to coping abilities, so as to increase children’s participation in education and give them confidence to stand and voice out among 
                     fellows and Society without being ashamed. 
                    </li>
                    <li>
                    AICD gives livelihood support for those children’s caregivers in Adamawa state Nigeria, through vocational training programmes with a startup capital after the training, ensuring those caregivers has established a small scale business so as to earn 
                    and feed the vulnerable concerns under their care.
                    </li>

           </ul>
       </StyledChallenge>
    )
}
