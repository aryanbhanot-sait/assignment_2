import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import CalgaryScreen from './calgary';
// import EdmontonScreen from './edmonton';
import { Link } from 'expo-router';

const city = ["Calgary", "Edmonton"];

const Welcome = () => {
    return (
        <View style={styles.container}>|
            <Text>Welcome to My New App</Text>

            {city.map((c) => (
                <Link key={c} href={`/${c}`}>
                    <Text style={styles.title}>{c}</Text>
                </Link>
            ))}



            {/* <CalgaryScreen /> */}
            {/* <EdmontonScreen /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
    },
});
export default Welcome;

