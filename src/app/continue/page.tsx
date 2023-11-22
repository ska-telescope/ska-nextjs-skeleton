'use client';

import React from 'react';
import ButtonUp from '../../components/buttonUp/ButtonUp';
import EntryForm from '../../components/entryForm/entryForm';
import LatexForm from '../../components/latexForm/latexForm';

export default function Continue() {
  return (
    <>
      <EntryForm />
      <LatexForm/>
      <ButtonUp />
    </>
  );
}
