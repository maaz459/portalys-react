import styled from "@emotion/styled";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};

  .navLink {
    margin: 0;
    padding: 0;
  }
`;
