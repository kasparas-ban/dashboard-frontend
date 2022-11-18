import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './globewindow.scss';

function GlobeWindow() {
  const { overlays } = useContext(AppContext);

  const leftDrawerOpen = overlays.leftDrawer.contacts || overlays.leftDrawer.chatHistory;

  return (
    <iframe
      src='../globe/globe.html'
      className={leftDrawerOpen ? 'globe-iframe iframe-to-right' : 'globe-iframe'}
      frameBorder='0'
      title='Globe view'>
    </iframe>
  );
}

export default GlobeWindow;
