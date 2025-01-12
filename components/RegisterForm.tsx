"use client"
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const RegisterForm: React.FC = () => {

    const router = useRouter();



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, email, password } = formData;
  
    
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      phone: "0996662347", 
    });
  
    if (authError) {
      console.error("Sign-up error:", authError.message);
      return;
    }
  
    const userId = authData.user?.id; 
  
    if (userId) {
      
      const { error: dbError } = await supabase.from('users1').insert({
        user_id:userId,
        name,
        email,
        phone: "0996662347",
        address: "Chilomoni",
        golf_club_size:"single"
      });
  
      if (dbError) {
        console.error("Database insert error:", dbError.message);
        return;
      }
      router.push('/login');
    
    } else {
      console.error("Failed to retrieve user ID from Auth.");
    }
  };
  


  return (
    <div style={styles.cover}>
        <div style={styles.container}>
            <h2>RegisterForm</h2>
            {error && <p style={styles.error}>{error}</p>}
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
                <button type="submit"  style={styles.button}>
                RegisterForm
                </button>
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
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center' as const,
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'rgba(108, 122, 137, 0.8)',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left' as const,
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
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default RegisterForm;
