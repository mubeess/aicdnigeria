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

export default function Challenges() {
    return (
       <StyledChallenge>
           <h4>The main humanitarian challenges in Nigeria</h4>
           <ul>
               <li>Due to the Boko Haram insurgency, the North-East hosts the highest number of
                    persons with disabilities. Only 5% of the Nigerian adults with disability are 
                    literate, while more than 90% of children with disabilities have no access to
                     elementary education.</li>

                     <li>AICD interviewed 70 PWDs in the North-East region about the impact of the conflicts on their
                          lives and the challenges they face generally. 66 among the 70 people that were interviewed 
                          reported their challenge –STIGMATIZATION, OUT OF SCHOOL, DISCRIMINATION, NEGLECT, EXCLUSION,
                           LACK OF ACCESS TO AVAILABLE RESOURCES, and DISTURBING EXPERIENCE WHICH RESULT TO DEPRESSION.
                          
                          
                          
                          
                    </li>

           </ul>
       </StyledChallenge>
    )
}
