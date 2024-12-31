import { FlatCompat } from "@eslint/eslintrc";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Configuração de regras e extensões
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ),
  {
    rules: {
      "prettier/prettier": "error",
      "import/order": [
        "error",
        {
          groups: ["external", "builtin", "internal", "parent", "sibling"],
          pathGroups: [
            {
              pattern: "react+(|-dom)",
              group: "external",
              position: "before",
            },
            {
              pattern: "next{,/**}",
              group: "external",
              position: "before",
            },
            {
              pattern: "./*",
              group: "sibling",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react+(|-dom)"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
  {
    ignores: ["node_modules", "dist", "build", ".next"],
  },
];

export default eslintConfig;
