import { Link } from 'react-router-dom'
import './Footer'

function Footer(){


    return (
        <>
            <p className='mobile-terms'>
                Terms & Conditions
            </p>
            <Link to='.\home'>
            <p className='mobile-enrolled-friend'>
                Friends Who Enrolled
            </p>
            </Link>
        </>
    )
}

export default Footer