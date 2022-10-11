import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import ChatList from "./Pages/ChatList";
import Globe from "./Pages/Globe";
import NotFound from "./Pages/NotFound";
import Root from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "world",
        element: <Globe />,
      },
      {
        path: "chat-list",
        element: <ChatList />,
      },
      {
        path: "contacts",
        element: <>A list of contacts</>,
      },
      {
        path: "settings",
        element: <>Some settings go here</>,
      },
    ],
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
