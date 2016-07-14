# 500em

[![Build Status](https://travis-ci.org/dnzhng/500em.svg?branch=master)](https://travis-ci.org/dnzhng/500em)

Uses the 500px api to display popular photos

### Getting Started

```
$ git clone https://github.com/dnzhng/500em.git
$ cd 500em
$ npm install
$ npm start
```

### Testing
This project uses mocha with Enzyme and Chai for testing the React components. It also uses Istanbul for code coverage and ESLint.
```
$ npm test
```

### Deploying
This will build the application and deploy it to github pages.
```
$ npm run deploy
```

### Concerns
* This task was done with no server side code, which meant the call to the 500px API is relatively unsecure (consumer key is passed in as a query param). It would definitely be preferable to move the api call to the back end so as to not expose the consumer key.
* Testing is still something that I am learning, so I really need to work on writing good tests. I also would like to learn how to write integration tests with React. 
