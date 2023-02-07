import { Route, Routes } from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';
import { Error } from '../components/Error';
import Footer from '../components/Footer/Footer';
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';

//Links are setup to allow only <routes> to change; the whole app is not re-rendered
//Nested routes
//parent child routes; element only given to children as appropriate
//if the parent route needs to be rendered, use index for the route instead of path
//sharing a layout is possible amongst children via passing an element that carries the layout into the parent

// add on click to sign/add your cluster to redirect to dashboard

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/home' element={<HomeContainer />} />

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
