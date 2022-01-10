import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AccessControl } from "./components/AccessControl";
import { PATH } from "./components/constants";
import { HomePage } from "./components/HomePage";
import { Loader } from "./components/Loader";
import { LoginPanel } from "./components/LoginPanel";
import { useAppSelector } from "./store/hooks";
import { loadingState } from "./store/reducers/loading";
import { GlobalStyles } from "./styled-components/GlobalStyles";

function App() {
  const { isLoading } = useAppSelector(loadingState);
  return (
    <HashRouter>
      <GlobalStyles />
      {isLoading && <Loader />}
      <AccessControl>
        <Routes>
          <Route path={PATH.LOGIN} element={<LoginPanel />} />
          <Route path={PATH.HOME} element={<HomePage />} />
        </Routes>
      </AccessControl>
    </HashRouter>
  );
}

export default App;
