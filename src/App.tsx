import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { themes } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.selectedTheme
  );
  const theme = themes[selectedTheme];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);
  const isDesktop = window.innerWidth > 768;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename="/react-multi-theme-switcher_mythili">
        <Header onSidebarToggle={toggleSidebar} isSidebarOpen={sidebarOpen} />
        {theme.layout === "sidebar" && (
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        )}
        <main
          style={{
            marginLeft: theme.layout === "sidebar" && isDesktop ? 200 : 0,
            minHeight: "100vh",
          }}
          onClick={closeSidebar}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
