import React from "react";
import Link from "next/link";
import { withTranslation } from "../i18n";

const HomePage = ({ t }: any) => (
  <ul>
    {t("title")}
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

HomePage.getInitialProps = () => {
  return {
    namespacesRequired: ["common"]
  };
};

export default withTranslation("common")(HomePage);
