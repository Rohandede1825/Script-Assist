import { useNavigate } from "react-router-dom";
import { Button, Container, Title, Text } from "@mantine/core";
import "../Css/Dashboard.scss";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/resource/1");
  };

  return (
    <Container className="dashboard-container">
      <Title order={1} className="dashboard-title">
        Welcome to Star Wars Universe
      </Title>
      <Text className="dashboard-text">
        Explore the vast world of Star Wars characters, ships, and planets. 
        Dive into the details and discover more about your favorite characters.
      </Text>
      <Button onClick={handleGetStarted} className="get-started-button">
        Get Started
      </Button>
    </Container>
  );
};

export default Dashboard;
