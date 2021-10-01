import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultadoVantagem from "../ResultadoVantagem";

export default function Form() {
  const [valorAlcool, setValorAlcool] = useState(null);
  const [valorGasolina, setValorGasolina] = useState(null);
  const [consumoAlcool, setconsumoAlcool] = useState(null);
  const [consumoGasolina, setconsumoGasolina] = useState(null);
  const [mensagemDesc, setMensagemDesc] = useState(
    "Preencha os valores do alcool e gasolina por litro e o quantos km seu carro faz com 1L"
  );
  const [textButton, setTextButton] = useState(
    "Calcular qual é mais vantajoso"
  );

  async function calculaVantagem() {
    const alcool = Number(valorAlcool) / Number(consumoAlcool);
    console.log(alcool);
    const gasolina = Number(valorGasolina) / Number(consumoGasolina);
    console.log(gasolina);

    if (alcool < gasolina) {
      setMensagemDesc("É mais vantajoso usar: Alcool");
    } else if (gasolina < alcool) {
      setMensagemDesc("É mais vantajoso usar: Gasolina");
    } else {
      setMensagemDesc("Empate!");
      alert("Resultado: Você pode usar qualquer um dos dois!");
    }
  }

  function validaCampos() {
    if (
      valorAlcool != null &&
      valorGasolina != null &&
      consumoAlcool != null &&
      consumoGasolina != null
    ) {
      calculaVantagem();
      setValorAlcool(null);
      setValorGasolina(null);
      setconsumoAlcool(null);
      setconsumoGasolina(null);
      setTextButton("Calcular novamente");
      return;
    }
    setTextButton("Calcular qual é mais vantajoso");
    setMensagemDesc(
      "Preencha os valores do alcool e gasolina por litro e o quantos km seu carro faz com 1L"
    );
  }

  return (
    <View>
      <Text>Valor do litro do álcool: </Text>
      <TextInput
        onChangeText={setValorAlcool}
        value={valorAlcool}
        placeholder="Ex: 4.50"
        keyboardType="numeric"
      />
      <Text>Quantos km seu carro faz com 1L de álcool: </Text>
      <TextInput
        onChangeText={setconsumoAlcool}
        value={consumoAlcool}
        placeholder="Ex: 10"
        keyboardType="numeric"
      />
      <Text>Valor do litro da Gasolina: </Text>
      <TextInput
        onChangeText={setValorGasolina}
        value={valorGasolina}
        placeholder="Ex: 6.50"
        keyboardType="numeric"
      />
      <Text>Quantos km seu carro faz com 1L de Gasolina: </Text>
      <TextInput
        onChangeText={setconsumoGasolina}
        value={consumoGasolina}
        placeholder="Ex: 20"
        keyboardType="numeric"
      />
      <Button onPress={validaCampos} title={textButton} />
      <ResultadoVantagem mensagem={mensagemDesc} />
    </View>
  );
}
