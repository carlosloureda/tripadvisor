const STORYBOOK_START = false;
export default STORYBOOK_START
  ? require("./storybook").default
  : require("./src/components/App/App.tsx").default;
