import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const AppIconVariables = (color, size) => {
  return {
    cross: (
      <Entypo
        name="cross"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    flip: (
      <MaterialCommunityIcons
        name="camera-flip-outline"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    downArrow: (
      <AntDesign
        name="arrowdown"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    leftArrow: (
      <AntDesign
        name="arrowleft"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    delete: (
      <MaterialCommunityIcons
        name="delete-outline"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    graph: (
      <Entypo
        name="bar-graph"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    video: (
      <Feather
        name="video"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    nightClear: (
      <Fontisto
        name="night-clear"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    heartMultipleOutline: (
      <MaterialCommunityIcons
        name="heart-multiple-outline"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
    clock: (
      <Feather
        name="clock"
        size={size ? size : 24}
        color={color ? color : "black"}
      />
    ),
  };
};
