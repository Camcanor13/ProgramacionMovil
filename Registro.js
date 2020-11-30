import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ImageBackground,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const backgroundImage = {
  uri:
    'https://raw.githubusercontent.com/Camcanor13/ProgramacionMovil/master/imagenesproyecto/Monitoria.jpg',
};

export class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Correo: '',
      contraseña: '',
      contraseña2: '',
    };
  }

  changeCorreo(Correo) {
    this.setState({Correo});
  }
  changeContraseña(contraseña) {
    this.setState({contraseña});
  }
  changeContraseña2(contraseña2) {
    this.setState({contraseña2});
  }
  buttonPressed() {
    if (this.state.Correo && this.state.contraseña && this.state.contraseña2) {
      if (this.state.contraseña === this.state.contraseña2) {
        auth()
          .createUserWithEmailAndPassword(
            this.state.Correo,
            this.state.contraseña,
          )
          .then(() => {
            alert('Te registraste');
            this.props.navigation.navigate('Login');
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert('Las contraseñas no son iguales');
      }
    } else {
      alert('Error!!');
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Registro</Text>
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
            secureTextEntry={true}
            onChangeText={(contraseña) => this.changeContraseña(contraseña)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            value={this.state.contraseña2}
            secureTextEntry={true}
            onChangeText={(contraseña) => this.changeContraseña2(contraseña)}
          />
          <TouchableHighlight
            style={styles.boton}
            onPress={() => this.buttonPressed()}>
            <Text style={styles.textoBoton}>Registrar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '50%',
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
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
    width: '80%',
  },
  boton: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
    width: '80%',
  },
  textoBoton: {
    textAlign: 'center',
    color: 'white',
  },
  backgroundLogin: {
    height: 100,
    width: '100%',
  },
});
