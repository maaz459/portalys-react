import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  width: 100%;
  background-color: ${(props) => props.background};
  @media screen and (max-width: 767px) {
    height: 100%;
    min-height: auto;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
`;

export const Child = styled.div`
  // height: calc(100vh - 60px);
`;
