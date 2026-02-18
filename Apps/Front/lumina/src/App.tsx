import { useQuery } from "@apollo/client/react";
import "./App.css";
import { HealthDocument } from "./graphql/generated";

function App() {
  const { data, loading, error } = useQuery(HealthDocument);

  return (
    <main className="app">
      <h1>Lumina Frontend</h1>
      {loading && <p>Loading GraphQL data...</p>}
      {error && <p>GraphQL error: {error.message}</p>}
      {data && <p>API status: {data.health}</p>}
    </main>
  );
}

export default App;
