const Image = ({ imageURL, w, h, myStyles, handleClick, alt }) => {

    return (

        <img
            className={myStyles}
            onClick={handleClick}
            src={imageURL}
            alt={alt}
            width={w}
            height={h}
        />

    )
}

export default Image