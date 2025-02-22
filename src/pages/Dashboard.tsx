import { useNavigate } from "react-router-dom";
import { Button, Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";
import styles from "../Css/Dashboard.module.scss";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    document.body.classList.add("fade-out");
    setTimeout(() => navigate("/resource/1"), 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles["dashboard-container"]}
    >
      <Container>
        <Title order={1} className={styles["dashboard-title"]}>
          Welcome to Star Wars Universe
        </Title>
        <Text className={styles["dashboard-text"]}>
          Explore the vast world of Star Wars characters, ships, and planets.
          Dive into the details and discover more about your favorite characters.
        </Text>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleGetStarted}
            className={styles["get-started-button"]}
          >
            Get Started
          </Button>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
