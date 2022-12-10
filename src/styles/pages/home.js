import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .thumbnail {
    width: 100%;
  }
`;

export const HeaderSectionWrapper = styled.div`
  .headerSelect {
    padding: 0;
    margin: 0;
  }
`;

export const HomeWrapper = styled.div`
  .organizerText {
    background: linear-gradient(
      90deg,
      #02f6ad 0%,
      rgba(151, 71, 255, 0.86) 48.05%,
      #02f6ad 81.45%,
      rgba(255, 152, 17, 0.61) 101.82%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
