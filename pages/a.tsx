import React, { Component } from "react";
// This is our initialised `NextI18Next` instance
import { withTranslation } from "../i18n";

class APage extends Component<any, any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ["common"]
    };
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <p>currentLanguage: {t("title")}</p>
      </div>
    );
  }
}

export default withTranslation("common")(APage);

// export default () => <div>a</div>;
