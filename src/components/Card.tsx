import axios from "axios";
import React from "react";
import { Container } from "./styles";
import Image from "next/image";

const Card = () => {

    const [dataSprites, setDataSprites] = React.useState<string[]>()
    const [names, setNames] = React.useState<string>()
    const [nameInput, setNameInput] = React.useState<string>()

    const fetchData = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${nameInput}`)
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData();
    }

    return(
        <Container>
            <form onSubmit={(e => {
                handleSubmit(e)
            })}>
                <input
                    type="text"
                    value={nameInput}
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            setNameInput(e.target.value)
                        }
                    }   
                >
                </input>
            </form>
            <div>{names}</div>
            <div>
                {dataSprites?.map((sprite) => (
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