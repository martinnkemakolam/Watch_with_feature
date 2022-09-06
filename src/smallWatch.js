function smallWatch(prop) {
    return(
        <>
        <img src={prop.image} onClick={prop.click} className={prop.className}/>
        </>
    )
}
export default smallWatch