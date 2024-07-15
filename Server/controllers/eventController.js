const Event = require('../Models/Event');

exports.getEvent = async(req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.addEvent =  async(req, res) => {
    const { title, organizer, category, date, description } = req.body;
    const event = new Event({ title, organizer, category, date, description });
    try {
        const savedEvent = await event.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateEvent = async(req,res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


exports.deleteEvent = async(req,res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.searchEvent = async(req,res) =>{
    const query = req.query.query;
    try {
        const events = await Event.find({ 
            $or: [
                { title: { $regex: query, $options: 'i' } }, 
                { organizer: { $regex: query, $options: 'i' } }
            ] 
        });
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.filterEvent = async(req,res) => {
    const { category, date } = req.query;
    let filters = {};
    if (category) filters.category = category;
    if (date) filters.date = date;
    
    try {
        const events = await Event.find(filters);
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
