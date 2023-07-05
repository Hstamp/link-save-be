import { ApolloServer } from "apollo-server";

import { schema } from "./schema";
import { context } from "./context";

export const server = new ApolloServer({
  schema,
  context,
});

// Start the server and specify the port
server.listen(process.env.PORT).then(({ url }) => {
  console.log(`✨ Server ready at ${url}`);
});
