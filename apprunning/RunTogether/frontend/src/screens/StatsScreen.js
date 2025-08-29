import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const StatsScreen = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('http://your-backend-url/api/stats'); // Replace with your backend URL
                setStats(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStats();
    }, []);

    const renderStatItem = ({ item }) => (
        <View style={styles.statItem}>
            <Text style={styles.statText}>Date: {item.date}</Text>
            <Text style={styles.statText}>Distance: {item.distance} km</Text>
            <Text style={styles.statText}>Pace: {item.pace} min/km</Text>
            <Text style={styles.statText}>Heart Rate: {item.heartRate} bpm</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Statistics</Text>
            <FlatList
                data={stats}
                renderItem={renderStatItem}
                keyExtractor={(item) => item.id.toString()}
            />
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
    statItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    statText: {
        fontSize: 16,
    },
});

export default StatsScreen;