/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
// This is our initialised `NextI18Next` instance
import { withTranslation } from '../../i18n';

class PostIntern extends Component<any, any> {
  public static async getInitialProps({ query }: any): Promise<any> {
    const { id } = query;
    console.log(id);

    return {
      namespacesRequired: ['common'],
      postId: id,
    };
  }

  public render(): JSX.Element {
    const { t, postId } = this.props;
    return (
      <div>
        <p>
          Im inside a post: {postId} {t('title')}
        </p>
      </div>
    );
  }
}

export default withTranslation('common')(PostIntern);

// export default () => <div>a</div>;
