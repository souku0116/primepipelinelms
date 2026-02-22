import supabase from './supabaseClient';

/**
 * Authentication Service
 * Helper functions for user authentication with Supabase
 */

// Sign up a new user
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) throw error;
  return data;
};

// Sign in an existing user
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  return data;
};

// Sign out the current user
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Get the current user
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
};

// Listen for auth changes
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback);
};

export default {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  onAuthStateChange
};


