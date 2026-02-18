import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
