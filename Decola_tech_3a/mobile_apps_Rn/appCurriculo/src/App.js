import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import photo from './assets/foto-perfil-curriculo.png';
import Card from './components/card';
import Social from './components/socials';

const App = () => {


  return (
    <>
      <View style={style.page}>
        <View style={style.header_container}>
          <Image source={photo} style={style.profileImg} />
          <Text style={[style.name, style.gray]}>Levy Matias R</Text>
          <Text style={style.gray}>Beginner Developer</Text>

          <Social />

          <Card title="Courses">
            <Text>JavaScript</Text>
            <Text>HTML e CSS</Text>
            <Text>React</Text>
            <Text>.Net</Text>
            <Text>Git</Text>
          </Card>

          <Card title="Courses">
            <Text>JavaScript</Text>
            <Text>HTML e CSS</Text>
            <Text>React</Text>
            <Text>.Net</Text>
            <Text>Git</Text>
          </Card>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#d4cfcf',
    flex: 1,
  },
  header_container: {
    height: 600,
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 160,
    height: 160,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4ae84a",
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
  }
});
export default App;
