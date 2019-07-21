import React from 'react'

const RESULTS_DISPLAY_LIMIT = 10

export class SearchResult extends React.Component {
  searchLyrics = (lyrics, input) => {
    const lines = lyrics.split('\n')
    for (const line of lines) {
      if (line.toLowerCase().includes(input)) {
        return line
      }
    }
    return ''
  }

  searchSongs = (data, input) => {
    const result = []
    let count = 0
    for (const anime of data) {
      for (const song of anime.songs) {
        const searchHit = this.searchLyrics(song.lyrics, input)
        if (searchHit) {
          result.push(
              <div key={count++}>
                Anime: {anime.name}
                <br/>
                Song title: {song.name} {song.info && `(${song.info})`}
                <br/>
                Lyrics: {searchHit}
                <br/>
                <br/>
              </div>
          )
          if (result.length === RESULTS_DISPLAY_LIMIT) {
            return result
          }
        }
      }
    }
    return result
  }

  render() {
    if (!this.props.input) {
      return (
        <span>Write something in the box above!</span>
      )
    } else {
      const searchHits = this.searchSongs(this.props.data, this.props.input)
      if (searchHits.length === 0) {
        return (
          <span>No results found.</span>
        )
      } else {
        return (
          <span>{searchHits}</span>
        )
      }
    }
  }
}
