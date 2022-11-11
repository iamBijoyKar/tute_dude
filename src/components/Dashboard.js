import './Dashboard.css'

const ReferralCode = ()=>(<div className='referral-box'>
    <p>Your Referral Code </p>
    <div className='code-box'>
        <p>EDCH54</p>
    </div>
</div>)

function MainDashboard(){

    return(
        <>
        <div className='main-dashboard'>
            <div className='referral-earning-box'>
                <p className='referral-earning-heading'>
                    Referral Earning
                </p>
                <p className='referral-earning-amount'>
                    ₹ 2,500
                </p>
            </div>
            <div className='total-referrals-box'>
                <p className='total-referrals-heading'>
                    Total Referrals
                </p>
                <p className='total-referrals-number'>
                    7
                </p>
            </div>
            <div className='wallet-balance-box'>
                <p className='wallet-balance-heading'>
                    Wallet Balance
                </p>
                <p className='wallet-balance-amount'>
                    ₹ 500
                </p>
            </div>
            <div className='withdraw-balance'>
                <p>
                    Withdraw Balance
                </p>
            </div>
        </div>
        <ReferralCode/>
        </>
    )
}
export default MainDashboard
export {ReferralCode}