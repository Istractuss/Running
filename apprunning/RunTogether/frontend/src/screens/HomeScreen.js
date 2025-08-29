import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoogleMapExample from '../components/GoogleMapExample';

const HomeScreen = () => {
    const nearbyRunners = [
        { id: '1', name: 'John Doe', distance: '2.5 km' },
        { id: '2', name: 'Jane Smith', distance: '3.0 km' },
        { id: '3', name: 'Alice Johnson', distance: '1.8 km' },
    ];

    const renderRunner = ({ item }) => (
        <View style={styles.runnerItem}>
            <Text style={styles.runnerName}>{item.name}</Text>
            <Text style={styles.runnerDistance}>{item.distance}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nearby Runners</Text>
            <FlatList
                data={nearbyRunners}
                renderItem={renderRunner}
                keyExtractor={item => item.id}
            />
            <GoogleMapExample />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    runnerItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    runnerName: {
        fontSize: 18,
    },
    runnerDistance: {
        fontSize: 14,
        color: '#666',
    },
});

export default HomeScreen;