import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const screenHeight = (percent) => hp(percent);
export const screenWidth = (percent) => wp(percent);
export const resFontSize = (size) => RFPercentage(size);

export const SIZES = {
    // global sizes
    base: width * 0.03,
    base1: width * 0.02,
    base2: width * 0.01,
    font: 14,
    radius: 30,
    padding: width * 0.03,
    padding2: width * 0.05,
  
    // font sizes
    largeTitle: width * 0.14,
    mediumTitle: width * 0.1,
    h1: width * 0.08,
    h2: width * 0.065,
    h3: width * 0.055,
    h4: width * 0.045,
    h5: width * 0.03,
    h6: width * 0.026,
    h7: width * 0.02,
    // app dimensions
    width,
    height,
  };