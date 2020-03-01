import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';

import Styles from '../../constants/styles';
import Panel from '../panel';
import TextBlock from '../textBlock';
import HR from '../hr';

const urlAndroid = 'https://play.google.com/store/account/subscriptions';

const manageInPlayStore = () => {
    Linking.openURL(urlAndroid);
};

const logOut = () => {
    alert('logout');
};

const ManageAccount = props => {
    return (
        <React.Fragment>
            <Panel>
                <TextBlock style={Styles.textRow}>
                    <View style={Styles.textCell}><Text>Subscription type:</Text></View>
                    <View style={Styles.textCell}><Text style={Styles.textRight}>in-app subscription</Text></View>
                </TextBlock>
                <HR />
                <TouchableOpacity onPress={manageInPlayStore}>
                    <TextBlock>
                        <Text style={Styles.textLink}>Manage your subscription in the play store</Text>
                    </TextBlock>
                </TouchableOpacity>
                <HR />
                <TouchableOpacity onPress={logOut}>
                    <TextBlock>
                        <Text style={Styles.textLink}>Log out</Text>
                    </TextBlock>
                </TouchableOpacity>
            </Panel>
        </React.Fragment>
    );
};

export default ManageAccount;
