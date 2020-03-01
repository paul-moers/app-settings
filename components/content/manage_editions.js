import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Styles from '../../constants/styles';
import Colors from '../../constants/colors';
import Panel from '../panel';
import TextBlock from '../textBlock';
import HR from '../hr';

const dayOptions = [1, 2, 7, 14, 28];
const defaultDays = 7;

const RemoveAllEditions = () => {
    Alert.alert(
        'Remove all editions?',
        'Removed editions can be redownloaded in the All editions menu.',
        [
            {
                style: 'cancel',
                text: 'Cancel'
            },
            {
                style: 'destructive',
                text: 'Remove'
            }
        ]
    );
};

const ManageEditions = props => {
    const [days, setDays] = useState(defaultDays);

    const updateDays = (days) => {
        setDays(days);
    };

    return (
        <React.Fragment>
            <TextBlock>
                <Text>KEEP OLD EDITIONS FOR:</Text>
            </TextBlock>
            <Panel>
                {dayOptions.map((dayOption, i) => {
                    return <React.Fragment key={dayOption}>
                        {i !== 0 && <HR />}
                        <TouchableOpacity onPress={updateDays.bind(this, dayOption)}>
                            <TextBlock style={Styles.textRow}>
                                <View style={Styles.textCell}><Text>{dayOption} day</Text></View>
                                {days === dayOption &&
                                    <View style={Styles.textCell}>
                                        <Text style={{ ...Styles.textRight, ...styles.checkmark }}>✓</Text>
                                    </View>
                                }
                            </TextBlock>
                        </TouchableOpacity>
                    </React.Fragment>
                })}
            </Panel>
            <Panel style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={RemoveAllEditions}>
                    <TextBlock><Text style={{ color: 'red' }}>Remove all editions</Text></TextBlock>
                </TouchableOpacity>
            </Panel>
            <TextBlock>
                <Text>Current storage usage: 71.35 MB (1 edition)</Text>
            </TextBlock>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    checkmark: {
        color: Colors.accent,
        fontWeight: 'bold'
    }
});

export default ManageEditions;
