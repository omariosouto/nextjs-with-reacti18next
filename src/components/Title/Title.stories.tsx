import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { Title } from "./index";

const stories = storiesOf("Title", module);

stories.add("with sample text", () => {
  const content = text("Content", "Sample text");
  return <Title content={content} />;
});
