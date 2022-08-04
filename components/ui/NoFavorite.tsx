import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorite = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'cal(100vh - 100px)',
      aligItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>
      <Text>No hay Favoritos</Text>
      <Image 
        alt='img-pokemon'
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        height={250}
        width={250}
        css={{
          opacity: 0.1
        }}
      />
    </Container>
  )
}

