import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
function App() {
  return (
    <>
      {/* <ScrollTop />
      <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
