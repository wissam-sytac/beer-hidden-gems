# Hidden Gem Beers
Accessible on: https://wissam-sytac.github.io/beer-hidden-gems

Explore brewery data available through OpenBreweryDb API, and save your favorite breweries!

## Requirements
- [ ] Beer page ~ style a cool beer page (Mandatory)
- [x] Home page favourites ~ add a list of favourite beers, do not clean after page reload  (Mandatory)
- [x] Home page favourites ~ add a list of favourite beers, do not clean after page reload  (Mandatory)
- [x] Beer list filtering + pagination + sorting (Mandatory)
- [ ] Progressive Web App, offline (Non Mandatory)

## Technical stack
- State management: Redux

## Known issues
- Not all filters are implemented due to time constraints
- Pagination component works but since the API doesn't return the total number of pages we rely on a temporary work around
- Toast message behavior when multiple beers are favorited in a row
- Local mocks server not loading properly (cause: paths for react-script set via homepage in package.json to accommodate deployment to Github pages)

## Local development

```
npm install
```

```
npm start
```

#### Run app with mocked server response (WIP)
Started setting up e2e tests
```
npm run start:mocks
```

#### run unit tests
```
npm test
```
