import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/colors';

const HR = props => {
    return (
        <View style={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: Colors.border,
        borderBottomWidth: StyleSheet.hairlineWidth
}
});

export default HR;
