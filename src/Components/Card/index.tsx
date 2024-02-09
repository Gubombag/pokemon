import React from "react";
import {Container, Li, Ul} from "./styles"
import axios from "axios";

const Card = () => {
    
    const [data, setData] = React.useState<any>()
      
    const fetchData = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/zapdos")
        .then((response) => {
        const species = []
        species.push(response.data.species.back_default)
        species.push(response.data.back_shiny)
        species.push(response.data.front_default)
        species.push(response.data.front_shiny)
        setData(species)
        console.log(species)
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