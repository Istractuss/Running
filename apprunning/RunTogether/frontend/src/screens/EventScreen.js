import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { fetchEvents, registerForEvent } from '../api/eventApi'; // Assume this API file exists

const EventScreen = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            const fetchedEvents = await fetchEvents();
            setEvents(fetchedEvents);
        };
        loadEvents();
    }, []);

    const handleRegister = async (eventId) => {
        await registerForEvent(eventId);
        alert('Successfully registered for the event!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Running Events</Text>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.eventCard}>
                        <Text style={styles.eventName}>{item.name}</Text>
                        <Text>{item.date}</Text>
                        <Text>{item.location}</Text>
                        <Button title="Register" onPress={() => handleRegister(item.id)} />
                    </View>
                )}
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
    eventCard: {
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    eventName: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default EventScreen;