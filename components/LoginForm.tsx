"use client"
import { User } from '@/app/models/interfaces';
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const LoginForm: React.FC = () => {

  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
      email: '',
      password: '',
  });

  const [error, setError] = useState<string| null>('');
  const [loading, setLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loggingUser = async(id: string)=> {
    const {data} = await supabase.from("users1").select("*").eq('user_id',id);
    if(data){
      setLoading(false);
      if(data[0].type == 'admin') {
        router.push('/admin');
      } else {
        router.push('/customer');
      }
    }else{
      setLoading(false);
      setError("failed to get user")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
      setLoading(true);
      e.preventDefault();

      const { email, password } = formData;

      const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
      });

      // you will handle erorrs from the error object nziwi

      if(data.session?.user){
        loggingUser(data.session.user.id)
      }else{
        setLoading(false);
        return setError(error?.message ?? '');
      }

  };




  return (
    <div style={styles.cover} >
        <div style={styles.container}>
            <h2>LoginForm</h2>
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
                <div style={{textAlign: 'left'}}>
                  <button type="submit" className="p-2" style={styles.button} disabled={loading}>
                    {loading ? "Loading..." : "Login"}
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
    maxWidth: '400px',
    margin: '100px auto',
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
    textAlign: 'left' as const,
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: '#a11616',
    marginBottom: '10px',
    margin: '0px 20px',
  },
};

export default LoginForm;
