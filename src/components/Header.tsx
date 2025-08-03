import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setTheme } from "../redux/themeSlice";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    font-weight: 600;
    &.active {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Select = styled.select`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  padding: 4px 8px;
  font-family: ${({ theme }) => theme.font};
  border-radius: 4px;
  cursor: pointer;
`;

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.selectedTheme);
  const dispatch = useDispatch();

  const showNav = theme !== "sidebar";

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(e.target.value as "minimal" | "sidebar" | "card"));
  };

  return (
    <HeaderWrapper>
      <Logo>MyApp</Logo>

      {showNav && (
        <Nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      )}

      <Select value={theme} onChange={handleThemeChange} aria-label="Select Theme">
        <option value="minimal">Theme 1 (Minimal)</option>
        <option value="sidebar">Theme 2 (Sidebar)</option>
        <option value="card">Theme 3 (Card)</option>
      </Select>
    </HeaderWrapper>
  );
};

export default Header;
