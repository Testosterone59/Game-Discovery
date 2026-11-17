import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("games", "routes/games/games-layout.tsx", [
    index("routes/games/game-catalog.tsx"),
    route(":id", "routes/games/game-details.tsx"),
  ]),
] satisfies RouteConfig;
