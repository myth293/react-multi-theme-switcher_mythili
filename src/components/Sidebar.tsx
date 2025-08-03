import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarWrapper = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
  padding: 20px;
  box-sizing: border-box;
  z-index: 1100;

  @media (max-width: 768px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    color: ${({ theme }) => theme.color};
    margin-bottom: 15px;
    font-weight: 500;
    text-decoration: none;

    &.active {
      text-decoration: underline;
      font-weight: 700;
    }
  }
`;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <SidebarWrapper id="sidebar" isOpen={isOpen} role="navigation">
        <SidebarNav onClick={onClose}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </SidebarNav>
      </SidebarWrapper>
      <Overlay isOpen={isOpen} onClick={onClose} />
    </>
  );
};

export default Sidebar;
