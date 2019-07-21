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

- Unable to see the lines of the lyrics past the search result.
- Unable to filter by song type (opening/ending/insert).
- Crude UI.
- Need to find a better database for anime songs. Anime Song Lyrics is very incomplete, and has only songs from recent animes. Not to mention the romaji lyrics are often poorly written, with no fixed convention. Anime Lyrics has better lyrics, but is outdated.
