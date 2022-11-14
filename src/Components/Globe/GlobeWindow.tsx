import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './globewindow.scss';

function GlobeWindow() {
  const { overlays } = useContext(AppContext);

  return (
    <iframe
      src='../globe/globe.html'
      className={overlays.contacts ? 'globe-iframe iframe-to-right' : 'globe-iframe'}
      frameBorder='0'
      title='Globe view'>
    </iframe>
  );
}

export default GlobeWindow;
