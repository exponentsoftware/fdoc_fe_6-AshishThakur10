
import React from 'react'
import styled from 'styled-components'

export default function Header(props) {
  return (
    <div className="App1">

      <div className="App">

        <Text>
          
          <img src="/images/ak.jpg" alt="are" />
          <P>Rockstar</P>
          <U>A.R.Rahman  </U>
          <br />
          

        </Text>
        <h1>Albums</h1>
      
         </div>
         <Text2>
                <div className="job-tile">
                    
                    <img src="/images/ak.jpg" alt="are"/><P>Rockstar</P><U>{props.title}</U>
                    
           </div>
           
                <div className="job-tile">
                    
                    <img src="/images/ak2.jpg" alt="are" /><P>slumdog millionaire</P>
          <U>{props.title}</U> </div>  
                    
                <div className="job-tile">
                    
                    <img src="/images/ak3.jpg" alt="are" /><P>johdha Akhbar</P>
          <U>{props.title}</U> </div>
                    
                <div className="job-tile">
                    
                    <img src="/images/ak4.jpg" alt="are" /><P>Dil bechara</P>
          <U>{props.title}</U></div>
                     
                <div className="job-tile">
                    
                    <img src="/images/ak5.jpg" alt="are" /> <P>highway</P>
          <U>{props.title} </U>
                       </div>  
                           
                <div className="job-tile">
                    
                    <img src="/images/ak6.jpg" alt="are"  /> <P>ganjini</P>
          <U>{props.title}</U> </div>                         
                      
</Text2>
           
        </div>
  
   
  )
}


const Text = styled.text`
  
  padding-right: 245px;
 
    display:flex;
    padding:10px;
    justify-content: space-around;
    flex-wrap: wrap;
    
    width:22%;
    margin:0 auto;
    text-align: center;
    background-color: #45484b;
    color:white;
`;
const Text2= styled.text`
    display: grid;
    grid-template-columns: repeat(6, 10fr);
    flex-grow: 5;
    
    text-align: center;
  background-color: #242121;
  color:white;
    gap: 40px;
    padding: 30px;
    transition: transform 0.2s;
    
    

    img {
    display: block;
    width: 120px;
    height: 120px;
    background: rgb(57, 57, 62);
    display: flex;
    flex-direction: column;
    color: white;
    transition: transform 0.2s;   
    cursor: pointer;
    padding: 20px;
    padding-bottom: 25px;
  }

`


const Text3 =styled.text`
font-size:232px;`

const U = styled.u`

padding-right: 63%;
cursor: pointer;
font-size:24px;`


const P = styled.p`
padding-right:70%;
font-size:24px;`
;
// const Is =styled.i`
// font-size:19px;
// background-color:rgb(57,57,62);
// padding-right:77%;
// margin-right: 43%;
// padding-bottom:22%;

// `

// ;


  

