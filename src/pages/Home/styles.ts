import styled from 'styled-components';

export const HomePage = styled.main`
  justify-content: space-evenly;

  margin-top: 2rem;
  background: var(--background);
  height: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
`;

export const Section01 = styled.div`
  div {
    width: 800px;
    border-radius: 3%;
  }
  .game-details {
    justify-content: flex-start;
    color: white;
    margin-bottom: 50px;
    height: 50px;
    border-radius: 0 0 20px 20px;
    background-color: var(--grey);
    background: var(--purple);

    strong {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.9rem;
    }
    p {
      font-family: 'Yaldevi Colombo Light';
      font-weight: 300;
      font-size: 25px;
      line-height: 30px;
      align-items: center;
    }
  }
`;

export const Section02 = styled.div`
  .games-grid {
    display: grid;
    padding: 50px;
    gap: 80px;

    grid-template-columns: repeat(auto-fill, minmax(min(2px, 100%), 1fr));

    div {
      width: 250px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
