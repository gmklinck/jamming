import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [
        {name: 'Mt. Diablo', artist: 'TSSF', album: 'USaD'},
        {name: 'Bank Account', artist: '21 Savage', album: 'Issa Album'},
        {name: 'Two Years', artist: 'Wage War', album: 'Deadweight'}
      ],
      playlistName: 'A Playlist Name',
      playlistTracks: [
        {name: 'Mt. Diablo', artist: 'TSSF', album: 'USaD'},
        {name: 'Bank Account', artist: '21 Savage', album: 'Issa Album'},
        {name: 'Two Years', artist: 'Wage War', album: 'Deadweight'}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (track.id !== this.state.playlistTracks) {
      let playlistTracks = this.state.playlistTracks.push(track);
      this.setState({playlistTracks: playlistTracks});
    };
  }

  removeTrack(track) {
    let playlistTracks = this.state.playlistTracks.filter(track => track !== this.track);
    this.setState({playlistTracks: playlistTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName}
          playlistTracks={this.state.playlistTracks}
          onRemove={this.removeTrack}
          onNameChnage={this.updatePlaylistName} />
        </div>
    </div>
</div>
    );
  }
}

export default App;
