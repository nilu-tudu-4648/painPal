import React from 'react';
import { TouchableOpacity, View, type ViewProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';

export type ThemedButtonProps = ViewProps & {
  backgroundColor?: string;
  title: string;
};

export function ThemedButton({
  title,
  style,
  backgroundColor=Colors.light.primary,
  ...otherProps
}: ThemedButtonProps) {

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }, style]} {...otherProps}>
      <ThemedText style={styles.text}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
