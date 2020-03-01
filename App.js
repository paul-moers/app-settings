import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/header';
import Menu from './components/menu';
import Content from './components/content';
import { contentItems } from './constants/contentItems';
import { contentService } from './services/contentService';

const defaultItem = contentItems.find(item => item.default);

export default function App() {
  useEffect(() => contentService.setId(defaultItem.contentId), []);

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.container}>
        <Menu />
        <Content />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  }
});
