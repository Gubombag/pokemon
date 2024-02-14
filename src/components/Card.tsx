import axios from "axios";
import React from "react";
import { Container } from "./styles";
import Image from "next/image";

const Card = () => {

    const [dataSprites, setDataSprites] = React.useState<string[]>()
    const [names, setNames] = React.useState<string>()

    const fetchData = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/zapdos")
        .then((response) => {
            setDataSprites([
                response.data.sprites.back_default,
                response.data.sprites.front_default,
                response.data.sprites.back_shiny,
                response.data.sprites.front_shiny
            ])
            setNames(response.data.species.name)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        fetchData()
    }, []);

    React.useEffect(() => {
        console.log(dataSprites)
        console.log(names)
    })

    return(
        <Container>
            <div>{names}</div>
            <div>
                {dataSprites?.map((sprite: string) => (
                    <Image
                        src={sprite}
                        alt={sprite}
                        width={50}
                        height={50}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Card;