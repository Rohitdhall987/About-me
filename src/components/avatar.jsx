function Avatar({src}){
    return(
        <>
            <img className="w-1/2 md:w-full  rounded-full border-8 border-white" src={src} alt="profile" />
        </>
    )
}

export default Avatar;