import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import GlobeWindow from './Components/Globe/GlobeWindow';
import ChatList from "./Pages/ChatList/ChatList";
import Settings from "./Pages/Settings/Settings";
import ErrorPage from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import { AppContext, Overlays } from "./AppContext";
import { useState } from "react";

const defaultOverlays: Overlays = {
  chats: [],
  navProfile: false,
  leftDrawer: {
    contacts: false,
    chatHistory: false,
    feed: false,
  },
}

function App() {
  const [overlays, setOverlays] = useState(defaultOverlays);

  return (
    <AppContext.Provider value={{ overlays, setOverlays }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/chat-list" element={<ChatList />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} /> */}
          <Route path="*" element={<>Page not found</>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
