# Anisong Search

## WTF

This is an app that provides a quick way to search for an anime given a fragment of the lyrics of one of its songs ~so you can cheat at Anime Music Quiz~.

## Usage

- Run [this crawler](https://github.com/marcoskwkm/anisong-crawler) and save the generated `data.json` in the `/src` folder of this app.
- Run
```
yarn install
yarn start
```
- The app will be available at `http://locahost:3000`.

## Issues and future improvements

- Search should be made more flexible (it currently checks for exact match).
- Unable to filter by song type (opening/ending/insert)
- Search keywords are not highlighted in the lyrics.
- Crude UI.

