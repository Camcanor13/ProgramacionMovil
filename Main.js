import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import logo from './imagenesproyecto/logo.png';
import fisica from './imagenesproyecto/fisica.jpg';
import matematicas from './imagenesproyecto/matematica.jpg';
import programacion from './imagenesproyecto/programacion.jpg';
const backgroundImage = {
  uri:
    'https://raw.githubusercontent.com/Camcanor13/ProgramacionMovil/master/imagenesproyecto/Monitoria.jpg',
};

export class Main extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.barra}>
            <Image style={styles.logo} source={logo}></Image>
          </View>
          <Text style={styles.titulo}>Monitorias</Text>
          <View style={styles.monitorias}>
            <View style={styles.monitoria}>
              <Image source={matematicas} style={styles.monitoriaimage}></Image>
            </View>
            <View style={styles.monitoria}>
              <Image source={fisica} style={styles.monitoriaimage}></Image>
            </View>
            <View style={styles.monitoria}>
              <Image
                source={programacion}
                style={styles.monitoriaimage}></Image>
            </View>
            <View style={styles.monitoria}></View>
            <View style={styles.monitoria}></View>
            <View style={styles.monitoria}></View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  barra: {
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20,
  },
  monitorias: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  monitoria: {
    width: '30%',
    height: 100,
    borderColor: 'black',
    borderWidth: 5,
    marginVertical: 5,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  monitoriaimage: {
    width: '100%',
    height: '100%',
  },
});
