<br />
<p align="center">
  <a href="https://mom-secret-recipe.netlify.app/">
    <img src="./src/img/logo.png" alt="Logo" width="100%" height="100%">
  </a>

  <h3 align="center">Mom Secret Recipe</h3>

  <p align="center">
   A beautiful recipe search engine made with modern JavaScript features 😋🍴
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://user-images.githubusercontent.com/55113727/198995982-a818075f-d5c8-46ee-b978-37821113e8f8.mp4">View Demo</a>
    ·
    <a href="https://github.com/devmuzaky/Mom-Secret-Recipe/issues">Report Bug</a>
    ·
    <a href="https://github.com/devmuzaky/Mom-Secret-Recipe/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#Featuers">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Video Demo

https://user-images.githubusercontent.com/55113727/198995982-a818075f-d5c8-46ee-b978-37821113e8f8.mp4


"Mom Secret Recipe" =>   is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Parcel to bundle the modules, and Babel to convert ES6, ES7 and ES8 back to ES5. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.

### Built With

This app is built with pure vanilla JavaScript along with HTML and SCSS. It uses Parcel as module bundler and NPM as package manager.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SCSS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Parcel](https://parceljs.org/)
- [NPM](https://www.npmjs.com/)

<!-- GETTING STARTED -->

## Getting Started

To get started with project just simply fork this repo or download locally on your System.

To get a local copy up and running follow these simple example steps.

### Prerequisites

Start with the latest version of NPM to avoid any errors:

- npm
  ```sh
  npm install npm
  ```

### Installation

1. Get a free API Key at [Forkify API_KEY](https://forkify-api.herokuapp.com/v2)
2. Clone the repo
   ```sh
   git clone https://github.com/devmuzaky/Mom-Secret-Recipe.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const KEY = 'ENTER YOUR API';
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. The Forkify Recipe App allows users to search for recipes.

2. Users can view the recipe along with the cook time and also
   increase or decrease the amount of servings they need.

3. Bookmarked recipes are stored in local storage so no database was
   required for this application.

_For more examples, please refer to the [Documentation](https://forkify-api.herokuapp.com/v2)_

## Features
- User can search over 1,000,000 recipes.
- Powered by the Forkify API.
- Displays the ingredients required to prepare a dish.
- Allows user to choose serving size and accordingly adjusts ingredients.
- Displays recipe images.
- Directs user to source site for detailed recipe procedure.


<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


