const Event = require('../models/event');

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const { name, location, date, participantLimit } = req.body;
        const newEvent = await Event.create({ name, location, date, participantLimit });
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving events', error });
    }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving event', error });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    try {
        const { name, location, date, participantLimit } = req.body;
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        event.name = name;
        event.location = location;
        event.date = date;
        event.participantLimit = participantLimit;
        await event.save();
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        await event.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
};