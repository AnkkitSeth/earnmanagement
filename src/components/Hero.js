import React from 'react';
import styled from 'styled-components';
import gorilla from '../assets/gorilla.png';
import coin from '../assets/coin.png';
import gorillaGradient from '../assets/gorillaGradient.png';

const Hero = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>Guild Hub of the Metaverse</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          sagittis mattis hendrerit. Praesent vel risus in risus vestibulum
          aliquet.
        </Description>
        <InputWrapper>
        <Input type="email" placeholder="Enter your Email Address" />
        <Separator />
        <Select>
          <option>Owner</option>
          <option>Scholar</option>
        </Select>
        <SubmitButton>
        <i class="bi bi-send"></i>
        </SubmitButton>
    </InputWrapper>
      </TextContainer>
      <GorillaContainer>
        <GorillaImg src={gorilla} alt="Gorilla" />
        <CoinImg src={coin} alt="Coin" />
        <SpeechBubbleOne>
          You mean, I can track my scholars' performance?
        </SpeechBubbleOne>
        <SpeechBubbleTwo>
          Automate payments for<br /> quick transparent cashout?
        </SpeechBubbleTwo>
        <SpeechBubbleThree>
          All on one platform that<br />
          doesn't lag? You're kidding.
        </SpeechBubbleThree>
        <SpeechBubbleFour>Search and Breed<br /> Axies and NFTs</SpeechBubbleFour>
      </GorillaContainer>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background: #0d0f13;
  color: #ffffff;
  max-width: 100%; 
  overflow-x: hidden;
  position:relative;
  top:60px; 

  @media (max-width: 1024px) {
    padding: 16px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    position:relative;
    padding: 23px; 
    justify-content:center;
  }

  @media (max-width: 480px) {
     
  }
`;


const TextContainer = styled.div`
  max-width: 50%;
  padding: 0 60px 40px 80px;

  @media (max-width: 1024px) {
    max-width: 80%;
    padding: 0 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0 10px;
    text-align: center;
    margin-top:40px
  } 
  @media (max-width: 470px) {
    max-width: 90%;
    padding: 0 10px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 16px;
  font-weight: 500;
  line-height:88px;
  color:rgba(255,255,255,1);
  
  @media (max-width: 1024px) {
    font-size: 70px; 
  }
  @media (max-width: 768px) {
    font-size: 60px; 
    line-height:75px;
  }
  @media (max-width: 470px) {
    line-height:45px;
    font-size: 43.9px;
  }
`;

const Description = styled.h2`

  font-size: 20px;
  margin-bottom: 50px;
  font-weight:400;
  width:582px;
  height:90.46px;

  @media (max-width: 1024px) { 
    font-size: 18px;
    max-width:660px; 
    height:70px;
  }

  @media (max-width: 768px) {
    font-size: 19px; 
    line-height:25px;
    font-size: 14px;
    left:0px;
    max-width:420px;
  }

 @media (max-width: 470px) {
    line-height:25px;
    font-size: 12px;
    text-align:center;
    max-width:280px;
  }

`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 50px;
  width: 100%;
  max-width: 477px; /* Adjust as needed */
  height:55px;
  padding: 10px 20px; /* Padding inside wrapper */
  background-color:  #0d0f13;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Optional subtle shadow */

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 6px 12px;
  }
  @media (max-width: 576px) {
    max-width: 93%;
    padding: 4px 10px;
    height:70%;
  }
`;

// Input field styling
const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #f4f4f4;
  outline: none;
  margin-right: 8px;

  &::placeholder {
    color: #bbb;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;
const Separator = styled.div`
  width: 1px; /* Thickness of the line */
  height: 38px; /* Height of the line */
  background-color:#738c8f; /* Light gray color */
  margin: 0 12px; /* Space around the separator */
  @media (max-width: 480px) {
    height: 30px;
  }
`;

// Select dropdown styling
const Select = styled.select`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #f4f4f4;
  outline: none;
  margin-right: 8px;

  option {
    color: #333;
    background-color: #f4f4f4;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

// Submit button styling
const SubmitButton = styled.button`
  background-color: #007bff; /* Blue background */
  border: none;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  display: flex;
  position:relative;
  align-items: center;
  right:-15px;
  justify-content: center;
  cursor: pointer;
  color: #f4f4f4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  i{
    font-size:32px;
    rotate:50deg;
    margin-right:10px;
    
  }

  @media (max-width: 768px) {
    i{
    font-size:26px;
    rotate:50deg;
    margin-right:10px;
    
   }
  right:-10px;
  width: 50px;
  height: 50px;
  }

  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
     i{
    font-size:20px;
    rotate:50deg;
    margin-right:5px;
    
   }
    right:-7px;
  }
`;



const GorillaContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  right:45px;
  z-index:1;
  background: url(${gorillaGradient}) no-repeat center center; 
  background-size: cover;

  @media (max-width: 768px) {
    max-width: 90%; 
    margin-left: 0; /* Keep it left-aligned on smaller screens */
  }
  @media (max-width: 470px) {
    right:0px;
    
  }
`;

const GorillaImg = styled.img`
  width: 170%;
  max-width: 1000px; 
  height: auto;

  @media (max-width: 768px) {
    max-width: 90%; 
  }

  @media (max-width: 470px) {
    max-width: 140%; 
  } 
`;

const CoinImg = styled.img`
  position: absolute;
  bottom: -18px;
  right: 22%;
  width: 40%;
  height: auto;

  @media (max-width: 1024px) {
    right: 25%;
    width: 35%; 
  }

  @media (max-width: 768px) {
    right:32%; 
    bottom:-9px;
    width: 26%; 
  }
  @media (max-width: 470px) {
    right:24%; 
    bottom:-7px;
    width: 41%; 
  }
`;

const SpeechBubble = styled.div`
  position: absolute;
  background: rgba(28, 37, 44, 0.39);
  border-radius: 50px;
  padding: 18px 20px; 
  font-size: 15px; 
  font-weight:500;
  line-height: 1.6; 
  color: #fff;
  min-height: 50px; 
  min-width: 150px; 
  text-align: left; 
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(15px); 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 12px 15px;
    min-width: 120px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 10px 12px;
    min-width: 100px;
    min-height: 30px; 
    min-width: 100px;
  }

  @media (max-width: 480px) {
    font-size: 7px;
    padding: 8px 10px;
    min-width: 80px;
    min-height: 20px; 
    
    
  }
`;


const SpeechBubbleOne = styled(SpeechBubble)`
  top: 20%;  
  left: 80%; 
  width:24%; 
  transform: translate(-50%, -20%);

  @media (max-width: 1024px) {
    top: 25%;
    left: 80%;
  }

  @media (max-width: 768px) {
    top: 21%;
    left: 72%;
  }

  @media (max-width: 480px) {
    top: 18%;
    left: 83%;
  }
`;

const SpeechBubbleTwo = styled(SpeechBubble)`
  top: 35%;
  left: 3%;

  @media (max-width: 1024px) {
    top: 32%;
    left: 16%;
  }

  @media (max-width: 768px) {
    top: 32%;
    left: 18.5%;
  }

  @media (max-width: 480px) {
    top: 27%;
    left: 1%;
  }
`;

const SpeechBubbleThree = styled(SpeechBubble)`
  top: 65%;
  left: 8%;

  @media (max-width: 1024px) {
    top: 62%;
    left: 17%;
  }

  @media (max-width: 768px) {
    top: 61%;
    left: 20%;
  }

  @media (max-width: 480px) {
    top: 60%;
    left: 0%;
  }
`;

const SpeechBubbleFour = styled(SpeechBubble)`
  top: 60%;
  right: 3%;

  @media (max-width: 1024px) {
    top: 57%;
    right: 13%;
  }

  @media (max-width: 768px) {
    top: 56%;
    right: 17%;
  }

  @media (max-width: 480px) {
    top: 53%;
    right: -4%;
  }
`;
