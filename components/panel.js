import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/colors';

const Panel = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        borderRadius: 5
    }
});

export default Panel;
