import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

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
    
    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
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
