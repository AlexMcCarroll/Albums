// Import library to create component
import React from 'react';
import { Text, View } from 'react-native';

// Create component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 100,
        paddingTop: 50,
        justifyContent: 'centre',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle : {
        fontSize: 20,
    }
}

// Make component available in the app
export default Header;