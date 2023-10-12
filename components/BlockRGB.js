import React from "react";
import { View, Text } from "react-native";

export default function BlockRGB(props) {
  const randomHeight = Math.floor(Math.random() * 200) + 100; 

  return (
    <View
      style={{
        backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
        padding: 30,
        width: "100%",
        height: props.height || randomHeight, 
      }}
    ></View>
  );
}
