import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import { contentService } from '../services/contentService';
import { contentItems } from '../constants/contentItems';

const Header = props => {
  const [title, setTitle] = useState();

  const contentSubscription = contentService.getId().subscribe(content => {
    const item = contentItems.find(item => item.contentId === content.id);
    setTitle(item.title);
  });

  useEffect(() => {
    return contentSubscription.unsubscribe
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    borderColor: Colors.border,
    borderBottomWidth: 1,
    width: '100%'
  },
  text: {
    color: 'black',
    fontSize: 18
  }
});
export default Header;
