import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessControl } from "./components/AccessControl";
import { HomePage } from "./components/HomePage";
import { Loader } from "./components/Loader";
import { LoginPanel } from "./components/LoginPanel";
import { useAppSelector } from "./store/hooks";
import { loadingState } from "./store/reducers/loading";
import { GlobalStyles } from "./styled-components/GlobalStyles";

function App() {
  const { isLoading } = useAppSelector(loadingState);
  return (
    <BrowserRouter>
      <GlobalStyles />
      {isLoading && <Loader />}
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
