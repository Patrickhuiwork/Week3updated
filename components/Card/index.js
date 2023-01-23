export default function Card({
    degree = "none",
    colour = "purple",
    font = 0,
    image = 'icon/personTwo.png'
}) {
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "#001242" ? <img src={'icon/person.png'} width="50"/> :
                colour === "#FF8552" ? <img src={'icon/personThree.png'} width="50"/> :
                                    <img src={image} width="50"/>

            }
            {degree}

        </div>
    )
} 