import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import { SIZES } from "@/constants/Sizes";
import { COLORS } from "@/constants/AppColors";
import { ThemedText } from "../ThemedText";

const AppButton = ({
  title,
  onPress,
  btnStyle,
  borderColor,
  textStyle,
  disabled = false,
  borderRadius,
  btnTextProps,
  btnIcon,
  type = "h4mid",
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled}
        style={[
          {
            // height: SIZES.height * 0.06,
            width: "80%",
            borderRadius: borderRadius ? borderRadius : 25,
            padding: SIZES.height * 0.013,
            backgroundColor: COLORS.black,
            alignSelf: "center",
            flexDirection: btnIcon && "row",
            justifyContent: btnIcon && "space-between",
          },
          { alignItems: "center", justifyContent: "center" },
          btnStyle,
        ]}
      >
        {btnIcon && <View>{btnIcon}</View>}
        <ThemedText
          style={[
            {
              color: "#fff",
            },
            textStyle,
          ]}
          type={type}
          {...btnTextProps}
        >
          {title}
        </ThemedText>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(AppButton);
