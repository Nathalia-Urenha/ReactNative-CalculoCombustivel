import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultadoVantagem(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: props.mensagem,
    });
  };
  return (
    <View style={styles.resultado}>
      <View style={styles.boxBotao}>
        <TouchableOpacity onPress={onShare} style={styles.btnCompartilhar}>
          <Text style={styles.textoCompartilhar}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textResultado}>{props.mensagem}</Text>
    </View>
  );
}
