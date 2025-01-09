import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';
import Topnav from '@/components/Topnav';
import React from 'react';

export default function Register() {

  return (
    <>
      <div style={{backgroundImage: 'url(/assets/fit-banner1.jpg)'}}>
        <Topnav></Topnav>
        <RegisterForm></RegisterForm>
      </div>
       <Footer></Footer>
    </>
  );
};
