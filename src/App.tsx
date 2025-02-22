import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "./Css/App.scss";
import Login from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ResourceListPage from "./pages/ResourceListPage";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import HomeworldDetailPage from "./pages/HomeworldDetailPage";
import Header from "./pages/components/Header";
import ProtectedRoute from "./pages/components/ProtectedRoute";

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
          <Route
            path="/homeworld-detail"
            element={
              <ProtectedRoute>
                <HomeworldDetailPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Signup />} />
        </Routes>
      </MantineProvider>
    </>
  );
};

export default App;
