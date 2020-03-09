import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
// import requireContext from "require-context.macro";
import { loadStories } from "./storyLoader";
import "./rn-addons";

// const req = requireContext("../components", true, /\.stories.js$/);

// function loadStories() {
//   req.keys().forEach(filename => {
//     return req(filename);
//   });
// }

// import stories
configure(() => {
  // require("../components/screens/Restaurants/Restaurants.stories");
  // require("../components/**/*.stories.js");
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
