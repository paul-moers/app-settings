import React, { useState } from 'react';
import { Slider, Text, View } from 'react-native';

import Styles from '../../constants/styles';
import Colors from '../../constants/colors';
import Panel from '../panel';
import TextBlock from '../textBlock';

const sizeSettings = {
    default: 15,
    max: 39,
    min: 9,
    step: 6
}

const Display = props => {
    const [textSize, setTextSize] = useState(sizeSettings.default);

    const changeTextSize = (value) => {
        setTextSize(value);
    };

    return (
        <React.Fragment>
            <TextBlock>
                <Text>TEXT SIZE</Text>
            </TextBlock>
            <Panel>
                <TextBlock>
                    <Text>Drag the slider below to change the font size within the app</Text>
                </TextBlock>
                <TextBlock style={{ ...Styles.textRow, paddingTop: 0 }}>
                    <View style={Styles.textCell}><Text style={{fontSize: sizeSettings.min}}>A</Text></View>
                    <View style={{flex: 12}}>
                        <Slider
                            maximumValue={sizeSettings.max}
                            minimumTrackTintColor={Colors.accent}
                            minimumValue={sizeSettings.min}
                            onValueChange={changeTextSize.bind(this)}
                            step={sizeSettings.step}
                            thumbTintColor={Colors.accent}
                            value={textSize}
                        />
                    </View>
                    <View style={Styles.textCell}><Text style={{...Styles.textRight, fontSize: sizeSettings.max}}>A</Text></View>
                </TextBlock>
            </Panel>
            <TextBlock>
                <Text>PREVIEW</Text>
            </TextBlock>
            <Panel>
                <TextBlock>
                    <Text style={{ fontSize: textSize }}>The quick brown fox jumps over the lazy dog</Text>
                </TextBlock>
            </Panel>
        </React.Fragment>
    );
};

export default Display;
