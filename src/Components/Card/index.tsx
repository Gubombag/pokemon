import React from "react";
import {Container, Li, Ul} from "./styles"
import axios from "axios";

const Card = () => {
    
      const [data, setData] = React.useState()
      
      const fetchData = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/zapdos")
        .then((response) => {
        setData(response.data)
        })
        .catch((error) => {
        console.log(error);
        })
      }
    
React.useEffect(() => {
    fetchData()
}), []

    return(
        <>
            <Container>
                <Ul>
                    <Li>{JSON.stringify(data)}</Li>
                </Ul>
            </Container>
        </>
    )
}

export default Card;