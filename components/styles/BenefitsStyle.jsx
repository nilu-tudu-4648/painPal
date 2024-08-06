import { screenHeight } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

export const BenefitsStyle = StyleSheet.create({
  imageContainer: {
    height: screenHeight("55%"),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
