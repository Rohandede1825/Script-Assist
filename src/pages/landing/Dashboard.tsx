import { useNavigate } from "react-router-dom";
import { Button, Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";
import styles from '../../Css/Dashboard.module.scss';
import useAuthStore from "../../store/authStore";
import { useCallback } from "react";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    document.body.classList.add("fade-out");
    setTimeout(() => navigate(path), 500);
  };

  const logout = useAuthStore((state) => state.logout);


    const handleLogout = useCallback(() => {
      logout();
      navigate("/login");
    }, [logout, navigate]);

  

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles["dashboard-container"]}
    >
      <Container>
        <Title order={1} className={styles["dashboard-title"]}>
          Welcome to the Galactic Explorer
        </Title>
       
        <div className={styles["button-group"]}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => handleNavigate("/resource/1")}
              className={styles["get-started-button"]}
            >
              Single Resource
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => handleNavigate("/resources")}
              className={styles["all-resources-button"]}
            >
              All Resources
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleLogout}
              className={styles["logout-button"]}
            >
              Logout
            </Button>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Dashboard;