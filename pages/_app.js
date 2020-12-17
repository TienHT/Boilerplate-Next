import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import Public from '../layouts/public';
import PropTypes from 'prop-types';
import UserProvider from '../context/userContext'
export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <UserProvider>

          <CssBaseline />
          <Public>
              <Component {...pageProps} />
        </Public>
        </UserProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
        Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};