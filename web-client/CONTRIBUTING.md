# Contributing to web-client for Reach4Help

🎉🚀🙌🏻 First off, thanks for taking the time to contribute! 🙌🏻🚀🎉

> First off, thank you for considering contributing to this repository. It's people like you that make Open Source so great.

### Please read our guidelines before you start.

> Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

### Contributions we are looking for.

We keep an open mind! Improving documentation, bug triaging, or writing tutorials are all examples of helpful contributions that mean less work for you.

# Ground Rules

### Follow our Code of Conduct.

We expect everyone to abide by our [**Code of Conduct**](CODE_OF_CONDUCT.md). Please read it. 🤝

# Your First Contribution

Here are a couple of friendly tutorials to help you get started: http://makeapullrequest.com/ and http://www.firsttimersonly.com/

> Working on your first Pull Request? You can learn how from this _free_ series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

# Getting started

## Prerequisites

### You will need at least `node` and `yarn` installed.

- [Download Node Here](https://nodejs.org/en/download/ 'Download Node Here')
- [Download Yarn Here](https://yarnpkg.com/lang/en/docs/install/ 'Download Yarn Here')

#### In this repo we favour `yarn` over `npm` as the "official" package manager since we also leverage `yarn workspaces` as the manager for our `monorepo`

## Run the project

1 - Install dependencies

```
yarn
```

2 - Run the `web-client` project in development mode.

```
cd ./web-client && yarn start
```

3 - The client is now available under [localhost:3000](http://localhost:3000)

# React version and Functional Components

### We are on the latest version of React.

- We favour functional components and hooks to class components.
- We also prefer multiple small components to a big one
- We are leveraging `TypeScript`
- We use `styled-components` for styling
- We use Prettier and ESLint to maintain consistent code

[Check here for latest version of React](https://reactjs.org/versions)

# How to report a bug

> If you find a security vulnerability, please contact us directly at `security@reach4help.org`.
> For any other non security-related issues, open an issue describing the problem.

# How to suggest a feature or enhancement

> Open an issue using with the suggestion you wish to give.

# Code review process

### For your contribution to get accepted after it’s been submitted.

Your contribution will have to be Approved by a member of the Organization before being merged.

> The core team looks at Pull Requests on a regular basis. After feedback has been given we expect responses within two weeks. After two weeks we may close the pull request if it isn't showing any activity.

# Code, commit message and labeling conventions

### Commit message conventions.

We follow the conventional commits guidelines. Check [here](https://www.conventionalcommits.org/en/v1.0.0/)

### Code Style Enforced by Prettier

Prettier guarantees the code style adopted and runs on commit, stick to this code style.

<img height="42" width="42" src="https://prettier.io/icon.png" alt="Prettier">[ Prettier site for more information](https://prettier.io/ 'Prettier site for more information')

# PULL Requests

Opening pull requests should be done with enough information and screenshots for visual changes to facilitate the reviewers job. Its MANDATORY to add a link to the issue related
