import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AppSafeView = ({ children, style }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[{ flex: 1, backgroundColor: "#FFFFFF" }, style]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppSafeView;
