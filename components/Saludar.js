import React from "react";
import { Text } from "react-native";

function Saludar(props) {
  console.log(props.nombre);
  console.log(props.edad);

  return (
    <Text>
      Hello my friend {props.nombre} con {props.edad} años
    </Text>
  );
}

export default Saludar;
