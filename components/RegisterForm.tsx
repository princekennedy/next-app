"use client";

import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    golf_club_size: '',
    type: 'customer',
  });
  
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, phone, golf_club_size, address, type } = formData;

    // Sign up with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      phone,
    });

    if (authError) {
      setError(authError.message);
      return;
    }

    const userId = authData.user?.id;

    if (userId) {
      // Insert user into the database
      const { error: dbError } = await supabase.from('users1').insert({
        user_id: userId,
        name,
        email,
        phone,
        address,
        golf_club_size,
        type,
      });

      if (dbError) {
        setError(dbError.message);
        return;
      }

      // Redirect to login page
      router.push('/login');
    } else {
      setError('Failed to retrieve user ID from Auth.');
    }
  };

  return (
    <div style={styles.cover}>
      <div style={styles.container}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="golf_club_size">Golf Club Size:</label>
            <select
              id="golf_club_size"
              name="golf_club_size"
              value={formData.golf_club_size}
              onChange={handleChange}
              style={styles.input}
            >
              <option>Full Bag Fitting</option>
              <option>Full Bag Fitting Minus Putter</option>
              <option>Long Game Fitting</option>
              <option>Driver Fitting</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="address">address:</label>
            <input
              type="address"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={{ width: '100%', float: 'left', textAlign: 'left' }}>
            <button type="submit" style={styles.button}>
              Register
            </button>
            {error && <span style={styles.error}>{error}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  cover: {
    height: '500px',
    maxWidth: '100%',
  },
  container: {
    height: '400px',
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center' as const,
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'rgba(108, 122, 137, 0.8)',
  },
  inputGroup: {
    textAlign: 'left' as const,
    width: '50%',
    float: 'left' as const,
    padding: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 15px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default RegisterForm;
