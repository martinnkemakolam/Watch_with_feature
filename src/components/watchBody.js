import './watchBody.css'
function watchBody(prop) {

    return(
        <div className='watchbody'>
        <img src={prop.img}/>
        <span className='date'>
            {prop.display}
        </span>
        </div>
    )
}
export default watchBody