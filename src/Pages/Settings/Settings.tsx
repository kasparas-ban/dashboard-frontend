import axios from 'axios';
import './settings.scss';

function Settings() {
  const logout = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/logout'
    })
      .then(res => {
        if (res.status === 200) {
          window.location.href = "http://localhost:3001/"
        }
      })
      .catch(err => console.log('Failed to logout'));
  }

  return (
    <>
      <div className="settings-page">This is a settings page.</div>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Settings;