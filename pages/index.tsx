/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { withTranslation } from '../i18n';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }): string => theme.colors.primary};
`;

const HomePage = ({ t }: any): JSX.Element => (
  <ul>
    <Title>{t('title')}</Title>

    <li>
      <Link href="/a" as="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
  </ul>
);

HomePage.getInitialProps = (): any => {
  return {
    namespacesRequired: ['common'],
  };
};

export default withTranslation('common')(HomePage);
