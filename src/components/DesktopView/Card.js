import './Card.css'

function Course(props){

    return(
        <div className='course'>
            <p>{props.name}</p>
        </div>
    )
}

function Card(props){

    const courses = props.courses
    return (
        <div className='card'>
            <p className='friend-name'>
                {props.name}
            </p>
            <p className='date'>
                {props.date}
            </p>
            <p className='courses-heading'>
                Courses Enrolled({props.number})
            </p>
            <p className='amount-text'>
                Referral Amount 
            </p>
            <p className='card-amount'>
                {props.amount}
            </p>
            <div className='courses'>
                {
                   courses.map((i)=>{
                    return(
                        <Course name={i} />
                    )
                   })
                }
            </div>
        </div>
    )

}

export default Card