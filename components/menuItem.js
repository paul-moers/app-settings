import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/colors';
import { contentService } from '../services/contentService';

const menuItem = ({ first, ...props }) => {
  const [active, setActive] = useState(false);

  const contentSubscription = contentService.getId().subscribe(content => {
    updateActive(content.id);
  });

  useEffect(() => {
    return contentSubscription.unsubscribe
  }, []);

  const updateActive = (contentId, propagate = false) => {
    if (contentId !== props.contentId && active) {
      setActive(false);
    } else if (contentId === props.contentId && !active) {
      setActive(true);
      if (propagate) contentService.setId(contentId);
    }
  };

  const text = <Text style={{ ...styles.text, ...(active ? styles.textActive : {}) }}>{props.title}</Text>;

  return (
    <View style={{ ...styles.container, ...(first ? styles.containerFirst : {}) }}>
      {active ? text : <TouchableOpacity onPress={updateActive.bind(this, props.contentId, true)}>{text}</TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.border,
    width: '100%'
  },
  containerFirst: {
    borderTopWidth: 1,
    marginTop: 15
  },
  text: {
    backgroundColor: Colors.background,
    color: Colors.primary,
    padding: 15
  },
  textActive: {
    backgroundColor: Colors.accent,
    color: Colors.background
  }
});

export default menuItem;
