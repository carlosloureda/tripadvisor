const STORYBOOK_START = true;
export default STORYBOOK_START
  ? require("./storybook").default
  : require("./components/App/App.tsx").default;
