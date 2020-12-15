import React from 'react';
import Head from 'next/head'
import Header from '../components/Header/Header'
import routes from '../routes';
const Public = ({children,title = 'Default title'}) => {
    return (
        <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header routes={routes} logo={{
          src: '/images/logo.3b88cdac.png',
          path: '/aboutUs'
        }}/>
        
        {children}
        <footer>{'I`m here to stay'}</footer>
      </div>
    );
}

export default Public;
