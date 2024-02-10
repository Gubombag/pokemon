import React from "react";
import {Container, Li, Ul} from "./styles"
import axios from "axios";

const Card = () => {
    
    const [dataSprites, setDataSprites] = React.useState<any>()
    const [dataSpecies, setDataSpecies] = React.useState<any>()
      
    const fetchData = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/zapdos")
        .then((response) => {
        const sprites = []
        sprites.push(response.data.sprites.back_default)
        sprites.push(response.data.sprites.back_shiny)
        sprites.push(response.data.sprites.front_default)
        sprites.push(response.data.sprites.front_shiny)
        setDataSprites(sprites)
        })
        .catch((error) => {
        console.error(error);
        })
    }

    const fetchData1 = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/zapdos")
        .then((response) => {
            const species = [];
            species.push(response.data.species.name);
            species.push(response.data.species.url);
            setDataSpecies(species);
        })
        .catch((error1) => {
            console.error(error1);
        })
    }
    
React.useEffect(() => {
    fetchData()
}), []

React.useEffect(() => {
    fetchData1()
}), []

    return(
        <>
            <Container>
                <Ul>
                    <Li>{dataSprites}</Li><br></br>
                    <Li>{dataSpecies}</Li>
                </Ul>
            </Container>
        </>
    )
}

export default Card;