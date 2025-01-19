import React from 'react';
import styled from 'styled-components';
import gradient from '../assets/gradient.png';
import glowingCircle from '../assets/glowingCircle.png';
import graybg from '../assets/graybg.png';
import grayCircle from '../assets/grayCircle.png';
import whitebg from '../assets/whitebg.png';
import blueCircle from '../assets/blueCircle.png';

const Roadmap = () => {
  return (
    <Wrapper>
      <Container>
        <Upborderedbox></Upborderedbox>
        <BigBox>
            <Circle2Wrapper>
            <img src={blueCircle} alt="circle" />
          </Circle2Wrapper>
          <LeftPart>
            <Heading>
              <Title>Road Map</Title>
              <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
            </Heading>
            <QLineBB>
              <h2>2022</h2>
              <h4>Q1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise id purus augue.
                Lorem ipsum dolor
              </p>
            </QLineBB>
          </LeftPart>
          <RightPart>
            <DesignedImg src={glowingCircle} alt="img" />
          </RightPart>
          
        </BigBox>

        <R_BorderedBox>
          <RCircleWrapper>
            <img src={grayCircle} alt="circle" />
          </RCircleWrapper>
          <QLines_RB>
            <h2>2022</h2>
            <h4>Q2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise id purus augue.
              Lorem ipsum dolor
            </p>
          </QLines_RB>
        </R_BorderedBox>

        <L_BorderedBox>
          <LCircleWrapper>
            <img src={grayCircle} alt="circle" />
          </LCircleWrapper>
          <QLines_LB>
            <h2>2022</h2>
            <h4>Q3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise id purus augue.
              Lorem ipsum dolor
            </p>
          </QLines_LB>
        </L_BorderedBox>

        <R_BorderedBox>
          <RCircleWrapper>
            <img src={grayCircle} alt="circle" />
          </RCircleWrapper>
          <QLines_RB>
            <h2>2022</h2>
            <h4>Q4</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise id purus augue.
              Lorem ipsum dolor
            </p>
          </QLines_RB>
        </R_BorderedBox>

        <L_BorderedBox>
          <LCircleWrapper>
            <img src={grayCircle} alt="circle" />
          </LCircleWrapper>
          <QLines_LB>
            <h2>2023</h2>
            <h4>Q1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise id purus augue.
              Lorem ipsum dolor
            </p>
          </QLines_LB>
        </L_BorderedBox>

        <R_BorderedBox>
          <RCircleWrapper>
            <img src={grayCircle} alt="circle" />
          </RCircleWrapper>
          <QLines_RB>
            <h2>2023</h2>
            <h4>Q2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise id purus augue.
              Lorem ipsum dolor
            </p>
          </QLines_RB>
        </R_BorderedBox>
      </Container>
    </Wrapper>
  );
};

export default Roadmap;

const Wrapper = styled.div`
  display: flex;
  background: #0d0f13;
  position: relative;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  overflow: hidden;
  left:5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  postion:relative;
`;

const BigBox = styled.div`
  position: relative;
  width: 99%;
  border-left: 3px solid rgb(55, 62, 64);
  border-bottom: 3px solid rgb(55, 62, 64);
  display: flex;
  border-radius:0px 0px 0px 30px ;
  margin-top:23px;
  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    flex-direction:column-reverse;
    padding:100px 0 0 0;
    border-left: 3px solid rgb(55, 62, 64);
  }
  @media (max-width:576px) {
    width:96%;
    flex-direction:column-reverse;
    padding:100px 0 0 2px;
    border-left: 3px solid rgb(55, 62, 64);
    left:-6px;
    
  
    
  }
`;

const LeftPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width:1024px) {
    
  }
  @media (max-width:768px) {
    
  }
  @media (max-width:576px) {
   width:100%;   
  }  
`;

const Heading = styled.div`
  width: 100%;
  padding: 30px 0 0 60px;

  @media (max-width:1024px) {
    
  }
  @media (max-width:768px) {
    border-left: 0px solid rgb(55, 62, 64);
  }
  @media (max-width:576px) {
    border-left: 0px solid rgb(55, 62, 64);
    padding: 30px 0 0 40px;
    
  }
`;

const QLineBB = styled.div`
  width: 100%;
  padding: 0 0 20px 140px;
  margin-left:20px;
  h2 {
    font-size: 85px;
    font-weight: 100;
    margin-top: 60px;
  }
  h4 {
    color: rgb(14, 166, 177);
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 0px;
  }
  p {
    color: rgb(90, 102, 105);
    width: 58%;
    margin-bottom:70px;
    font-size:18px;
  }
  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    border-left: 0px solid rgb(55, 62, 64);
  }
  @media (max-width:576px) {
  padding: 0px 0 0px 32px;
  border-left: 0px solid rgb(55, 62, 64);
  h2 {
    font-size: 34px;
    font-weight: 200;
    
  }  
  h4 {
    
    font-size: 25px;
    font-weight: 200;
    margin-bottom:5px;
    
  }
  p {
    font-size:12px;
    width: 68%;
    
  }    
  }
`;

const QLines_RB = styled.div`
  width: 100%;
  padding: 20px 140px 35px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right:20px;

  h2 {
    font-size: 85px;
    font-weight: 100;
    margin: 0px;
  }
  h4 {
    color: rgb(14, 166, 177);
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  p {
    color: rgb(90, 102, 105);
    width: 44%;
    font-size:18px;
    text-align: right;
  }

  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
  
  }
  @media (max-width:576px) {
  
  padding: 10px 32px 15px 0;
  h2 {
    font-size: 34px;
    font-weight: 200;
    margin: 0px;
  }  
  h4 {
    
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 5px;
  }
  p {
    font-size:12px;
    width: 80%;
    
  }    
  }
`;

const QLines_LB = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 35px 140px;
  margin-left:20px;
  h2 {
    font-size: 85px;
    font-weight: 100;
    margin: 0px;
  }
  h4 {
    color: rgb(14, 166, 177);
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    color: rgb(90, 102, 105);
    width: 44%;
    font-size:18px;
  }

  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
  
  }
  @media (max-width:576px) {
  padding: 10px 0 15px 32px;
  h2 {
    font-size: 34px;
    font-weight: 200;
    margin: 0px;
  }  
  h4 {
    
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 5px;
  }
  p {
    font-size:12px;
    width: 80%;
    
  }    
  }
`;

const Title = styled.h1`
  position: relative;
  font-size: 100px;
  font-weight:400;
  @media (max-width:1024px) {
    
  }
  @media (max-width:768px) {
    
  }
  @media (max-width:576px) {
   font-size: 45px;
   font-weight:400; 
     
  }
`;

const Subtitle = styled.h4`
  position: relative;
  font-size: 20px;
  font-weight: 400;
  line-height: 0px;
  top: 10px;
  height: 100px;
  @media (max-width:1024px) {
    
  }
  @media (max-width:768px) {
    
  }
  @media (max-width:576px) {
   font-size: 10px;
   font-weight:200;
    
   top: 10px;
   right:15px; 
  }  
`;

const RightPart = styled.div`
  width: 50%;
  background: url(${gradient}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
  
  }
  @media (max-width:576px) {
    width:100%;
  }
`;

const DesignedImg = styled.img`
  width: 80%;
  height: auto;

  @media (max-width:1024px) {
    
  }
  @media (max-width:768px) {
    width:160%;
    position:relative;
    display:flex;
    left:130px;
    
  }
  @media (max-width:576px) {
    width: 80%;
  height: auto;
  left:0;
  }
`;

const Circle2Wrapper = styled.div`
  position: absolute;
  top: 64%;
  left:-120px;
  transform: translateY(-50% );
  width: 250px;
  height: 190px;
  background: url(${whitebg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background:white;
  border-radius:30px;
  img {
    width: 50%;
    height: auto;
    
  }

  @media (max-width:1024px) {
    width: 170px;
    height: 135px;
    left:-90px;
  }
  @media (max-width:768px) {
    width: 170px;
    height: 135px;
    left:-80px;
    
  }
  @media (max-width:576px) {
    top: 84%;
    width: 82px;
    height: 65px;
    left:-40px;
  }
`;


const RCircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  right:-120px;
  transform: translateY(-50%);
  width: 240px;
  height: 160px;
  background: url(${graybg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:30px;

  img {
    width: 45%;
    height: auto;
  }

  @media (max-width:1024px) {
    
  }
  @media (max-width:768px) {
    
  }
  @media (max-width:576px) {
    width: 75px;
    height: 60px;
    right:-38px;
  }
`;

const LCircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left:-120px;
  transform: translateY(-50%);
  width: 240px;
  height: 160px;
  background: url(${graybg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:30px;

  img {
    width: 45%;
    height: auto;
  }

  @media (max-width:1024px) {
    
  }
  @media (max-width:768px) {
    
  }
  @media (max-width:576px) {
    width: 75px;
    height: 60px;
    left:-38px;
  }
`;

const R_BorderedBox = styled.div`
  width: 100%;
  border-bottom: 3px solid rgb(55, 62, 64);
  border-right: 3px solid rgb(55, 62, 64);
  text-align: right;
  position: relative;
  display: flex;
  justify-content: flex-end;
  border-radius:0px 30px 30px 0px;
  margin-top:-5px;
  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
  
  }
  @media (max-width:576px) {
   width: 100%;
   margin-right:10px;
   
  }
  
`;

const L_BorderedBox = styled.div`
  width: 100%;
  border-bottom: 3px solid rgb(55, 62, 64);
  border-left: 3px solid rgb(55, 62, 64);
  text-align: left;
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin-top:-4px;
  margin-left:-14px;
  border-radius:30px 0px 0px 30px;
  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    
  }
  @media (max-width:576px) {
    
    width: 100%;
  }
  
`;


const Upborderedbox = styled.div`
    border-top: 3px solid rgb(55, 62, 64);
    border-right: 3px solid rgb(55, 62, 64);
    width: 14%;
    height:50px;
    position:absolute;
    left:0px;
    top:0px;
    border-radius:0px 30px 0px 0px;
    @media (max-width:1024px) {
    
    }
    @media (max-width:768px) {
      

    @media (max-width:576px) {
      left:-6px;
    }
`;

