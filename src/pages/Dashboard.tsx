import { useNavigate } from "react-router-dom";
import { Button, Container, Title, Text } from "@mantine/core";
import styles from "../Css/Dashboard.module.scss";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/resource/1");
  };

  return (
    <Container className={styles.dashboardContainer}>
      <Title order={1} className={styles.dashboardTitle}>
        Welcome to Star Wars Universe
      </Title>
      <Text className={styles.dashboardText}>
        Explore the vast world of Star Wars characters, ships, and planets. 
        Dive into the details and discover more about your favorite characters.
      </Text>
      <Button onClick={handleGetStarted} className={styles.getStartedButton}>
        Get Started
      </Button>
    </Container>
  );
};

export default Dashboard;
