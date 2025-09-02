import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
function App() {
  return (
    <>
      <div className='px-2'>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
