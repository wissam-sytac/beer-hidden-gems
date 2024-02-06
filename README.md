# Hidden Gem Beers
Accessible on: https://wissam-sytac.github.io/beer-hidden-gems

Explore brewery data available through OpenBreweryDb API, and save your favorite breweries!

## Requirements
- [x] Beer page ~ style a cool beer page (Mandatory)
- [x] Home page favourites ~ add a list of favourite beers, do not clean after page reload  (Mandatory)
- [x] Home page favourites ~ add a list of favourite beers, do not clean after page reload  (Mandatory)
- [x] Beer list filtering + pagination + sorting (Mandatory)
- [ ] Progressive Web App, offline (Non Mandatory)

## Technicals
- State management: Redux simplifies the state logic and the flow of actions
- Persist middleware to persist the favorites to localStorage
- filter by name is triggered currently on character change. (ideally this is debounced or trigger filter manually via button)

## Known issues
- Not all filters are implemented due to time constraints
- Pagination component works but since the API doesn't return the total number of pages we rely on a temporary work around
- Toast message behavior when multiple beers are favorited in a row
- Local mocks server not loading properly (cause: paths for react-script set via homepage in package.json to accommodate deployment to Github pages)
- Error messages will need to be handled better

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
