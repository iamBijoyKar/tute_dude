import './Dashboard.css'
const ReferralCode =()=>(
    <div className='mobile-referral-box'>
    <p>Your Referral Code </p>
    <div className='mobile-code-box'>
        <p>EDCH54</p>
    </div>
</div>
)
function Dashboard(){

    return (
        <>
        <div className='mobile-dashboard'>
            <div className='mobile-referral-raengings'>
                <p className='heading'>
                Referral Earning
                </p>
                <p className='amount'>
                ₹ 2,500
                </p>
            </div>
            <div className='mobile-total-referral'>
                <p className='heading'>
                    Total Referrals
                </p>
                <p className='amount'>
                    7
                </p>
            </div>
            <div className='mobile-wallet-balance'>
            <p className='heading'>
                Wallet Balance
                </p>
                <p className='amount'>
                    ₹500
                </p>
            </div>
            <div className='mobile-withdraw-balance'>
                <p className='heading'>
                Withdraw Balance
                </p>
            </div>
        </div>
        <ReferralCode />
        </>
    )
}

export default Dashboard