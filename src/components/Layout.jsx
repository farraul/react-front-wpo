import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Outlet } from 'react-router-dom'; //para mostrar children
import { CacheProvider } from '@emotion/react'; // es para no colisionar material ui y tailwind
import createCache from '@emotion/cache';
import { SnackbarUtilitiesConfigurator } from '../utilities';
import Header from './Header';

//outlet los children
const myCache = createCache({
  key: 'my-prefix-key',
  stylisPlugins: [],
  insertionPoint: document.getElementById('emotion-insertion-point'),
});

function Layout() {
  return (
    <CacheProvider value={myCache}> 
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <SnackbarUtilitiesConfigurator />
        <Header />
        <main>
          <Outlet /> 
        </main>
      </SnackbarProvider>
    </CacheProvider>
  );
}

export default Layout;
