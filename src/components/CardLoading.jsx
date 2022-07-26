import React from 'react';
import '../assets/styles/components/CardLoading.css';

// Muestra el mensaje de carga de la imagen o mensaje de error si ocurre éste último.
const CardLoading = ({ error, source }) => (
  <>
    <div className='card_Breed' key={0}>
      <div className='breed_image'>
        <p>{error ? 'Error load Cat API' : `Loading ${source}...`}</p>
        <p>{error ? `Error: ${error}` : ''}</p>
      </div>
    </div>
  </>
);

export default CardLoading;
