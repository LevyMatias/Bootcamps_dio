
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import photo from './assets/foto-perfil-curriculo.png';

const App = () => {

  function handlerSocial (socialMedia){
    switch(socialMedia){
      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/levy-matias/');
        break;
      case 'github':
        Alert.alert('https://github.com/LevyMatias');
        break;
      case 'facebook':
        Alert.alert('https://www.facebook.com/');
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.header_container}>
          <Image source={photo} style={style.profileImg} />
          <Text style={[style.name, style.gray]}>Levy Matias R</Text>
          <Text style={style.gray}>Beginner Developer</Text>

          <View style={style.socials}>
            <TouchableOpacity onPress={() => handlerSocial('github')}>
            <Icon name="github" size={25} color='#d4cfcf' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerSocial('linkedin')}>
            <Icon name='linkedin' size={25} color='#d4cfcf' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerSocial('facebook')}>
            <Icon name='facebook' size={25} color='#d4cfcf' />
            </TouchableOpacity>
          </View>

          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.title_card}>Courses</Text>
            </View>

            <View style={style.card_content}>
              <Text>JavaScript</Text>
              <Text>HTML e CSS</Text>
              <Text>React</Text>
              <Text>.Net</Text>
              <Text>Git</Text>
            </View>
          </View>

          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.title_card}>Courses</Text>
            </View>

            <View style={style.card_content}>
              <Text>JavaScript</Text>
              <Text>HTML e CSS</Text>
              <Text>React</Text>
              <Text>.Net</Text>
              <Text>Git</Text>
            </View>
          </View>

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
  },
  title_card: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  green: {
    color: '#4ae84a',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#404a40',
    padding: 10,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#4ae84a",
  },
  card: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#4ae84a',
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  card_content: {
    alignItems: 'center',
  }
});
export default App;
