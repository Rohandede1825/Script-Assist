import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Title, Paper, Grid, Text, Divider } from "@mantine/core";

const HomeworldDetailPage: React.FC = () => {
  const location = useLocation();
  const { homeworld } = location.state as { homeworld: any };

  return (
    <Container size="sm" mt="xl">
      <Title align="center" order={1} mb="lg" color="blue">
         Homeworld Details
      </Title>

      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Grid>
          <Grid.Col span={6}>
            <Text weight={500}>🌎 Name:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.name}</Text>
          </Grid.Col>

          <Grid.Col span={12}>
            <Divider my="sm" />
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}> Climate:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.climate}</Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}> Diameter:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.diameter} km</Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}>Gravity:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.gravity}</Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}>Orbital Period:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.orbital_period} days</Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}>Population:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.population}</Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}>Rotation Period:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.rotation_period} hours</Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}>Surface Water:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.surface_water}%</Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text weight={500}>Terrain:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text>{homeworld.terrain}</Text>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomeworldDetailPage;
