
import './App.css';
import DesktopHeader from './components/DesktopView/Header';
import DesktopNavigation from './components/DesktopView/Navigation';
import DesktopMainBody from './components/DesktopView/MainBody';
import DesktopMainDashboard from './components/DesktopView/Dashboard';
import DesktopHowDoesItWorks from './components/DesktopView/HowDoesItWorks';

import MobileHeader from './components/MobileView/Header'

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

  const MobilePage1 =<>
  <MobileHeader />
  </>

const Page1 = ()=>{
  console.log(window.innerWidth)
  if(window.innerWidth > 428){
    return <DesktopPage1 />
  }
  else{
    return <MobilePage1 />
  }
}

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
