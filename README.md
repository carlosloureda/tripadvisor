# Tripadvisor Clone

This is a mini clone project on Tripadvisor to show students a complete React Native app

## Table of Contents

- [Installation](#installation)
- [About](#about)
- [Support](#support)
- [Contributing](#contributing)

## Installation

### CONFIGURATION

Create a .env file in the root of your project with the FIREBASE configuration (you need to creata a firebase app and get the config params):

```
FIREBASE_CONFIG = {
    apiKey: <apiKey>,
    authDomain: <authDomain>,
    databaseURL: <databaseURL>,
    projectId: <projectId>,
    storageBucket: <storageBucket>,
    messagingSenderId: <messagingSenderId>,
    appId: <appId>,
    measurementId: <measurementId>
}
```

To run this project you need to

```sh
git clone https://github.com/carlosloureda/tripadvisor
cd tripadvisor
yarn install
# Make sure that App.tsx has const STORYBOOK_START = false; If true it will load storybook
yarn start
```

### Storybook

If you want to run storybook:

- Go to `./App.tsx` and set the following statement to true:

```
const STORYBOOK_START = true;
```

- Run storybook server:

```
yarn run storybook
```

- Start app (now it will load the storybook component):

```
yarn start
```

## About

This is a mini clone project on Tripadvisor to show students a complete React Native app

## Support

Please [open an issue](https://github.com/carlosloureda/tripadvisor/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/carlosloureda/tripadvisor/compare/).
