import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarWrapper = styled.aside`
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

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <SidebarNav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </SidebarNav>
    </SidebarWrapper>
  );
};

export default Sidebar;
