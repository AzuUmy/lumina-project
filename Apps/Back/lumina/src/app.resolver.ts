import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver {
  @Query(() => String)
  health(): string {
    return "Lumina GraphQL API is running";
  }
}
