# Link Save Back-end

GraphQL server using Apollo.

## Key Packages

`apollo-server`

Fully-features GraphQL server based on Express.js. Express is a web application framework for Node.js which offers HTTP utility methods and middleware to enable the creation of APIs for web and mobile.

`apollo-server` contains the following features:

- GraphQL spec compliant
- Support for two GraphQL clients for testing and development
- Can be configured for use with an express server
- Query performance tracking
- Can be deployed anyway (e.g. AWS Lambda)

`nexus`

Nexus is a library which can be used to build a fully type-safe GraphQL schema. The schema is written by developers in TypeScript ("code-first"), and then nexus transpiles it down to GraphQL's schema definition language (SDL).

Features:

- Full type-safety
- Auto-generate GraphQL SDL
- Works out of the box with `apollo-server`

`ts-node-dev`

A modified version of `node-dev`, which restarts the node process when a file changes, but also shares Typescript complication process between restarts. As you're updating the code, `ts-node-dev` will ensure the nexus generates the more recent version of the GraphQL SDL and its types.

`prisma`
`prisma/client`

Open source DB toolkit and ORM which provides a clean and type-safe API to query the database. You need to define a Prisma schema which provides the definition for the application models in a data modelling language, along with the database connection and generator.

_Prisma Client_: Auto-generated and type-safe query builder for Node.js & Typescript
_Prisma CLI_: Command line tool to interact with Prisma
