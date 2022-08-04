import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts';
import { Favorites, NoFavorite } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons ] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [])

  return (
    <Layout title='Favoritos'>
      {
        favoritePokemons.length === 0 
        
        ? ( <NoFavorite /> )
        : ( <Favorites pokemons={favoritePokemons}/> )
      }
      
    </Layout>
  );
};

export default FavoritesPage;
