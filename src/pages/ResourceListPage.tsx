import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TextInput, Select, Button, Loader, Container, ScrollArea, Group, Stack, Title } from "@mantine/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Resource {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

const fetchResources = async (): Promise<Resource[]> => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/people/");
    return data.results;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const ResourceListPage: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<Resource[]>({
    queryKey: ["resources"],
    queryFn: fetchResources,
  });

  if (isLoading) return <Loader size="lg" />;
  if (error) return <p>Error fetching resources</p>;

  const filteredData = data
    ?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    ?.filter((item) => (filter ? item.gender === filter : true))
    ?.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const ShowDetail = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      navigate("/homeworld-detail", { state: { homeworld: data } });
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  return (
    <Container size="lg">
      <Title align="center" order={2} mt="md" mb="lg">
        All Details
      </Title>

      <Stack spacing="md">
        <Group grow>
          <TextInput
            placeholder="Search by name..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          <Select
            placeholder="Filter by gender"
            data={["male", "female", "n/a", "hermaphrodite"]}
            value={filter}
            onChange={setFilter}
          />
          <Button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            Sort: {sortOrder.toUpperCase()}
          </Button>
        </Group>
      </Stack>

      <ScrollArea>
        <Table striped highlightOnHover withBorder withColumnBorders mt="lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height (cm)</th>
              <th>Mass (kg)</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
              <th>Eye Color</th>
              <th>Birth Year</th>
              <th>Gender</th>
              <th>Homeworld</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.height}</td>
                <td>{item.mass}</td>
                <td>{item.hair_color}</td>
                <td>{item.skin_color}</td>
                <td>{item.eye_color}</td>
                <td>{item.birth_year}</td>
                <td>{item.gender}</td>
                <td onClick={() => ShowDetail(item.homeworld)} style={{ cursor: "pointer", color: "blue" }}>
                  Show..
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </Container>
  );
};

export default ResourceListPage;
