import React from 'react';
import BREEDS from '../utils/breedsList';
import '../assets/styles/components/SearchForm.css';

// Componente para el formulario de búsqueda.
// Contiene los elementos: Categoría, Tipo de imagen y Raza
const SearchForm = ({ onChange, onClick, isLoading }) => {
  return (
    <form>
      <div className='search-form-container'>
        <label htmlFor='type_img'>
          Type:
          <select onChange={onChange} name='type_img' id='type_img' className='form-control' placeholder='Category'>
            <option key={0} value=''>type</option>
            <option key={1} value='gif'>Animated</option>
            <option key={2} value='jpg,png'>Still</option>
          </select>
        </label>
        <label htmlFor='breed'>
          Breed:
          <select onChange={onChange} name='breed' id='breed' className='form-control' placeholder='Category'>
            <option key={0} value=''>Breed</option>
            {BREEDS.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
        </label>
        <button onClick={onClick} type='button' className='btn btn-primary'>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
