import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from "react";
import App from "./components/App";
import CreateRoomPage from "./components/CreateRoomPage";
import RoomJoinPage from "./components/RoomJoinPage"
import HomePage from "./components/HomePage";

const root = createRoot(document.getElementById('app'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'create-room',
    element: <CreateRoomPage />
  },
  {
    path: 'room-join',
    element: <RoomJoinPage />
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider> 
  </React.StrictMode>
);
