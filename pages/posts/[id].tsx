import React, { Component } from "react";
// This is our initialised `NextI18Next` instance
import { withTranslation } from "../../i18n";

class PostIntern extends Component<any, any> {
  static async getInitialProps({ query }: any) {
    const { id } = query;
    console.log(id);

    return {
      namespacesRequired: ["common"],
      postId: id
    };
  }

  render() {
    const { t, postId } = this.props;
    return (
      <div>
        <p>
          I'm insite a post: {postId} {t("title")}
        </p>
      </div>
    );
  }
}

export default withTranslation("common")(PostIntern);

// export default () => <div>a</div>;
