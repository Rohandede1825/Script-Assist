import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MantineProvider, Navbar } from "@mantine/core";
import { theme } from "./theme";
import "./Css/App.scss";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import ResourceListPage from "./pages/ResourceListPage";
import  Header from "../src/pages/components/Header";
import ResourceDetailPage  from "./pages/ResourceDetailPage";
import HomeworldDetailPage from "./pages/HomeworldDetailPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
              <Dashboard />
            
          }

        
        />
        <Route
          path="/resources"
          element={
              <ResourceListPage />
           
          }
        />
        
          <Route path="/resources" element={<ResourceListPage />} /> 
        <Route path="/homeworld-detail" element={<HomeworldDetailPage />} />
        <Route path="/resource/:id" element={<ResourceDetailPage />} />

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </MantineProvider>
    </>

  );
};

export default App;
