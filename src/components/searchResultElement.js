import React from 'react'

export class SearchResultElement extends React.Component {
  render() {
    return (
      <div className='search-result-element' key={this.props.id}>
        Anime: {this.props.animeName}
        <br/>
        Song title: {this.props.songName} {this.props.songInfo && `(${this.props.songInfo})`}
        <br/>
        Lyrics: <div>{this.props.lyrics}</div>
      </div>
    )
  }
}
