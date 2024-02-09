import React from "react";
import {Container, Li, Ul} from "./styles"
import axios from "axios";

const Card = () => {
    
    const [data, setData] = React.useState<any>()
      
    const fetchData = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/zapdos")
        .then((response) => {
        const sprites = []
        sprites.push(response.data.sprites.back_default)
        sprites.push(response.data.sprites.back_shiny)
        sprites.push(response.data.sprites.front_default)
        sprites.push(response.data.sprites.front_shiny)
        setData(sprites)
        console.log(sprites)
        })
        .catch((error) => {
        console.error(error);
        })
    }
    
React.useEffect(() => {
    fetchData()
}), []

    return(
        <>
            <Container>
                <Ul>
                    <Li>{data}</Li>
                </Ul>
            </Container>
        </>
    )
}

export default Card;