import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import { Title } from "./index";

storiesOf("Title", module).add("to Storybook", () => (
  <Title content="Sample text" />
));
