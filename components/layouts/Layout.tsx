import React, { CSSProperties, FC } from 'react';
import Head from 'next/head';
import { NavBar } from '../ui';

interface Props {
  children: React.ReactNode;
  title?: string;
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  const styles: CSSProperties = {
    padding: '0px 20px',
  };

  return (

    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Alexis Beas' />
        <meta
          name='description'
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta
          name='keywords'
          content={`pokemon, informacion pokemon, pokedex, ${title}`}
        />

        <meta
          property='og:title'
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta
          property='og:description'
          content={`Pagina sobre ${title}`}
        />
        <meta
          property='og:image'
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <NavBar />

      <main style={styles}>{children}</main>
    </>
  );
};
