import React from 'react';
import { View } from 'react-native';

import Display from './content/display';
import ManageAccount from './content/manage_account';
import ManageEditions from './content/manage_editions';

const components = {
    display: Display,
    manage_account: ManageAccount,
    manage_editions: ManageEditions
};

const ContentSelecter = props => {
    const ContentComponent = components[props.id];

    return (
        <View>{ContentComponent && <ContentComponent />}</View>
    );
};

export default ContentSelecter;
