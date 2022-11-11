import './MainBody.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
function Referral(){
    return(
        <>
            <p className='referral-text'>
                Your Referral Code 
            </p>
            <div className='referral-code-box'>
                <p className='referral-code'>
                    EDCH54
                </p>
            </div>
        </>
    )
}

function Dashboard(){
    return (
        <>
        <div className='dashboard'>
            <p className='wallet-balance'>Wallet Balance</p>
            <p className='amount'>₹ 500</p>
        </div>
        </>
    )
}

function ReferralCards(){
    return(
        <Carousel className='referral-cards'>
            <Card name='Dhiraj Saxsena' date='14 Sep, 2022' number='6' amount='₹185' courses={['UI/UX','Photoshop', 'Illustrator' ,'Python','MERN','Java']} />      
            <Card name='Subhash Mishra' date='14 Sep, 2022' number='23' amount='₹485' courses={['UI/UX','Photoshop', 'Illustrator' ,'Python','MERN','Java','C++']} />
            <Card name='Dhiraj Saxsena' date='14 Sep, 2022' number='23' amount='₹485' courses={['UI/UX','Photoshop', 'Illustrator' ,'Python','MERN','Java','C++']} />
        </Carousel>
    )
}

function EnrolledFriend(){
    return (
        <>
            <h3 className='enrolled-friend-heading'>
                Friends who enrolled(3)
            </h3>
            <ReferralCards/>
        </>
    )
}

const Terms = () => (<>
    <p className='terms-condition'>
        Terms & Conditions
    </p>
</>)

function MainBody(){


    return (
        <>
        <Referral/>
        <Dashboard/>
        <EnrolledFriend/>
        
        </>
    )
}
export default MainBody
export {Terms}