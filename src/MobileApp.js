import MobileHeader from './components/MobileView/Header'
import { Route, Routes } from 'react-router-dom'
import MobileDashboard from './components/MobileView/Dashboard'
import { MainContent } from './components/DesktopView/HowDoesItWorks'
import Footer from './components/MobileView/Footer'
function App(){
    const MobilePage1 =<>
    <MobileHeader content='UI/UX > Refer & Earn' />
    <MobileDashboard  />
    <MainContent />
    <Footer />
    </>
    const MobilePage2 = <>
    <MobileHeader content='UI/UX > Refer & Earn > Friends Referred' />
    
    </>

    return(
        <Routes>
            <Route path='/' element={MobilePage1} />
            <Route path='/home' element={ MobilePage2 } />
        </Routes>
    )
}

export default App