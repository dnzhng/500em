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

## Extra Features
* Users can filter the photos by the their favorites and filter out NSFW photos. 

### Concerns
* This task was done with no server side code, which meant the call to the 500px API is relatively unsecure (consumer key is passed in as a query param). It would definitely be preferable to move the api call to the back end so as to not expose the consumer key.
* Testing is still something that I am learning, so I really need to work on writing good tests. I also would like to learn how to write integration tests with React.
* I am wondering how well my code will scale, as I am calculating which photos are being favorited, which may be very slow when a lot of photos are displayed. However, I do think that the size of the data set is limited by the browser's capabilities. This problem could also be handled with server-side code and storing favorites on the backend.
* I made the decision to make favoriting done by clicking the heart icon in the tile, and I only changed the colors of the header/footer surrounding the icon. This is not what the requirements said (clicking the whole tile and changing the background color) but I felt that having a heart to click was more intuitive and made more sense from a UX point of view. Changing the background color also seemed like too big of a visual change, so I decided to just change the surrounding portions of the tile to be more inline with my design.
