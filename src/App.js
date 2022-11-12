
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainBody, { Terms } from './components/MainBody';
import MainDashboard, { ReferralCode } from './components/Dashboard';
import HowDoesItWorks, { EnrolledFriendLink } from './components/HowDoesItWorks';
import { Route, Routes } from 'react-router-dom';

function App() {
  const Page1 =<>
      <Header/>
      <Navigation content={`UI/UX > Refer & Earn > Friends Referred `}  />
      <MainBody/>
  </>

  const Page2 =<>
    <Header/>
    <Navigation content={`UI/UX > Refer & Earn `} />
    <MainDashboard/>
    <HowDoesItWorks/>
  </>
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Page2} />
        <Route path='/home' element={Page1} />
      </Routes>
      {/* <Header/>
      <Navigation/>
      <MainBody/> */}
    </div>
  );
}

export default App;
