import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../Css/ResourceDetail.scss";
import {
  Card,
  Title,
  Text,
  Badge,
  Button,
  Loader,
  Container,
  Group,
  TextInput,
} from "@mantine/core";

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
  const [searchId, setSearchId] = useState<string>("");

  const { data, isLoading, error } = useQuery<Resource>({
    queryKey: ["resource", id],
    queryFn: () => fetchResourceById(id!),
    enabled: !!id,
  });

  const handleSearch = () => {
    if (searchId.trim()) {
      navigate(`/resource/${searchId}`);
    }
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleViewAll = () => {
    navigate("/resources");
  };

  return (
    <Container className="resource-container">
      <Card shadow="xl" padding="xl" radius="lg" className="search-card">
        <Title order={2} className="title">Search Star Wars Character</Title>
        <TextInput
          placeholder="Enter ID (1-80)..."
          value={searchId}
          onChange={(event) => setSearchId(event.currentTarget.value)}
          onKeyDown={handleEnterPress}
          className="search-input"
        />
        <Group mt="md" position="center">
          <Button onClick={handleSearch} className="search-button">
            Search
          </Button>
          <Button onClick={handleViewAll} className="view-all-button">
            View All
          </Button>
        </Group>
      </Card>

      {isLoading ? (
        <Loader size="lg" className="loader" />
      ) : error ? (
        <Text className="error">Error fetching resource</Text>
      ) : (
        <Card shadow="lg" padding="xl" radius="lg" className="resource-card">
          <Title order={2} className="character-name">{data?.name}</Title>
          <Group mt="md" className="badges-group">
            <Badge color="blue">Height: {data?.height} cm</Badge>
            <Badge color="green">Mass: {data?.mass} kg</Badge>
          </Group>
          <Text mt="sm">Hair Color: {data?.hair_color}</Text>
          <Text>Skin Color: {data?.skin_color}</Text>
          <Text>Eye Color: {data?.eye_color}</Text>
          <Text>Birth Year: {data?.birth_year}</Text>
          <Badge color="yellow" mt="md">Gender: {data?.gender}</Badge>
          <Button mt="lg" variant="outline" onClick={() => navigate(-1)} className="back-button">
            Go Back
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default ResourceDetailPage;
