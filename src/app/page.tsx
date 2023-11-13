'use client';

import React from 'react';
import ButtonDown from '../components/buttonDown/ButtonDown';
import WelcomeBanner from '../components/welcomeBanner/welcomeBanner';

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <ButtonDown />
    </>
  );
}
