import { addDecorator, configure } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

// Decorators
addDecorator(withInfo);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
