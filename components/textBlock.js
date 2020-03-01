import React from 'react';
import { StyleSheet, View } from 'react-native';

const TextBlock = props => {
    return (
        <View style={{...styles.container, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    }
});

export default TextBlock;
