import React from "react";
import {Container, Li, Ul} from "./styles"
import axios from "axios";

const Card = () => {
    
      const [data, setData] = React.useState()
      const [loading, setLoading] = React.useState<boolean>()
      
      const fetchData = () => {
        setLoading(true)
        axios
        .get("https://pokeapi.co/api/v2/pokemon/zapdos")
        .then((response) => {
        setData(response.data)
        setLoading(false)
        })
        .catch((error) => {
        console.log(error);
        })
      }

const handle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
}
    
React.useEffect(() => {
    fetchData()
}), []

    return(
        <>
            <Container>
                <Ul>
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : (
                        <Li>{JSON.stringify(data)}</Li>
                    )}
                </Ul>
            </Container>
        </>
    )
}

export default Card;