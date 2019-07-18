<h1 align="center">Welcome to my Portfolio</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
</p>

> A website made with no framework whatsoever, used to showcase my differents projects.
> Pure HTML, CSS (Okay, SCSS) and JS. I wanted to strengthen my basics.
> Data are dynamically fetched from Firebase Cloud Firestore.
> Soon will also come another project, used to fill my portfolio with data that will be fetched dynamically.

## Install

Create a file named `./js/firebase/firebase-config.js` and put your firebase config. It should look like :
```js
const firebaseConfig = {
  apiKey: "aaaaaaaaaaaaaaaa-aaaaaaaaaaaaaaaaaaaaaa",
  authDomain: "project.firebaseapp.com",
  databaseURL: "https://project.firebaseio.com",
  projectId: "project",
  storageBucket: "",
  messagingSenderId: "999999999999",
  appId: "9:999999999999:web:aaaaaaaaaaaaaaaa"
};
```

It's already done but you can compile SCSS to CSS :
```sh
> sass ./scss/style.scss ./style.css --style=compressed
```

## Usage

Just host and serve `index.html` !

## Roadmap
TODO : Make a roadmap 🙃

## Author

👤 [**Quentin Widlocher**](https://github.com/QuentinWidlocher)

## Show your support

Give a ⭐️ if you like this project !