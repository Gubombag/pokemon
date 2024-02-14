import React from "react";
import { Container, ContainerForm, LabelInput, Title } from "./styles";
import axios from "axios";
import Image from "next/image";

interface ILoadingData {
  loading: boolean;
  error: boolean;
}

const LoadingDataInitialState = {
  loading: true,
  error: false,
};

const Card = () => {
  const [dataSprites, setDataSprites] = React.useState<string[]>([]);
  const [name, setName] = React.useState<string>();
  const [nameInput, setNameInput] = React.useState<string>("zapdos");
  const [loadingData, setLoadingData] = React.useState<ILoadingData>(
    LoadingDataInitialState
  );

  const fetchData = () => {
    setLoadingData(LoadingDataInitialState);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nameInput}`)
      .then((response) => {
        setDataSprites([
          response.data.sprites.front_default,
          response.data.sprites.back_default,
          response.data.sprites.front_shiny,
          response.data.sprites.back_shiny,
        ]);
        setName(response.data.species.name);
        setLoadingData({ error: false, loading: false });
      })
      .catch((error) => {
        console.error(error);
        setLoadingData({ error: true, loading: false });
      });
  };

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <ContainerForm>
        <form onSubmit={(e) => handleSubmit(e)}>
          <LabelInput>Write the {`pokemon's`} name and press enter</LabelInput>
          <input
            type="text"
            value={nameInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNameInput(e.target.value)
            }
          />
        </form>
      </ContainerForm>
      {loadingData.loading && !loadingData.error && (
        <Container>loading...</Container>
      )}
      {loadingData.error && <Container>error!</Container>}
      {!loadingData.loading && !loadingData.error && (
        <Container>
          <Title>{name}</Title>
          <div>
            {dataSprites?.map((src: string) => (
              <Image key={src} alt={src} src={src} width={60} height={60} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default Card;
