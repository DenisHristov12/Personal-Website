import styled from 'styled-components';

export const StyledHomePage = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4.8rem;
  /* background-color: blue; */
  padding: 2.4rem 2.4rem;
  max-width: 65%;
  height: 54rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  border: 5px solid var(--color-main-800);

  /* 1376px */
  @media (max-width: 86em) {
    max-width: 70%;
    padding: 1.2rem 1.2rem;
  }

  /* 1216px */
  @media (max-width: 70em) {
    max-width: 75%;
    padding: 0.8rem 0.8rem;
  }
`;
