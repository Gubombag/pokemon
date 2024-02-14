import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  flex-direction: column;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 55px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LabelInput = styled.div`
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-size: 50px;
  text-transform: capitalize;
`;
