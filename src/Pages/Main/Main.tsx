import { useContext } from 'react';
import { AnimatePresence } from "framer-motion";
import { AppContext } from '../../AppContext';
import Contacts from '../../Components/Contacts/Contacts';
import GlobeWindow from '../../Components/Globe/GlobeWindow';
import './main.scss';

function Main() {
  const { overlays } = useContext(AppContext);

  return (
    <div className="main-container">
      <GlobeWindow />
      <AnimatePresence>
        {overlays.contacts && (
          <Contacts />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Main;