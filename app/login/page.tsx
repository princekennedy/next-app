"use client"
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import Topnav from '@/components/Topnav';
import React from 'react';

export default function Login() {
  return (
    <>
        <Topnav></Topnav>
        <LoginForm></LoginForm>
        <Footer></Footer>
    </>
  );
};
