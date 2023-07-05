import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.int("id");
    t.string("description");
    t.nonNull.string("url");
  },
});

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: Link,
      resolve(parent, args, context, info) {
        return context.prisma.link.findMany();
      },
    });
  },
});

export const LinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("post", {
      type: Link,
      args: {
        description: stringArg(),
        url: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { description, url } = args;

        return context.prisma.link.create({
          // 2
          data: {
            description: description || null,
            url,
          },
        });
      },
    });
  },
});
