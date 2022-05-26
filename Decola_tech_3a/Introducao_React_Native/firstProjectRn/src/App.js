import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Pressable, 
    Linking, 
} from 'react-native';

const gitHubColor = '#0d1117';
const imgProfileGithub = 'https://avatars.githubusercontent.com/u/88509014?v=4';
const toGithub = 'https://github.com/LevyMatias';

const App = () => {
    const handlePressToGithub = async () => {
        console.log('verificando!');
        const res = await Linking.canOpenURL(toGithub);
        if (res) {
            console.log('link aprovado!');
            console.log('abrindo...');
            await Linking.openURL(toGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={gitHubColor} />
            <View style={style.content}>
                <Image
                    style={style.avatar}
                    source={{ uri: imgProfileGithub }}
                />
                <Text style={[style.text, style.name]}>levy_m</Text>
                <Text style={[style.text, style.nickname]}>Levy Matias</Text>
                <Text style={[style.text, style.description]}>I am a self-taught student, passionate about technology and computing.</Text>
            </View>
            <Pressable onPress={handlePressToGithub}>
                <View style={style.button}>
                    <Text style={[style.text, style.textbutton]}>
                        Github Profile
                    </Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: gitHubColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 25,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    text: {
        color: '#858c93',
        textAlign: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 21,
    },
    nickname: {
        fontSize: 18,
        color: '#727a83',
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#172d43',
        borderRadius: 40,
        padding: 20,
    },
    textbutton: {
        fontWeight: 'bold',
        fontSize: 17,
    }
});