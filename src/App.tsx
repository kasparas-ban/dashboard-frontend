import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import GlobeWindow from './Components/Globe/GlobeWindow';
import ChatList from "./Pages/ChatList/ChatList";
import Contacts from "./Pages/Contacts/Contacts";
import Settings from "./Pages/Settings/Settings";
import ErrorPage from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<GlobeWindow />} />
        <Route path="/chat-list" element={<ChatList />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
