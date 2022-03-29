import react, {useState} from 'react';

import './App.scss';

import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {

  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  }

  return (
    <div className="App">
      color: #cecece;
      <Navbar toggleSidebar={toggleSidebar} sideBar={sideBar}/>
      <Sidebar sideBar={sideBar} />
      <Dashboard />
    </div>
  );
}

export default App;
