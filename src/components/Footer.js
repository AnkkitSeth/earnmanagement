import React from 'react';
import styled from 'styled-components';

const Footer = ({ onRoadmapClick, onContactClick }) => {
  return (
    <Wrapper>
      <Container>
        <TableContainer>
          <Column>
            <Title>Fingertip</Title>
            <Link href="#">Home</Link>
            <Link href="https://www.earnmanagement.com/docs/introduction/overview" target="_blank" rel="noopener noreferrer">
              Blog
            </Link>
            <Link href="#" onClick={onRoadmapClick}>
              Roadmap
            </Link>
            <Link href="#" onClick={onContactClick}>
              Contact
            </Link>
          </Column>

          <Column>
            <Title>Resources</Title>
            <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              Discord
            </Link>
            <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>
            <Link href="#">Lorem</Link>
            <Link href="#">Lorem</Link>
          </Column>

          <Column>
            <Title>About</Title>
            <Link href="#">Lorem</Link>
            <Link href="#">Lorem</Link>
            <Link href="#">Lorem</Link>
            <Link href="#">Lorem</Link>
          </Column>
        </TableContainer>

        <IconContainer>
          <Column2>
            <ColouredLink href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-discord"></i> Join us on Discord
            </ColouredLink>
            <Link href="#">
              <i className="bi bi-phone"></i>(239) 555-0193
            </Link>
            <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </Link>
          </Column2>
        </IconContainer>
      </Container>
      
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background: #0d0f13;
  color: #ffffff;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  background: #0d0f13;
  width: 908px;
  padding: 50px 0;
  position: relative;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const TableContainer = styled.div`
  width: 50%;
  background-color: #0d0f13;
  color: white;
  display: flex;
  gap: 110px;

  @media (max-width: 768px) {
    gap: 70px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 576px) {
    gap: 40px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const Title = styled.h3`
  font-size: 19px;
  font-weight: 400;
  margin-bottom: 16px;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;


  &:hover {
    text-decoration: underline;
  }

  i {
    margin-right: 15px;
    font-size: 18px;
  }
   @media (max-width: 576px) {
    font-size: 13px;
  }
`;

const ColouredLink = styled.a`
  font-size: 16px;
  color: rgb(87, 30, 209);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  i {
    margin-right: 15px;
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 30%;
  background-color: #0d0f13;
  color: white;
  justify-content: right;
  i{
    font-size:24px;
  }
  @media (max-width: 768px) {
    width: 50%;
    justify-content: center;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin-top:50px;
    i{
    font-size:23px;
  }
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  top: 0px;
`;
