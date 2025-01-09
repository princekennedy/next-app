"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterForm: React.FC = () => {

    const router = useRouter();

    const loadHome = () => {
        router.push('/admin'); // Navigate to the "About" page
    };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password } = formData;

    // Simple validation
    if (!name || !email || !password) {
      setError('All fields are required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format!');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long!');
      return;
    }

    setError('');
    console.log('RegisterForm successful:', formData);
    // Perform API call for RegisterForm
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
                <button type="submit" onClick={loadHome} style={styles.button}>
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
