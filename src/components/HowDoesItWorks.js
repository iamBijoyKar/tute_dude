import './HowDoesItWorks.css'
import people from './../media/people.png'
import coupon from './../media/coupon.png'
import percent from './../media/percent.png'
import rupee from './../media/rupee.png'
import wallet from './../media/wallet.png'
import { Link } from 'react-router-dom'
import { Terms } from './MainBody'
function Data(props){

    return(
        <div className='data-box'>
            <div className='data-icon'>
                <img src={props.img} />
            </div>
            <div className='content'>
                <h4>{props.heading}</h4>
                <p>{props.des}</p>
            </div>
        </div>
    )
}

const EnrolledFriendLink = () => (<>
    <Link to='.\home' className='enrolled-link'>
        <p className='enrolled-link-text'>
            Friends Who Enrolled
        </p>
    </Link>
</>)

function MainContent(){
    return(

        <div className='how-does-it-works-box'>
            <p>How does it work ?</p>
            <Data img={people} heading='Invite your Friends' des="Share the link tutedude.com with your friends" />
            <Data img={rupee} heading='You get ₹ 200 as referral money' des="On total purchase the friend makes, into your wallet" />
            <Data img={wallet} heading='Transfer money from wallet' des="When the wallet balance reaches ₹200 or more, you can withdraw it" />
            <Data img={coupon} heading='Friend purchases any course' des="Using your REFERRAL CODE in the payments page" />
            <Data img={percent} heading='Your Friend gets ₹ 200 Off ' des="On his overall fee on successful purchase using your referral code " />
        </div>
    )
}
function HowDoesItWorks(){
    return(
        <>
            <MainContent/>
            <EnrolledFriendLink />
        </>
    )
}
export default HowDoesItWorks
export {EnrolledFriendLink}