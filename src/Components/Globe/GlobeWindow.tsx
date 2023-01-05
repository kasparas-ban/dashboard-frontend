import { useAppStore } from '../../appStore';
import './globewindow.scss';

function GlobeWindow() {
  const leftDrawer = useAppStore(state => state.leftDrawer);

  const leftDrawerOpen =
    leftDrawer.contacts ||
    leftDrawer.chatHistory ||
    leftDrawer.feed;

  return (
    <iframe
      src='../globe/globe.html'
      className={leftDrawerOpen ? 'globe-iframe iframe-to-right' : 'globe-iframe'}
      title='Globe view'>
    </iframe>
  );
}

export default GlobeWindow;
