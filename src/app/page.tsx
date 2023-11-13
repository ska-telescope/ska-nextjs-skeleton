'use client';

import React from 'react';
import ButtonDown from '../components/buttonDown/buttonDown';
import WelcomeBanner from '../components/welcomeBanner/welcomeBanner';

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <ButtonDown />
    </>
  );
}
