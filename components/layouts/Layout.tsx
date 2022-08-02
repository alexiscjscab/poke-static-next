import Head from 'next/head';
import React, { CSSProperties, FC } from 'react';
import { NavBar } from '../ui';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {

  const styles: CSSProperties = {
    padding: '0px 20px',
  }

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Alexis Beas' />
        <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
        <meta name='keywords' content={`pokemon, informacion pokemon, pokedex, ${title}`} />
      </Head>

      <NavBar />

      <main style={styles}>
        { children }
      </main>
    </>
  )
}

