import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "./Css/App.scss";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import ResourceListPage from "./pages/ResourceListPage";
import Header from "../src/pages/components/Header";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import HomeworldDetailPage from "./pages/HomeworldDetailPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
      <Header />
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
       
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <ResourceListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resource/:id"
            element={
              <ProtectedRoute>
                <ResourceDetailPage />
              </ProtectedRoute>
            }
          />
          <Route path="/homeworld-detail" element={<HomeworldDetailPage />} />
          
   
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </MantineProvider>
    </>
  );
};

export default App;