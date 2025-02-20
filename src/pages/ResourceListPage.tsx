import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TextInput, Select, Button, Loader, Container } from "@mantine/core";
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

const fetchResources = async (id?: number): Promise<Resource[]> => {
  try {
    if (id) {
      const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
      return [data]; // Return as an array to keep structure consistent
    } else {
      const { data } = await axios.get("https://swapi.dev/api/people/");
      return data.results;
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const ResourceListPage: React.FC = () => {
  const [characterId, setCharacterId] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const id = Number(characterId);
  const { data, isLoading, error, refetch } = useQuery<Resource[]>({
    queryKey: ["resources", id],
    queryFn: () => fetchResources(id >= 1 && id <= 80 ? id : undefined),
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

  return (
    <Container>
      <h2>Star Wars Characters</h2>

      {/* Fetch by ID */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <TextInput
          placeholder="Enter ID (1-80) or leave empty"
          value={characterId}
          onChange={(event) => setCharacterId(event.currentTarget.value)}
        />
        <Button onClick={() => refetch()}>Fetch Character</Button>
      </div>

      {/* Search, Filter, and Sorting Controls */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
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
      </div>

      {/* Table to Display Data */}
      <Table striped highlightOnHover withBorder withColumnBorders>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ResourceListPage;
