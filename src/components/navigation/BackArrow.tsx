import React from 'react';
import { Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface BackArrowProps {
  onPress: () => void;
  marginLeft?: number;
  paddingRight?: number;
}

export default function BackArrow({
  onPress,
  marginLeft,
  paddingRight,
}: BackArrowProps) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#000"
        style={{
          marginLeft: marginLeft ?? 20,
          paddingRight: paddingRight ?? 0,
        }}
      />
    </Pressable>
  );
}
