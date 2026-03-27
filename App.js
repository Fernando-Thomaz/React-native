// importações
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// objeto App
class App extends Component {
  // construtor
  constructor(props) {
    super(props)

    // propriedades do objeto
    this.state = {
      numero: 0,
      botao: "Iniciar",
    };

    // definir o tempo como nulo
    this.timer = null;

    // definir a funcao vai
    this.vai = this.vai.bind(this)

    // definir a funcao limpar
    this.limpar = this.limpar.bind(this)

  }

  // funções
  // funcao de iniciar cronometro
  vai() {
    if (this.timer != null){
      clearInterval(this.timer)
      this.timer = null;

      this.setState({botao: "Iniciar"});
    }
    else {
      this.timer = setInterval( () => {
        this.setState({numero : this.state.numero +0.1});
      }, 100);

      this.setState({botao: "Parar"});
    }
  }

  // funcao de reiniciar cronometro
  limpar() {
    clearInterval(this.timer)
    this.timer = null;

    this.setState ({
      botao: "Iniciar",
      numero: 0,
    })
  }

  // renderização da tela
  render() {
    // oque aparece na tela
    return (
      // body
      <View style={styles.container}>
        {/* imagem na tela */}
        <Image style={styles.img} source={require("./assets/cronometro.png")}/>

        {/* numero do cronometro */}
        <Text style={styles.textoCronometro}>{this.state.numero.toFixed(1)}</Text>

        {/* container de botão*/}
        <View style={styles.btnArea}>

          {/* botão de iniciar o cronometro*/}
          <TouchableOpacity style={styles.btn} onPress={this.vai}>

            {/* texto do botao */}
            <Text style={styles.btnTexto}>{this.state.botao}</Text>

          </TouchableOpacity>

          {/* botão de zerar o cronometro */}
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>

            {/* texto do botao */}
            <Text style={styles.btnTexto}>Zerar</Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  };
};

// estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },

  img: {

  },

  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnTexto: {
    fontSize: 20, 
    fontWeight: "bold",
    color: "#00aeef",
  },

  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },

  textoCronometro: {
    color: "white",
    fontSize: 65,
    fontWeight: "bold",
    marginTop: -160,
  },
});

// exporta o App pro index
export default App;
