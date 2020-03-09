# Branches

`basic-config`

Added basic libraries and basic views to start simple navigation

Added Jest for testing:

https://medium.com/@hdsenevi/unit-testing-in-react-native-with-jest-and-enzyme-40cd7dabb6f1

- I added a snapshot and if the change is intentionally later:

```
npm run test -- -u
```

## Storybook

https://medium.com/dooboolab/setup-storybook-with-react-native-typescript-project-774eea7a7719

- Had to solve this manually: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#react-native-async-storage
  as I had a warning

```
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
});
```

- To load "dinamically" the stories from the servers I had to install this library, now Storybook works as I want

## Routing
