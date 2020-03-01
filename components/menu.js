import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/colors';
import MenuItem from './menuItem';
import { contentItems } from '../constants/contentItems';

const Menu = props => {
  const menu = [];
  for (item of contentItems) {
    if (item.menu) menu.push(<MenuItem
      contentId={item.contentId}
      first={item.first}
      key={item.contentId}
      title={item.title}
    />);
  }

  return (
    <View style={styles.container}>
      {menu}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    width: '30%'
  }
});

export default Menu;
