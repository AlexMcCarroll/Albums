import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // initial base state
    state = {albums: []};
    
    componentWillMount () {
        // returns a promise
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then( response => console.log(response));
    }
    //functional components need to render jsx
    render() {
        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }
}

export default AlbumList;
