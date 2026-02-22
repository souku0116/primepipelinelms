/**
 * Contact Form API Endpoint
 * Express-based API route for handling contact form submissions
 * 
 * This is an optional file for handling form submissions server-side.
 * You can deploy this to Vercel, Netlify Functions, or any Node.js hosting.
 */

const express = require('express');
const router = express.Router();

// Contact form submission handler
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Please fill in all required fields'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    // In a real application, you would:
    // 1. Save to a database (Supabase, MongoDB, etc.)
    // 2. Send confirmation email
    // 3. Send notification email to admin

    // Example: Save to Supabase
    // const { data, error } = await supabase
    //   .from('contact_submissions')
    //   .insert([{ name, email, phone, subject, message }]);

    // For now, just return success
    console.log('Contact form submission:', { name, email, phone, subject, message });

    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'An error occurred. Please try again later.'
    });
  }
});

module.exports = router;
