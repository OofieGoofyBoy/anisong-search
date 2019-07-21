import React from 'react'

import { SearchResultElement } from './searchResultElement'

const RESULTS_DISPLAY_LIMIT = 10

export class SearchResult extends React.Component {
  searchLyrics = (lyrics, input) => {
    const result = []
    const searchKeys = input.split(' ')
    const lines = lyrics.split('\n')
    let lastHit = -1
    let curIdx = 0
    let curLine = lines[0]
    let curStyle = []

    // TODO: Refactor this shitty code
    for (let i = 0; i < searchKeys.length; i++) {
      while (curIdx < lines.length) {
        const idx = curLine
          .toLowerCase()
          .indexOf(searchKeys[i])
        if (idx === -1) {
          if (lastHit === curIdx) {
            curStyle.push(<span>{curLine}<br/></span>)
          }
          if (curStyle.length > 0) {
            result.push(curStyle)
          }

          curIdx++
          curLine = lines[curIdx]
          curStyle = []
          continue
        }

        const remLine = curLine.substring(idx + searchKeys[i].length)
        const prefix = curLine.substring(0, idx)
        if (lastHit !== -1 && lastHit < curIdx - 1) {
          result.push(<span>...<br/></span>)
        }
        curStyle.push(<span>{prefix}</span>)
        curStyle.push(<span style={{color: 'red'}}>{searchKeys[i]}</span>)

        lastHit = curIdx
        curLine = remLine
        break
      }
      if (curIdx === lines.length) {
        return []
      }
    }

    if (lastHit === curIdx) {
      curStyle.push(<span>{curLine}<br/></span>)
    }
    if (curStyle.length > 0) {
      result.push(curStyle)
    }
    console.log('length =', result.length,'\n', result)
    return result
  }

  searchSongs = (data, input) => {
    const result = []
    let count = 0
    for (const anime of data) {
      for (const song of anime.songs) {
        const searchHit = this.searchLyrics(song.lyrics, input)
        if (searchHit.length > 0) {
          result.push({
            key: count++,
            animeName: anime.name,
            songName: song.name,
            songInfo: song.info,
            lyrics: searchHit,
          })
        }
      }
    }

    result.sort((a, b) => { return a.lyrics.length - b.lyrics.length })
    return result.slice(0, RESULTS_DISPLAY_LIMIT)
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
          <span>{searchHits.map((song) =>
            <SearchResultElement
              key={song.key}
              id={song.key}
              animeName={song.animeName}
              songName={song.songName}
              songInfo={song.songInfo}
              lyrics={song.lyrics}
            />)
          }</span>
        )
      }
    }
  }
}
