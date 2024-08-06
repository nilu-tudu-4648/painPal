import { Text } from "react-native";
import { resFontSize } from "../../constants/Sizes";

const AppText = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h1mid,
  h2mid,
  h3mid,
  h4mid,
  h5mid,
  p,
  bold,
  semiBold,
  medium,
  poppinsItalic,
  regular,
  poppinsThin,
  poppinsLight,
  poppinsExtraLight,
  title,
  style,
  ...rest
}) => {
  return (
    <Text
      style={[
        // { fontFamily: "Poppins-Regular" },
        h1 && { fontSize: resFontSize(3) },
        h2 && { fontSize: resFontSize(2.8) },
        h3 && { fontSize: resFontSize(2.2) },
        h4 && { fontSize: resFontSize(2) },
        h5 && { fontSize: resFontSize(1.8) },
        h1mid && {
          fontSize: resFontSize(3),
        },
        h2mid && {
          fontSize: resFontSize(2.8),
        },
        h3mid && {
          fontSize: resFontSize(2.2),
        },
        h4mid && {
          fontSize: resFontSize(2),
        },
        h5mid && {
          fontSize: resFontSize(1.8),
        },
        p && { fontSize: resFontSize(1.5) },
        // bold && { fontFamily: "Poppins-Bold" },
        // semiBold && { fontFamily: "Poppins-SemiBold" },
        // medium && { fontFamily: "Poppins-Medium" },
        // regular && { fontFamily: "Poppins-Regular" },
        // poppinsItalic && { fontFamily: "Poppins-Italic" },
        // poppinsThin && { fontFamily: "Poppins-Thin" },
        // poppinsLight && { fontFamily: "Poppins-Light" },
        // poppinsExtraLight && { fontFamily: "Poppins-ExtraLight" },
        style,
      ]}
      {...rest}
    >
      {title}
    </Text>
  );
};

export default AppText;
