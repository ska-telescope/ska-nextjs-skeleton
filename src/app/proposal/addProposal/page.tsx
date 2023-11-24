'use client';

import React from 'react';
import PageBanner from '@/components/layout/pageBanner/PageBanner';
import PageFooter from '@/components/layout/pageFooter/PageFooter';

export default function Title() {

  return (
    <>
      <PageBanner addPage title="Title"/>
      <PageFooter nextPageLabel='create' nextPageURL='/proposal/team' />
    </>
  );
}
