import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Contacts from '../../Components/Contacts/Contacts';
import GlobeWindow from '../../Components/Globe/GlobeWindow';
import './main.scss';

function Main() {
  const { overlays } = useContext(AppContext);

  return (
    <div className="main-container">
      <GlobeWindow />
      {overlays.contacts && <Contacts />}
    </div>
  );
}

export default Main;