import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MantineProvider, Navbar } from "@mantine/core";
import { theme } from "./theme";
import "./Css/App.scss";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import ResourceListPage from "./pages/ResourceListPage";
import  Header from "../src/pages/components/Header";
import ResourceDetailPage  from "./pages/ResourceDetailPage";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>

    <Header/>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/resources" element={<ResourceListPage />} /> 
        <Route path="/resource/:id" element={<ResourceDetailPage />} />

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </MantineProvider>
    </>

  );
};

export default App;
