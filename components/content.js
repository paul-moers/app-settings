import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import ContentSelecter from './contentSelecter';
import { contentService } from '../services/contentService';

const Content = props => {
    const checkPortrait = () => {
        const screenDimensions = Dimensions.get('screen');
        return screenDimensions.height >= screenDimensions.width;
    };

    const [isPortrait, setIsPortrait] = useState(checkPortrait());

    Dimensions.addEventListener('change', () => {
        setIsPortrait(checkPortrait());
    });

    const [contentId, setContentId] = useState();

    const contentSubscription = contentService.getId().subscribe(content => {
        setContentId(content.id);
    });

    useEffect(() => {
        return contentSubscription.unsubscribe
    }, []);

    return (
        <View style={{ ...styles.container, ...(isPortrait ? styles.containerVertical : styles.containerHorizontal) }}>
            <ContentSelecter id={contentId} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        width: '70%'
    },
    containerVertical: {
        paddingHorizontal: 20
    },
    containerHorizontal: {
        paddingHorizontal: 60
    }
});

export default Content;
