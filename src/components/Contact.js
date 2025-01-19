import React from 'react';
import styled from 'styled-components';
import gorillaGradient from '../assets/gorillaGradient.png';

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <HeadContainer>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </HeadContainer>
        <ContactContainer>
        {/* Left Section */}
          <ContactInfo>
            
            <strong>Earnmanagement.com</strong>
            <h3>US +1 (872) 288 928</h3>
            <h3>UA +1 (872) 288 9283</h3>
          </ContactInfo>

        {/* Right Section */}
          <FormContainer>
            <ContactForm>
              <label>Your Name</label>
              <input type="text" placeholder="" />

              <label>Your Email Address</label>
              <input type="email" placeholder="" />

              <label>Describe your needs</label>
              <textarea placeholder=""></textarea>

              <SubmitButton>Submit Request</SubmitButton>
            </ContactForm>
          </FormContainer>
          </ContactContainer>

      </Container>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  display: flex;
  border-bottom:2px solid rgb(55, 62, 64);
  max-width: 100%; 
  background:#0d0f13;
  
  overflow: hidden; 
  position:relative;
  justify-content:center;
  
`;
const Container = styled.div`
  display: flex;
  flex-direction:column;
  background:#0d0f13;
  
  border-left:3px solid rgb(55, 62, 64);
  border-radius:30px 0 0 0;
  margin-top:-4px;
  margin-left:-30px;
  padding:0px 30px;
  color: #ffffff;
  width:67.8%;
  height:auto;
  position:relative;
  justify-content:center;


  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    width:90%;
  }
  @media (max-width:576px) {
   border-left:0px solid rgb(55, 62, 64);
   padding:0px 0px;
   border-radius:0px 0 0 0;
   margin-top:0px;
   margin-left:0px;
  }
`;

const HeadContainer = styled.div`
  position: relative;
  padding: 40px 0 0;
  margin: 0 auto; /* Center horizontally */
  text-align: center; /* Center text */
  
  h1 {
    font-size: 85px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    color: white;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 40px;
      font-weight: 400;
    }

    p {
      font-size: 12px;
    }
  }
`;



const ContactContainer = styled.div`
  display: flex;
  position:relative;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #0d0f13;
  // background: url(${gorillaGradient}) no-repeat center center; 
  // background-size: auto;
  
  color: #fff;
  padding: 0px 0px 0px 0px;
  width: 100%;
  
  

  
  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    flex-direction: column;
    padding: 20px;
    justify-content: center;
  }
  @media (max-width:576px) {
  
  
  }
`;

// Left Section - Contact Info
const ContactInfo = styled.div`
  width:50%;
  margin-left:25px;
  margin-top:80px;
  strong {
    font-size: 26px;
    color: #fff;
    display: block;
    margin: 20px 10px 10px 0px;
  }

  h3 {
    font-size: 23px;
    color: #fff;
    margin: 60px 10px 10px 0px;
    
    
  }

  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    width:100%;
    strong {
    font-size: 30px;
    
    text-align:center;
  }

  h3 {
    font-size: 27px;
    text-align:center;
   
    
    
  }
  }
  @media (max-width:576px) {
    width:100%;
    margin: -20px 0px 0px 0px;
    strong {
    font-size: 16px;
    margin: 20px 40px 10px 0px;
    text-align:center;
  }

  h3 {
    font-size: 13px;
    text-align:center;
    margin: 30px 40px 10px 0px;
   
    
    
  }  
  
  }

`;

// Right Section - Contact Form
const FormContainer = styled.div`
  
  width:50%;
  margin-top:110px;
  
  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    width:100%;
    margin-top:170px;
  }
  @media (max-width:576px) {
    padding:-20px 0 0 0 ;
    
  }
`;

const ContactForm = styled.form`
  
  display: flex;
  flex-direction: column;
  
  
  position:relative;
  
  input, textarea {
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #fff;
    font-size: 16px;
    padding: 10px 0;
    margin-bottom: 55px;
    outline: none;
    height:5px;
    width:120%;
    overflow:hidden;
    &:focus {
      border-bottom: 1px solid #fff;
    }
  }
  label{
    color:rgb(90, 102, 105);
  }

  textarea {
    resize: none;
    
  }
  position:relative;


  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    input, textarea {
      font-size: 28px;
      padding: 30px 0;
      margin-bottom: 55px;
      width:100%;
    }
    label{
      font-size:32px;
      text-align:center;
    }
  }
  @media (max-width:576px) {
  padding:20px 30px 0px 0px;
  background:none;
    position:relative;
    align-items:center;
    top:-100px;
    input, textarea {
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #fff;
    font-size: 16px;
    padding: 10px 0;
    margin-bottom:50px;
    outline: none;
    height:10px;
    width:87%;
    &:focus {
      border-bottom: 1px solid #fff;
    }
  }

  textarea {
    resize: none;
    
  }
  label{
      font-size:15px;
      text-align:center;
      
    }
  }
  }

   
`;

// Submit Button
const SubmitButton = styled.button`
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  font-size: 14px;
  cursor: pointer;
  align-self: flex-end;
  margin-top:0px;
  margin-bottom:150px;
  margin-right:-110px;

  &:hover {
    background-color: #007bff;
  }

  @media (max-width:1024px) {
  
  }
  @media (max-width:768px) {
    
    width: 210px;
    height: 210px;
    font-size: 24px;
  }
  @media (max-width:576px) {
    width: 100px;
    height: 100px;
    font-size: 12px;
    margin-right:0px;
    margin-bottom:-30px;
  
  }
`;
