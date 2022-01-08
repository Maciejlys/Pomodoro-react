import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessControl } from "./components/AccessControl";
import { HomePage } from "./components/HomePage";
import { LoginPanel } from "./components/LoginPanel";
import { GlobalStyles } from "./styled-components/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AccessControl>
        <Routes>
          <Route path={"/login"} element={<LoginPanel />} />
          <Route path={"/home"} element={<HomePage />} />
        </Routes>
      </AccessControl>
    </BrowserRouter>
  );
}

export default App;
