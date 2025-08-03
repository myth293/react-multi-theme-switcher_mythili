import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setTheme } from "../redux/themeSlice";

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    flex: 1;
    text-align: center;
  }
`;

const Select = styled.select`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  padding: 4px 8px;
  font-family: ${({ theme }) => theme.font};
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-shrink: 0;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 20px;
  height: 60px;
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: space-between;

    ${Logo} {
      flex: 1;
      text-align: center;
    }

    ${Select} {
      flex-shrink: 0;
    }
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
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

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.background};
    padding: 10px 20px;
    border-top: 1px solid ${({ theme }) => theme.color};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    z-index: 999;

    a {
      padding: 10px 0;
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme.color};
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 25px;
  height: 20px;
  justify-content: space-between;
  background: transparent;
  border: none;
  padding: 0;

  div {
    height: 3px;
    background: ${({ theme }) => theme.color};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

interface HeaderProps {
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle, isSidebarOpen }) => {
  const theme = useSelector((state: RootState) => state.theme.selectedTheme);
  const dispatch = useDispatch();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(e.target.value as "minimal" | "sidebar" | "card"));
    setMobileNavOpen(false);
  };

  const isSidebarTheme = theme === "sidebar";
  const isMobile = window.innerWidth <= 768;

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <HeaderWrapper>
      {isSidebarTheme ? (
        <Hamburger
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
          aria-expanded={isSidebarOpen}
          aria-controls="sidebar"
        >
          <div />
          <div />
          <div />
        </Hamburger>
      ) : (
        isMobile && (
          <Hamburger
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileNavOpen}
            aria-controls="nav"
          >
            <div />
            <div />
            <div />
          </Hamburger>
        )
      )}

      <Logo>MyApp</Logo>

      {!isSidebarTheme && (
        <Nav id="nav" isOpen={mobileNavOpen}>
          <NavLink to="/" onClick={closeMobileNav} end>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMobileNav}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMobileNav}>
            Contact
          </NavLink>
        </Nav>
      )}

      <Select
        value={theme}
        onChange={handleThemeChange}
        aria-label="Select Theme"
      >
        <option value="minimal">Theme 1 (Minimalist)</option>
        <option value="sidebar">Theme 2 (Dark)</option>
        <option value="card">Theme 3 (Color)</option>
      </Select>
    </HeaderWrapper>
  );
};

export default Header;
