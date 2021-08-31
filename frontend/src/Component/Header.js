import React from 'react'
import styled from 'styled-components'

export default function Header(props) {
  return (
    <div>

      <div className="App">

        <Text>
          <img src="/images/ak.jpg" alt="are" />
          <P>Rockstar</P>  <br />
          <U>A.R.Rahman  </U>
        </Text>
        <br />
        <Text1>
          Albums
        

        </Text1>
      </div>
    </div>
  )
}


const Text = styled.text`
  
  padding-right: 245px;
 
    display:flex;
    padding:10px;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    
    width:22%;
    margin:0 auto;
    text-align: center;
    background-color: #45484b;
    color:white;
`;

const Text1 = styled.text`
  
  padding-right: 201px;
  cursor: pointer;
  font-size:24px;
  padding-right: 245px;
  color:white;
    display:flex;
    padding:10px;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    
    width:20%;
    margin:0 auto;
    text-align: center;
    background-color: #45484b;
    padding-top: 34px;
`;
const U = styled.u`

padding-right: 63%;
cursor: pointer;
font-size:24px`


const P = styled.p`
padding-right:70%;
font-size:24px`
