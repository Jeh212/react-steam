import { Header } from '../../components/Header';
import { CartInfo, CartPage, Game, GamesInfo, Itens } from './style';
import avatar from '../../assets/avatar.jpg';
import sistema from '../../assets/sistema.svg';
function Cart() {
  return (
    <>
      <Header />
      <CartPage>
        <CartInfo>
          <div className='title-cart'>
            <title>SEU CARRINHO DE COMPRAS QUANTIDADE: 4 </title>
          </div>
        </CartInfo>

        <Itens>
          <ul>
            <GamesInfo>
              <Game>
                <img src={avatar} alt='' />
                <div className='details-game'>
                  <p>GTA</p>
                  <strong>R$ 120,00</strong>
                  <div>
                    <img src={sistema} alt='' />
                  </div>
                </div>
              </Game>
            </GamesInfo>
          </ul>
        </Itens>
      </CartPage>
    </>
  );
}

export { Cart };
