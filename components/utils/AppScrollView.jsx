import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const AppScrollView = ({
  children,
  style,
  hScrollIndicator = false,
  vScrollIndicator = false,
  viewHorizontal = false,
  otherProps,
}) => {
  return (
    <ScrollView
      style={[styles.container, style]}
      showsHorizontalScrollIndicator={hScrollIndicator}
      showsVerticalScrollIndicator={vScrollIndicator}
      horizontal={viewHorizontal}
      {...otherProps}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(AppScrollView);
