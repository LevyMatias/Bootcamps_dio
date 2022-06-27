import React from "react";
import { View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import style from './style';

const Social = () => {
    function handlerSocial(socialMedia) {
        switch (socialMedia) {
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
    );
};

export default Social;