import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), "schema.grapql"), // nexus will generate the schema file for you, schema.graphql
    typegen: join(process.cwd(), "nexus-typegen.ts"), // ts definitions for all types in your GWL schema
  },
  contextType: {
    module: join(process.cwd(), "./src/context.ts"), // path to the module where context is exported
    export: "Context", // Name of exported interface in the context module
  },
});
