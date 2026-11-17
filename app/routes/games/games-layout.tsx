import { Outlet } from "react-router";

export default function GamesLayout() {
  return (
    <div>
      <h1>Добро пожаловать в Game Layout! 🎮</h1>
      <Outlet />
    </div>
  );
}
