import React from 'react';
import useGetCats from '../hooks/useGetCats';
import Section from '../components/Sections';
import CardVote from '../components/CardVote';
import CardBreed from '../components/CardBreed';
import postVoteCat from '../utils/postVoteCat';
import { addFavoriteCat } from '../utils/favoritesCat';

// Información de entorno del usuario que ejecuta el proceso
const API = process.env.REACT_APP_CATS_API_URL;
const API_KEY = process.env.REACT_APP_CATS_API_KEY;
const NUMBERS_OF_CATS = process.env.REACT_APP_CATS_DAY_NUM;

// Rescata información para la imagen del gato del día
const Home = () => {
  const { catsOfTheDay, error } = useGetCats(
    `${API}/images/search?limit=${NUMBERS_OF_CATS}`,
    API_KEY,
    NUMBERS_OF_CATS,
  );

  // Función de botón para votar por la imagen del día
  const handlerClickVoteButton = async (catId, vote) => {
    const dataVote = {
      image_id: `${catId}`,
      sub_id: `${localStorage.getItem('Instacat_user')}`,
      _value: vote,
      get value() {
        // eslint-disable-next-line react/no-this-in-sfc
        return this._value;
      },
      set value(value) {
        // eslint-disable-next-line react/no-this-in-sfc
        this._value = value;
      },
    };

    // Mensaje tras la votación de la imagen del gato del día
    const response = await postVoteCat(`${API}/votes`, API_KEY, dataVote);
    if (vote && response.message === 'SUCCESS') {
      alert(`${response.message}: You like this cat`);
    } else {
      alert(`${response.message}: You dislike this cat`);
    }
  };
  // Almacena la imagen favorita para el usuario
  const handlerClickFavoriteButton = async (catId) => {
    const dataFavorite = {
      image_id: `${catId}`,
      sub_id: `${localStorage.getItem('instacat_user')}`,
    };

    const response = await addFavoriteCat(
      `${API}/favourites`,
      API_KEY,
      dataFavorite,
    );
    // Condicional de respuesta de éxito
    if (response.status === 200) {
      alert(`${response.message}: You adore this cat`);
    } else {
      alert(`${response.message}: Mhh!`);
    }
  };

  return (
    <>
      <Section key={0} title='Cat of the day'>
        <CardVote
          onClickVote={handlerClickVoteButton}
          onClickFavorite={handlerClickFavoriteButton}
          catsOfTheDay={catsOfTheDay}
          error={error}
        />
      </Section>
      <Section key={1} title='Breed of the day'>
        <CardBreed key={2} />
      </Section>
    </>
  );
};

export default Home;
