# 🚨 Archived! This site is now in the [liferay.design monorepo](https://github.com/liferay-design/liferay.design) 🔵


# lexicon-site

[![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

## Setup

1. Make sure you have [node and npm](https://nodejs.org/en/download/) installed:

```sh
node -v && npm -v
```

2. Install our global dependencies:

```sh
[sudo] npm i -g electric-cli@alpha
```

3. Install our local dependencies:

```sh
npm i
```

## Usage

* Build the site, serve it locally, and watch for any changes:

```
electric run
```

* Deploy to production (send build files to `wedeploy-lexicon2` branch):

```
electric deploy
```
