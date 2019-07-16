/* eslint-disable @typescript-eslint/no-explicit-any */
import Document from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: any): Promise<any> {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): any =>
        originalRenderPage({
          enhanceApp: (App: any): any => (props: any): any =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
