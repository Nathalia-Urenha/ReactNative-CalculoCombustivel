import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  textResultado: {
    fontSize: 15,
    color: "#FF0043",
    fontWeight: "bold",
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  textMensagem: {
    fontSize: 18,
    color: "#ff0043",
    fontWeight: "bold",
  },
  boxBotao: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  textoCompartilhar: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  btnCompartilhar: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default styles;
