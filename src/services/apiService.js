import supabase from './supabaseClient';

/**
 * API Service
 * General API calls for the application
 */

// Submit contact form
export const submitContactForm = async (formData) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData]);
  
  if (error) throw error;
  return data;
};

// Get all team members
export const getTeamMembers = async () => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('order', { ascending: true });
  
  if (error) throw error;
  return data;
};

// Get all services
export const getServices = async () => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('order', { ascending: true });
  
  if (error) throw error;
  return data;
};

// Subscribe to newsletter
export const subscribeToNewsletter = async (email) => {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }]);
  
  if (error) throw error;
  return data;
};

export default {
  submitContactForm,
  getTeamMembers,
  getServices,
  subscribeToNewsletter
};


