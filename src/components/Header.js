import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Wrapper = styled.div`
  width: 100%;
  background-color: #0d0f13;
  display: flex;
  align-items: center;
  height: 80px; /* Fixed height for the header */
  position: fixed;
  z-index: 10000; /* Higher than SidebarContainer */
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  align-items: center;
  padding: 20px 0px 0px 50px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
    padding: 10px 0px 0px 40px;
  }
`;

const MenuBox = styled.div`
  display: flex;
`;

const Menu = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 20px;
  padding: 0;

  @media (max-width: 576px) {
    display: none;
  }
`;

const Tabs = styled.li`
  font-size: 18px;
  color: white;
  list-style: none;

  button,
  a {
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    font-size: inherit;
    cursor: pointer;

    &:hover {
      color: rgb(48, 218, 233);
    }
  }
`;

const IconBox = styled.div`
  border: 2px solid gray;
  border-radius: 50px;
  display: flex;
  gap: 22px;
  padding: 12px 18px;
  position: relative;
  margin-right: 50px;
  margin-top: 20px;

  a {
    color: white;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: rgb(48, 218, 233);
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ToggleButton = styled.button`
  display: none;
  background-color: #111;
  color: white;
  border: none;
  font-size: 25px;
  cursor: pointer;

  @media (max-width: 576px) {
    display: block;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 40px;
  }
`;

const SidebarContainer = styled.div`
  height: calc(100% - 80px); /* Subtract the height of the header */
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  position: fixed;
  top: 80px; /* Start below the header */
  left: 0;
  background: #0d0f13;
  overflow-x: hidden;
  transition: width 0.3s;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SidebarContent = styled.div`
  text-align: center;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const MenuItem = styled.a`
  padding: 30px;
  text-decoration: none;
  font-size: 28px;
  color: white;
  display: block;
  transition: 0.3s;

  &:hover {
    background-color: #575757;
  }
`;

function Header({ onRoadmapClick, onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <Icon>
          <LogoImg src={logo} alt="logo" />
        </Icon>

        <MenuBox>
          <Menu>
            <Tabs>
              <button onClick={onRoadmapClick}>Roadmap</button>
            </Tabs>
            <Tabs>
              <button onClick={onContactClick}>Contact</button>
            </Tabs>
            <Tabs>
              <a
                href="https://www.earnmanagement.com/docs/introduction/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </Tabs>
          </Menu>
        </MenuBox>

        <IconBox>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-discord"></i>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
        </IconBox>

        <ToggleButton onClick={toggleSidebar}>☰</ToggleButton>
      </Wrapper>
      {isOpen && (
        <SidebarContainer isOpen={isOpen}>
          <SidebarContent isOpen={isOpen}>
            <MenuItem href="#" onClick={onRoadmapClick}>
              Roadmap
            </MenuItem>
            <MenuItem href="#" onClick={onContactClick}>
              Contact
            </MenuItem>
            <MenuItem
              href="https://www.earnmanagement.com/docs/introduction/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </MenuItem>
            <MenuItem href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-discord"></i>
            </MenuItem>
            <MenuItem href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </MenuItem>
          </SidebarContent>
        </SidebarContainer>
      )}
    </>
  );
}

export default Header;
