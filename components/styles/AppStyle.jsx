import { COLORS } from "@/constants/AppColors";
import { StyleSheet } from "react-native";

export const AppStyle = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 3,
    borderColor: COLORS.gray2,
  },
});
