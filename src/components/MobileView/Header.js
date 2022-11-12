import './Header.css'
import header_image from './../../media/header_image.png'
import down_arrow from './../../media/down_arrow.png'

function Header(props){


    return(
        <div className='mobile-header'>
            <img src={header_image} />
            <div className='mobile-profile'>
                <p>Profile Name</p>
                <img src={ down_arrow }  />
            </div>
            <p className='mobile-ref' >{ props.content }</p>
        </div>
    )
}
export default Header