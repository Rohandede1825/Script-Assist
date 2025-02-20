import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import '../Css/ResourceDetail.scss'
import {
  Card,
  Title,
  Text,
  Badge,
  Button,
  Loader,
  Container,
  Group,
} from "@mantine/core";
import axios from "axios";

interface Resource {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const fetchResourceById = async (id: string): Promise<Resource> => {
  const { data } = await axios.get(`https://swapi.dev/api/people/${id}/`);
  return data;
};

const ResourceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data, isLoading, error } = useQuery<Resource>({
    queryKey: ["resource", id],
    queryFn: () => fetchResourceById(id!),
    enabled: !!id,
  });

  if (isLoading) return <Loader size="lg" className="loader" />;
  if (error) return <Text className="error">Error fetching resource</Text>;

  return (
    <Container className="resource-container">
      <Card shadow="sm" padding="lg" radius="md" className="resource-card">
        <Title order={2}>{data?.name}</Title>
        <Group mt="md">
          <Badge color="blue">Height: {data?.height} cm</Badge>
          <Badge color="green">Mass: {data?.mass} kg</Badge>
        </Group>
        <Text mt="sm">Hair Color: {data?.hair_color}</Text>
        <Text>Skin Color: {data?.skin_color}</Text>
        <Text>Eye Color: {data?.eye_color}</Text>
        <Text>Birth Year: {data?.birth_year}</Text>
        <Badge color="yellow" mt="md">Gender: {data?.gender}</Badge>
        <Button mt="lg" variant="light" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Card>
    </Container>
  );
};

export default ResourceDetailPage;
