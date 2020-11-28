/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  // SafeAreaView,
  StyleSheet,
  //  ScrollView,
  Text,
  // StatusBar,
  TextInput,
  View,
  TouchableHighlight,
  AlertIOS,
  ImageBackground,
} from 'react-native';
import backgroundImage from './imagenesproyecto/Monitoria.jpg';

export default class FormulApp extends Component {
  constructor() {
    super();

    this.state = {
      Correo: '',
      contraseña: '',
    };
  }
  changeCorreo(Correo) {
    this.setState({Correo});
  }
  changeContraseña(contraseña) {
    this.setState({contraseña});
  }
  buttonPressed() {
    if (this.state.Correo && this.state.contraseña) {
      console.log(this.state.Correo + ' ' + this.state.contraseña);
    } else {
      console.log('Error!!');
    }
  }
  render() {
    // No lo entiendo
    return (
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titulo}>Bienvenido </Text>
            <TextInput
              style={styles.input}
              placeholder="Correo Institucional"
              value={this.state.Correo}
              onChangeText={(Correo) => this.changeCorreo(Correo)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={this.state.contraseña}
              onChangeText={(contraseña) => this.changeContraseña(contraseña)}
            />
            <TouchableHighlight
              style={styles.boton}
              onPress={() => this.buttonPressed()}>
              <Text style={styles.textoBoton}>Ingresar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
  },
  textoBoton: {
    textAlign: 'center',
    color: 'white',
  },
  backgroundLogin: {
    height: '100%',
    width: '100%',
  },
});

AppRegistry.registerComponent('FormulApp', () => FormulApp);
