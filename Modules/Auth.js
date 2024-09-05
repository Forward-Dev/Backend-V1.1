const express = require('express');
const router = express.Router();
// const supabase = require('supabase-js');

// Replace with your Supabase project URL and API key
// const supabaseUrl = 'https://hnnlimkfszavbcbvypqe.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubmxpbWtmc3phdmJjYnZ5cHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1MzUzNjIsImV4cCI6MjA0MTExMTM2Mn0.TONGKIG3Twbx0cxpnn5E5dMdWIdSFTl2jnkUarNa7YE';

// const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
const {createClient} = require('@supabase/supabase-js')
const supabase = createClient('https://hnnlimkfszavbcbvypqe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubmxpbWtmc3phdmJjYnZ5cHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1MzUzNjIsImV4cCI6MjA0MTExMTM2Mn0.TONGKIG3Twbx0cxpnn5E5dMdWIdSFTl2jnkUarNa7YE')


// Create user route
router.post('/users', async (req, res) => {
  const { full_name, email, password, mobile } = req.body;

  try {
    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    // Create a new user record in the users table with additional fields
    const { data, error: insertError } = await supabase.from('users').insert({
      id: user.id,
      full_name,
      email,
      mobile
    });

    if (insertError) {
      return res.status(500).json({ message: 'Error creating user' });
    }

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;