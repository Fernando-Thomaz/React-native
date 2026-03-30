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
      historico: [],
      lista: [],
    };

    // definir o tempo como nulo
    this.timer = null;

    // definir a funcao vai
    this.vai = this.vai.bind(this)

    // definir a funcao limpar
    this.limpar = this.limpar.bind(this)

    // definir a funcao de historico
    this.historico = this.historico.bind(this)
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

    this.historico()
  }

  historico() {
    if (this.state.numero != 0){
      if (this.state.historico != ""){
        this.state.historico.push("/",this.state.numero.toFixed(1))
      }
      else {
        this.state.historico.push(this.state.numero.toFixed(1))
      }
      this.setState ({
        lista: this.state.historico.slice(-9)
      })
    }
  }

  // renderização da tela
  render() {
    // oque aparece na tela
    return (
      // body
      <View style={styles.container}>

        {/* container do cronometro */}
        <View style={styles.containerCronometro}>

          {/* gif do relogio */}
          <Image style={styles.gif} source={require("./assets/viaductk-time-slip-7514.gif")}/>

          {/* imagem na tela */}
          <Image style={styles.img} source={require("./assets/cronometro.png")}/>

          {/* numero do cronometro */}
          <Text style={styles.textoCronometro}>{this.state.numero.toFixed(1)}</Text>
        </View>

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

        {/* container do historico */}
        <View style={styles.containerHistorico}>

            <Text style={styles.historicoTitulo}>histórico:</Text>

          <View style={styles.containerRecentes}>

            {/* mostra a lista de valores do historico */}
            <Text style={styles.historicoTexto}>{this.state.lista}</Text>
          </View>
        </View>
      </View>
    );
  };
};

// estilização
const styles = StyleSheet.create({
  containerCronometro: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  img: {
    height: 400,
    width: 400,
  },

  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnTexto: {
    fontSize: 20, 
    fontWeight: "bold",
    color: "white",
  },

  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    width: 350,
    height: 40,
  },

  textoCronometro: {
    color: "black",
    fontSize: 100,
    fontWeight: "bold",
    marginTop: -210,
  },

  containerRecentes: {
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },

  containerHistorico: {
    width: "90%",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },

  historicoTexto: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white"
  },

  historicoTitulo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black"
  },

  gif: {
    width: 320,
    height: 320,
    opacity: 0.5,
    marginBottom: -400,
  },
});

// exporta o App pro index
export default App;

// npx expo start para iniciar o app