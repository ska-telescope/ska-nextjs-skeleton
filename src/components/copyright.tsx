import React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';

export default function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      <MuiLink color='inherit' href='/' className='logo'>
        <Image src='/images/logo-dia.svg' alt='SKA Observatory' width='70' height='19' />
      </MuiLink>
      {' © '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

