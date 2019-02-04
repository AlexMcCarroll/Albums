import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class based component
class AlbumList extends Component {

    // initial base state
    state = {albums: []};
    
    componentWillMount() {
        // returns a promise & fetches data asyncronosly 
        // ONLY use setState to update the state
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then( response => this.setState({ albums: response.data }));
    }
    
    // mapping through JSON
    renderAlbums() {
        // Key property === ID
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
