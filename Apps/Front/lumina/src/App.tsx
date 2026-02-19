import { ApolloProvider } from "@apollo/client/react";
import { RouterProvider } from "@tanstack/react-router";
import { apolloClient } from "./lib/apollo";
import { Router } from "./routes/routes";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
