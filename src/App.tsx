import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import ChatList from "./Pages/ChatList";
import NotFound from "./Pages/NotFound";
import Root from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "chat-list",
        element: <ChatList />,
      },
      {
        path: "account",
        element: <>Here goes user data</>,
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
