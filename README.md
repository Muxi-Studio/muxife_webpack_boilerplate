# muxife_webpack_boilerplate

> A webpack boilerplate in order to quickly build up a web app for muxife.  


## Stack

- [x] Webpack
- [x] Google ES5
- [x] AirBnb ES6
- [x] Babel
- [x] ESLint
- [x] sass-Lint
- [x] csscomb
- [x] webpack-dev-server

## How to use
### Install
    $ git clone https://github.com/Muxi-Studio/muxife_webpack_boilerplate.git <yourAppName>
    $ cd <yourAppName>
    $ npm install

### Development
Two ways to build and run your web app:

- For dev server  

`$ npm run dev`   
`Then point your browser to http://localhost:8080/`


- For production 

`$ npm run deploy`

## FAQ

#### When you run DEV or PROD:

- The sass-loader compiles Sass into CSS
- The extract-text-webpack-plugin extracts the compiled Sass into bundle.css
- It compiles app.js into bundle.js

#### When you deploy this:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to production so that React is built in production mode
- Places the resulting built project files into /build directory

## License

MIT
