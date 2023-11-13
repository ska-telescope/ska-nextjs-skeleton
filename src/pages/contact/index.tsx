// pages/index.tsx

import React from 'react';
import { NextPage } from 'next';
import ContactForm from '../contact';

const ContactPage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Contact Form with validation</h1>
          {false && <ContactForm />}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
