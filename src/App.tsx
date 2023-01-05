import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
// import GlobeWindow from './Components/Globe/GlobeWindow';
// import ChatList from "./Pages/ChatList/ChatList";
// import Settings from "./Pages/Settings/Settings";
// import ErrorPage from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
