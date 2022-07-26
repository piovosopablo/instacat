import React from 'react';
import removeFavoriteButton from '../assets/static/remove-button.png';

// Este componente permite seleccionar las fotos aleatorias del día como favoritas.
// La seleción será mostrada en el contenedor Favorites.
const CardFavorite = ({ favorite, onClick }) => {

  return (
    <div className='card_favorite' id={favorite.id}>
      <figure>
        <img className='cat_favorite_image' src={favorite.image.url} alt='Cat' srcSet='' />
        <div className='card_favorite_actions'>
          <button type='button' className='btn-card' onClick={() => onClick(favorite.id)}>
            <img src={removeFavoriteButton} alt='Remove favorite button' />
          </button>
        </div>
      </figure>
    </div>
  );
};

export default CardFavorite;
