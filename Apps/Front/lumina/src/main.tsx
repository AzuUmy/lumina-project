import { ApolloProvider } from "@apollo/client/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { apolloClient } from "./lib/apollo";
import { AppRouterProvider } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <AppRouterProvider />
    </ApolloProvider>
  </StrictMode>,
);
