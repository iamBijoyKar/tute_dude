import header_image from './../media/header_image.png'
import profile_image from './../media/profile_image.png'
import down_arrow from './../media/down_arrow.png'
import './Header.css'


function Header(){
    return(
        <header className="nav-header">
            <img src={header_image} alt='profile image' className='header-image' />
            <nav className="navbar">
                <p className="nav-link1 ">
                    My Assignment
                </p>
                <p className="nav-link2 ">
                    Chat with Mentor
                </p>
                <div className="profile">
                    <img src={profile_image} alt='profile image' className='profile-image'/>
                    <p className="profile-name">
                        ProfileName
                    </p>
                    <img src={down_arrow} alt='down arrow' className='down-arrow'/>
                </div>
            </nav>
        </header>
    )
}

export default Header