import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [tougle, setTougle] = useState(false);
  const handleChangeTougle = () => setTougle(oldTougle => !oldTougle);

  return (
    <View style={tougle ? style.containerLight : style.container}>
      <Image
        style={tougle ? style.lightOn : style.lightOff}
        source={
          tougle
            ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')
        }
      />
      
      <TouchableOpacity onPress={handleChangeTougle}>
      <Image
        style={tougle ? style.buttonOff : style.buttonOn}
        source={
            require('./assets/icons/on-off.png')
        }
      />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  buttonOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'green',
    width: 120,
    height: 120,
  },
  buttonOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'red',
    width: 120,
    height: 120,
  }
});
