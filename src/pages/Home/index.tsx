import { Header } from '../../components/Header';
import { HomePage, Section01, Section02 } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Jogos } from '../interface/IJogos';
import avatar from '../../assets/avatar.jpg';

type Shop = {
  id: string;
  destaquesDaSemana: Jogos[];
  createdAt: Date;
};

type UserCart = {
  id: string;
  userId: string;
  total: string;
  createdAt: Date;
  jogos: string[];
};

function Home() {
  const [weekleGames, setWeekleGames] = useState<Shop>();
  const [userCart, setUserCart] = useState<UserCart>();

  useEffect(() => {
    axios
      .get('http://localhost:3333/store/getWeek/626b7dba07872547c6a08b61')
      .then((response) => setWeekleGames(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        'http://localhost:3333/carts/userCart/3409b504-c4bb-4faa-9925-aeb57272d8e3'
      )
      .then((response) => setUserCart(response.data));
  }, []);

  const games = weekleGames?.destaquesDaSemana;

  return (
    <>
      <Header jogos={userCart?.jogos} />
      <HomePage>
        <Section01>
          <Carousel
            interval={3000}
            autoPlay={true}
            infiniteLoop={true}
            axis='horizontal'
            showThumbs={false}
            showArrows={false}
            autoFocus={true}
          >
            {games?.map((game: Jogos) => (
              <div key={game.id}>
                <img src={game.capa} />
                <div className='game-details'>
                  <strong>{game.titulo}</strong>
                  <p>R$ {game.preco}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </Section01>

        <Section02>
          <div className='games-grid'>
            <div>
              <img src={avatar} alt='' />
            </div>
            <div>
              <img src={avatar} alt='' />
            </div>
            <div>
              <img src={avatar} alt='' />
            </div>
            <div>
              <img src={avatar} alt='' />
            </div>
          </div>
        </Section02>
      </HomePage>
    </>
  );
}

export { Home };
