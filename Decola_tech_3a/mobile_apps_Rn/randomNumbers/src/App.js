import React, {useState} from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const App = () => {
    const [number,setNumber] = useState(0);

    function handleNumber(){
        const newNumber = Math.floor(Math.random()*1000);
        setNumber(newNumber);
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.number}>{number}</Text>
            <TouchableOpacity onPress={handleNumber}>
                <Text style={style.button}>Gerar número!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#59d469',
        fontSize: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 35,
        color: '#161c57',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#161c57',
        color: '#fcfdff',
        padding: 10,
        borderRadius: 5,
    },
});

export default App;