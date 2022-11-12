import './Navigation.css'

function Navigation(props){


    return (
        <div className='navigation'>
            <p className='navigation-text'>{props.content}</p>
        </div>
    )
}
export default Navigation