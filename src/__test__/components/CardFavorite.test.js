import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CardFavorite from '../../components/CardFavorite';
import CatFavoriteMock from '../../__mocks__/CatFavoriteMock';

describe('Test for <CardFavorite /> component', () => {
  test('CardFavorite render test', () => {
    const cardFavorite = shallow(
      // shallow Prueba el componente de forma aislada
      <ProviderMock>
        <CardFavorite />
      </ProviderMock>,
    );

    expect(cardFavorite.length).toEqual(1);
  });

  test('Remove cardFavorite button click test', () => {
    const handleRemoveFavoriteCat = jest.fn();
    const wrapper = mount(
      // mount Prueba el subcomponente
      <ProviderMock>
        <CardFavorite
          favorite={CatFavoriteMock}
          onClick={handleRemoveFavoriteCat}
        />
      </ProviderMock>,
    );

    wrapper.find('button').simulate('click');

    expect(handleRemoveFavoriteCat).toHaveBeenCalledTimes(1);
  });
});
