'use client';

import React from 'react';
import PageBanner from '@/components/pageBanner/PageBanner';
import PageFooter from '@/components/pageFooter/PageFooter';

export default function Title() {

  return (
    <>
      <PageBanner title="Title"/>
      <PageFooter nextPageLabel='team' nextPageURL='/proposal/team'
      />
    </>
  );
}
