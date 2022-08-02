import React, { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from './PokemonCard';
import { SmallPokemon } from '../../interface';

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {pokemons.map((pokemon, index: number) => {
        return <PokemonCard pokemon={pokemon} key={index} />;
      })}
    </Grid.Container>
  );
};
