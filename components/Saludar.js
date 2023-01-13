import React from "react";
import { Text } from "react-native";

function Saludar(props) {
  const { nombre, edad } = props;
  console.log(nombre);
  console.log(edad);

  return (
    <Text>
      Hello my friend {nombre} con {edad} años
    </Text>
  );
}

export default Saludar;
