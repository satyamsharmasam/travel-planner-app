import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
