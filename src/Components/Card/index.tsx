import React from "react";
import { Container, Title } from "./styles";
import axios from "axios";
import Image from "next/image";

const Card = () => {
  const [dataSprites, setDataSprites] = React.useState<string[]>([]);
  const [name, setName] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/zapdos")
      .then((response) => {
        setDataSprites([
          response.data.sprites.back_default,
          response.data.sprites.back_shiny,
          response.data.sprites.front_default,
          response.data.sprites.front_shiny,
        ]);
        setName(response.data.species.name);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <Container>
      <Title>{name}</Title>
      <div>
        {dataSprites?.map((s: string) => (
          <Image key={s} alt={s} src={s} width={60} height={60} />
        ))}
      </div>
    </Container>
  );
};

export default Card;
