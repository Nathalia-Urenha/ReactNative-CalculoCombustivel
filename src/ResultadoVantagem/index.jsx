import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultadoVantagem(props) {
  return (
    <View style={styles.resultado}>
      <Text style={styles.textResultado}>{props.mensagem}</Text>
    </View>
  );
}
