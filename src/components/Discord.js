import React from 'react';
import styled from 'styled-components';

const Discord = () => {
  return (
    <BottomFixedDiv>
      <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-discord"></i>
        <h2>Join Discord</h2>
      </a>
    </BottomFixedDiv>
  );
};

export default Discord;

const BottomFixedDiv = styled.div`
  position: fixed;  /* Fix the position of the div */
  bottom: 30px;        /* Place it at the bottom of the viewport */
  right: 30px;      /* Set the distance from the right side */
  width: 100px;     /* Set the width for better spacing */
  height: 100px;    /* Adjust height for content */
  background-color: white;
  color: black; 
  border-radius: 50%;
  padding: 10px;     /* Padding to add space inside the div */
  display: flex;
  justify-content: center;  /* Center horizontally */
  align-items: center;     /* Center vertically */
  z-index: 999;    /* Ensure it stays above other content */
  flex-direction: column;   /* Stack the icon and text vertically */

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  i {
    font-size: 27px;  /* Adjust icon size */
  }

  h2 {
    font-size: 15px;   /* Set a smaller font size */
    margin-top: 3px;   /* Add a small margin between the icon and text */
    text-align: center;
    white-space: nowrap; /* Prevent text from wrapping to a new line */
    font-weight: 900;
  }

  @media (max-width: 1024px) {
    /* Adjust styles for medium screens */
  }

  @media (max-width: 768px) {
    /* Adjust styles for small screens */
  }

  @media (max-width: 576px) {
    width: 50px;     /* Set the width for better spacing */
    height: 50px;

    i {
      font-size: 19px;  /* Adjust icon size */
    }

    h2 {
      font-size: 10px;   /* Set a smaller font size */
      margin-top: 3px;   /* Add a small margin between the icon and text */
      text-align: center;
      white-space: nowrap; /* Prevent text from wrapping to a new line */
      font-weight: 600;
    }
  }
`;
