"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const LoginForm: React.FC = () => {

    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
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

        const { email, password } = formData;

        // Simple validation
        if (!email || !password) {
        setError('All fields are required!');
        return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Invalid email format!');
        return;
        }

        setError('');
        console.log('LoginForm successful:', formData);
        // Perform API call for loginForm
    };


  const loadHome = () => {
    router.push('/admin'); // Navigate to the "About" page
  };

  return (
    <div style={styles.cover}>
        <div style={styles.container}>
            <h2>LoginForm</h2>
            {error && <p style={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
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
                    Login
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
    margin: '100px auto',
    padding: '20px',
    textAlign: 'center' as const,
    border: '1px solid #ccc',
    borderRadius: '5px',
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

export default LoginForm;
