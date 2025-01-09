"use client"
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import Topnav from '@/components/Topnav';
import React from 'react';

export default function Login() {
  return (
    <>
      <div style={{backgroundImage: 'url(/assets/fit-banner1.jpg)'}}>
        <Topnav></Topnav>
        <LoginForm></LoginForm>
      </div>
        <Footer></Footer>
    </>
  );
};
