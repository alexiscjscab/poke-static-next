import { pokeApi } from '../api';
import { Layout } from '../components/layouts/';
import type { GetStaticProps, NextPage } from 'next';
import { PokemonListResponse, SmallPokemon } from '../interface';
import { PokemonList } from '../components/pokemon/PokemonList';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons}) => {

  return (
    <Layout>
      <PokemonList pokemons={pokemons} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
      id: ++index,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`
    }
  })

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default HomePage
