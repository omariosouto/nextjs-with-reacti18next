import React from 'react';
import App, { Container } from 'next/app';
import { appWithTranslation } from '../i18n';

class MyApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);
