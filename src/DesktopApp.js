
import './App.css';
import DesktopHeader from './components/DesktopView/Header';
import DesktopNavigation from './components/DesktopView/Navigation';
import DesktopMainBody from './components/DesktopView/MainBody';
import DesktopMainDashboard from './components/DesktopView/Dashboard';
import DesktopHowDoesItWorks from './components/DesktopView/HowDoesItWorks';


import { Route, Routes } from 'react-router-dom';

function App() {

  const DesktopPage1 =<>
      <DesktopHeader/>
      <DesktopNavigation content={`UI/UX > Refer & Earn > Friends Referred `}  />
      <DesktopMainBody/>
  </>

  const DesktopPage2 =<>
    <DesktopHeader/>
    <DesktopNavigation content={`UI/UX > Refer & Earn `} />
    <DesktopMainDashboard/>
    <DesktopHowDoesItWorks/>
  </>

  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={DesktopPage2} />
        <Route path='/home' element={ DesktopPage1 } />
      </Routes>
    </div>
  );
}

export default App;
