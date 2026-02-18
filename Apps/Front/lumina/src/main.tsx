import { ApolloProvider } from "@apollo/client/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { apolloClient } from "./lib/apollo";
import { RouterProvider } from "@tanstack/react-router";
import { Router } from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={Router}/>
    </ApolloProvider>
  </StrictMode>,
);
