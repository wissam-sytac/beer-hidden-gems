# Hidden Gem Beers

![logo](https://github.com/wissam-sytac/beer-hidden-gems/assets/42930136/dd6fce13-1bd3-4f6e-82f0-5f2a3acc8f4e)

Accessible on: https://wissam-sytac.github.io/beer-hidden-gems

Explore brewery data available through OpenBreweryDb API, and save your favorite breweries!

## Requirements
- [x] Beer page ~ style a cool beer page (Mandatory)
- [x] Home page favourites ~ add a list of favourite beers, do not clean after page reload  (Mandatory)
- [x] Home page favourites ~ add a list of favourite beers, do not clean after page reload  (Mandatory)
- [x] Beer list filtering + pagination + sorting (Mandatory)
- [ ] Progressive Web App, offline (Non Mandatory)
- [x] Offline detection
      
![Schermopname2024-02-06om13 43 40-ezgif com-video-to-gif-converter](https://github.com/wissam-sytac/beer-hidden-gems/assets/42930136/70a00a4f-420a-47a2-acb3-733b1765b486)

<img width="963" alt="Scherm­afbeelding 2024-02-07 om 05 21 49" src="https://github.com/wissam-sytac/beer-hidden-gems/assets/42930136/b3a2d0b8-4a3c-4105-ac04-5003ec34d7c0">

![Schermopname2024-02-06om13 43 40-ezgif com-video-to-gif-converter (1)](https://github.com/wissam-sytac/beer-hidden-gems/assets/42930136/e4f46399-d790-4980-9556-fb3969f05d35)

## Technicals
- State management: Redux simplifies the state logic and the flow of actions
- Persist middleware to persist the favorites to localStorage
- filter by name is triggered currently on character change. (ideally this is debounced or trigger filter manually via button)
- deployment done one push to branch main via Github actions

<img width="1300" alt="Scherm­afbeelding 2024-02-06 om 13 40 06" src="https://github.com/wissam-sytac/beer-hidden-gems/assets/42930136/95520c0e-5943-4073-96ed-701a27560026">

## Known issues
- Not all filters are implemented due to time constraints
- Pagination component works but since the API doesn't return the total number of pages we rely on a temporary work around
- Toast message behavior when multiple beers are favorited in a row
- Local mocks server not loading properly (cause: paths for react-script set via homepage in package.json to accommodate deployment to Github pages)
- Error messages will need to be handled better

## Future work
- Improve pagination
- Fix toast message issue for multiple notifications
- improve test coverage (current testing is for components within the beers feature)
- build better beer page (by id)
- add are you sure? message for remove all favorites

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
