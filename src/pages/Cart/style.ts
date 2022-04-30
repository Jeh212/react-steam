import styled from 'styled-components';

export const CartPage = styled.main`
  justify-content: space-evenly;

  margin-top: 2rem;
  background: var(--background);
  height: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1400px;

  .title-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 100px;

    title {
      display: flex;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 42px;
      color: #ffffff;
    }
    strong {
      color: #ffffff;
    }
  }
`;

export const Itens = styled.section`
  background: var(--grey);
  margin-top: 60px;
  margin-left: 290px;
  margin-right: 290px;
  justify-content: center;
  border-radius: 20px;
`;

export const GamesInfo = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

export const Game = styled.div`
  img {
    width: 200px;
    border-radius: 20px;
  }
`;
