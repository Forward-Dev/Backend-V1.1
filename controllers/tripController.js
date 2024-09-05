const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Create a new trip
const createTrip = async (req, res) => {
    const { user_id, destination, startDate, endDate, preferences } = req.body;

    try {
        const { data, error } = await supabase
            .from('trips')
            .insert([{ user_id, destination, start_date: startDate, end_date: endDate, preferences }]);

        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch all trips
const getTrips = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('trips')
            .select('*');

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a specific trip
const updateTrip = async (req, res) => {
    const tripId = req.params.id;
    const { destination, startDate, endDate, preferences } = req.body;

    try {
        const { data, error } = await supabase
            .from('trips')
            .update({ destination, start_date: startDate, end_date: endDate, preferences })
            .eq('id', tripId);

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific trip
const deleteTrip = async (req, res) => {
    const tripId = req.params.id;

    try {
        const { data, error } = await supabase
            .from('trips')
            .delete()
            .eq('id', tripId);

        if (error) throw error;
        res.status(200).json({ message: 'Trip deleted successfully', data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTrip, getTrips, updateTrip, deleteTrip };
