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
  const [percAlcool, setPercAlcool] = useState(null);
  const [percGasolina, setPercGasolina] = useState(null);
  const [vantagem, setVantagem] = useState(null);

  async function calculaVantagem() {
    setPercAlcool(Number(valorAlcool) / Number(consumoAlcool));
    console.log(percAlcool);
    setPercGasolina(Number(valorGasolina) / Number(consumoGasolina));
    console.log(percGasolina);
    if (percAlcool < percGasolina) {
      setVantagem("Álcool");
    }
    if (percGasolina < percAlcool) {
      setVantagem("Gasolina");
    } else {
      setVantagem("Empate");
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
      setMensagemDesc("É mais vantajoso usar: ");
      setTextButton("Calcular novamente");
      return;
    }
    setVantagem(null);
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
      <ResultadoVantagem mensagem={mensagemDesc} resultado={vantagem} />
    </View>
  );
}
