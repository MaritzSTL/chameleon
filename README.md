<p align="center">
  <img src="assets/chameleon.jpg" />
</p>

[![CircleCI](https://circleci.com/gh/MaritzSTL/chameleon/tree/master.svg?style=svg)](https://circleci.com/gh/MaritzSTL/chameleon/tree/master)
[![codecov](https://codecov.io/gh/MaritzSTL/chameleon/branch/master/graph/badge.svg)](https://codecov.io/gh/MaritzSTL/chameleon)

# Chameleon (Currently In Development)

Chameleon Web Components - A collection of lightweight, unidirectional, framework-agnostic elements based on the Chameleon Design System

## Prerequisites

The Chameleon project relies on some awesome tools in order to work properly. You'll want to have the following installed:

- [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript Engine (this project uses v12.7.0)
- [Git](https://git-scm.com/downloads) - Version control software for cloning this repository
- [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) - A bash script to manage multiple active node.js versions
- [Yarn](https://yarnpkg.com/lang/en/) - Package manager used for Yarn workspaces

## Setup

**Note:** Please ensure you have all the prerequisite software installed before running any of these commands!

To setup Chameleon for development, run the following in your folder of choice:

```bash
git clone git@github.com:MaritzSTL/chameleon.git && cd chameleon && nvm use && yarn setup
```

Chameleon uses storybook for development, so when you're ready to get going just run:

```bash
yarn dev
```

To build each element and package for distribution, run:

```bash
yarn build
```

If something looks wrong or you need to refresh your dependencies for whatever reason you can run:

```bash
yarn clean
```
