import React, { Component } from 'react';
// This is our initialised `NextI18Next` instance
import { withTranslation } from '../i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class APage extends Component<any, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static async getInitialProps(): Promise<any> {
    return {
      namespacesRequired: ['common'],
    };
  }

  public render(): JSX.Element {
    const { t } = this.props;
    return (
      <div>
        <p>currentLanguage: {t('title')}</p>
      </div>
    );
  }
}

export default withTranslation('common')(APage);

// export default () => <div>a</div>;
